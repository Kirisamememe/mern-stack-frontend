import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import * as Types from "../../types"
import { useAuth } from "../../utils/AuthContext"
import {Popup} from "../../components/ConfirmPopup"
import Contents from "../../components/Contents"
import Background from "../../components/Background"
import FloatButton from "../../components/FloatButton"
import ButtonBar from "../../components/ButtonBar"
import CommentsBlock from "../../components/Comment/CommentsBlock"
import { FormatDate, FormatDatePro } from "../../components/FormartDate"
import { useHandleDelete } from "./delete"
import { fetchItem, fetchUser } from '../../apiHelper'


const ReadSingle = () => {
    const params = useParams() as Types.ParamsType
    const { loginUser } = useAuth()

    const [commentUpdated, setCommentUpdated] = useState(false)
    const [isCollected, setIsCollected] = useState(false)

    const [singleItem, setSingleItem] = useState<Types.ItemType>({
        _id: "",
        title: "",
        date: "",
        image: "",
        mainBody: "",
        email: "",
        name: "",
        collect: 0,
        like: [],
        comments:[{
            userId: "",
            userName: "",
            userAvatar: "",
            date: "",
            commentId: "",
            commentText: "",
            like: [],
            likeCnt: 0,
            subComments:[{
                userId: "",
                userName: "",
                userAvatar: "",
                date: "",
                commentId: "",
                subCommentId: "",
                commentText: "",
                like: [],
                likeCnt: 0,
                isLast: false
            }],
        }]
    })

    const [isLoading, setIsLoading] = useState(true);

    // const navigate = useNavigate();

    //ここからは削除するための処理
    const [showPopup, setShowPopup] = useState(false);

    //OK出たら削除
    const onConfirm = () => {
        handleDelete(params)
        setShowPopup(false);
    };

    const onCancel = () => {
        setShowPopup(false);
    };

    //削除を実行するカスタムフックを実行するための関数
    const handleDelete = useHandleDelete()

    //表示・削除するためのデータをゲットする
    useEffect(() => {
        let isMounted = true
        //  isMountedの必要性について
        //　まず、ページに入ってすぐにページ遷移や条件付きレンダリングなどが発生したとする。
        //  その場合、もし非同期処理であるfetch操作がまだ完了していなければ、
        //  fetchが完了した後にsetSingleItemやsetIsLoadingが実行されようとする。
        //　しかし、その時点で、ReadSingleは既にアンマウントされているため、警告が出る可能性がある

        const getSingleItem = async () => {
            console.log("get")
            try {
                const userId = loginUser?.userId || null

                const [response, userResponse] = await Promise.all([fetchItem(params.id), fetchUser(userId)])
               
                if (userResponse?.ok) {
                    const jsonResponse_user = await userResponse.json()

                    if (jsonResponse_user.collect.some((obj: {itemId: string}) => obj.itemId === singleItem._id)) {
                        setIsCollected(true)
                    }
                }
                else {
                    // alert("ユーザー情報を取得できませんでした")
                    //何か画面上に表示する
                }
                
                
                if (!response.ok) {
                    alert("アイテム情報を取得できませんでした")
                    return
                }

                const jsonResponse = await response.json()
                

                if (isMounted) {
                    setSingleItem({
                        like: jsonResponse.singleItem.like,
                        _id: jsonResponse.singleItem._id,
                        title: jsonResponse.singleItem.title,
                        image: jsonResponse.singleItem.image,
                        date: jsonResponse.singleItem.date,
                        mainBody: jsonResponse.singleItem.mainBody,
                        email: jsonResponse.singleItem.email,
                        name: jsonResponse.singleItem.name,
                        collect: jsonResponse.singleItem.collect,
                        comments: jsonResponse.singleItem.comments?.map((comment: Types.CommentType) => ({

                            date: FormatDatePro(new Date(comment.date), "MDHM"),
                            userId: comment.userId,
                            userName: comment.userName,
                            userAvatar: comment.userAvatar,
                            commentId: comment.commentId,
                            commentText: comment.commentText,
                            like: comment.like,
                            likeCnt: comment.like.length,
                            subComments: comment.subComments?.map((subComment: Types.SubCommentType, index: number, arr: Types.SubCommentType[]) => ({

                                date: FormatDatePro(new Date(subComment.date), "MDHM"),
                                userId: subComment.userId,
                                userName: subComment.userName,
                                userAvatar: subComment.userAvatar,
                                commentId: comment.commentId,
                                subCommentId: subComment.commentId,
                                commentText: subComment.commentText,
                                like: subComment.like,
                                likeCnt: subComment.like.length,
                                isLast: index === arr.length - 1

                            }))
                        }))
                    })

                    setIsLoading(false)
                }

            } catch (error) {
                if (isMounted) {
                    alert("問題が発生しました")
                }
            }
        }
        getSingleItem()

        // クリーンアップ処理
        return () => {
            isMounted = false
            setCommentUpdated(false)
        }
    },[params.id, commentUpdated, loginUser, singleItem._id])
    //params.idとcommentUpdatedが変わったらuseEffectが再度実行される
    // console.log(singleItem)


    const paragraphs = singleItem.mainBody.split('\n').map((paragraph, index) => (
        <p key={index} className="paragraph-spacing">{paragraph}</p>
    ));

    

    return (
        <div>
            {!isLoading &&
            <>
            {/* ここからはポップアップ　*/}
            {showPopup && (
                <Popup message={{ title: "本当に削除しますか？", body: "削除したデータは復元できません" }}
                onConfirm={onConfirm} onCancel={onCancel}
                yesText="はい"
                noText="いいえ"
                />
            )}
            <div className="itemBody">
                <Contents singleItem={singleItem} FormatDate={FormatDate} paragraphs={paragraphs}/>
                <ButtonBar
                    likeCnt={singleItem.like.length}
                    commentCnt={singleItem.comments?.length || 0}
                    collectCnt={singleItem.collect}
                    params={params}
                    userId={loginUser?.userId}
                    liked={singleItem.like.includes(loginUser?.userId || "")}
                    isCollected={isCollected}
                    setIsCollected={setIsCollected}
                />
                <CommentsBlock
                    commentUpdated={commentUpdated}
                    setCommentUpdated={setCommentUpdated}
                    params={params}
                    comments={singleItem.comments || []}
                />
            </div>
            {loginUser?.email === singleItem.email ? (<FloatButton params={params} setShowPopup={setShowPopup}/>) : (null)}
            <Background image={singleItem.image}/>
            </>}
        </div>
    )    
}

export default ReadSingle