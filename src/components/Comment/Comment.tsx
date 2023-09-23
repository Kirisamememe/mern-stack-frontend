import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../utils/AuthContext"
import UserAvatar from "../UserAvatar"
import { LikeIcon20, CommentIcon20, DeleteIcon20 } from "../icon/Icon"
import { LikeCmtController } from '../LikeController'
import SubComment from "./SubComment"
import { InputSubComment } from "./InputComment"
import { HandleDeleteComment } from "../../pages/item/delete"
import {Popup, PopupCaution} from "../ConfirmPopup"
import * as Types from "../../types"
import { fetchPostSubComment } from '../../apiHelper'

type CommentProps = {commentUpdated: boolean, setCommentUpdated: React.Dispatch<React.SetStateAction<boolean>>} & Types.CommentType

const Comment = ({ 
    userId, 
    commentId, 
    userName, 
    date, 
    userAvatar, 
    commentText, 
    like,
    likeCnt,
    subComments, 
    commentUpdated, 
    setCommentUpdated }: CommentProps) => {

    const params = useParams() as Types.ParamsType
    
    //ログイン判定関連
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    const { loginUser } = useAuth()
    const navigate = useNavigate()

    //  「ログインしますか」のポップアップを呼び出す
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    
    const onConfirm_login = () => {
        setShowLoginPopup(false)
        navigate("/user/login")
    };

    const onCancel_login = () => {
        setShowLoginPopup(false)
    };

    //  ログインしてれば入力ボックスを開く。してなければログインを促す
    const toggleTextArea = () => {
        if (loginUser) {
            setTextAreaVisible(!isTextAreaVisible);
        }
        else {
            setShowLoginPopup(true)
        }
    };
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


    //コメント削除関連
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    const toggleDeleteComment = () => {
        //このチェック、もしかしたらいらないかもしれないけど、一応念のため
        if (loginUser) {
            setShowDeletePopup(true)
            
        }
        else{
            setShowLoginPopup(true)
        }
    }

    //削除確認
    const onConfirm_delete = () => {
        setShowDeletePopup(false)
        HandleDeleteComment({params, commentId, commentUpdated, setCommentUpdated})
    };

    const onCancel_delete = () => {
        setShowDeletePopup(false)
    };
    
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

    
    
    //いいね関連
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    const [cmtLikes, setCmtLikes] = useState(likeCnt);
    const [isCmtLiked, setIsCmtLiked] = useState(like.includes(loginUser?.userId || "null"))

    const likeTextClass = isCmtLiked ? "buttonTextActive" : "buttonTextDefault"

    const handleCommentLike = () => {
        if (loginUser) {
            setAnimate(true)
            setTimeout(() => setAnimate(false), 500)
            const userId = loginUser.userId
            LikeCmtController({
                isCmtLiked,
                setIsCmtLiked,
                setCmtLikes,
                userId,
                commentId
            })()
        }
        else {
            setShowLoginPopup(true)
        }
    }
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    
    
    
    //コメント送信関連
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    const [sendText, setSendText] = useState('');
    const [isTextAreaVisible, setTextAreaVisible] = useState(false);

    const handleCommentSubmit = async( sendText: string ) => {
        try {
            const response = await fetchPostSubComment({commentId, sendText})

            const jsonData = await response.json()
            alert(jsonData.message) 

            setCommentUpdated(!commentUpdated)
        } catch (error) {
            alert("コメント投稿失敗")
            console.log(error)
        }
    };
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


    


    //グッドボタンアニメーション
    const [animate, setAnimate] = useState(false)

    

    return(
        <div className="comment">
            {showLoginPopup && (
                <Popup message={{ title: "ログインしていません", body: "今すぐログインしますか？" }}
                onConfirm={onConfirm_login} onCancel={onCancel_login}
                yesText="はい"
                noText="いいえ"
                />
            )}
            {showDeletePopup && (
                <PopupCaution message={{ title: "本当に削除しますか？", body: "削除したデータは復元できません" }}
                onConfirm={onConfirm_delete} onCancel={onCancel_delete}
                yesText="はい"
                noText="いいえ"
                />
            )}
            <div className="main">
                <Link className="commentAvatar" to="">
                    <UserAvatar imageUrl={userAvatar}/>
                </Link>
                <div className="content">
                    {/* 名前と日付 */}
                    <div className="nameBlock">
                        <div className="nameText">{userName}</div>
                        <div className="dateText">{date}</div>
                    </div>

                    {/* コメント内容 */}
                    <div className="commentText">{commentText}</div>

                    {/* ボタン */}
                    <div className="buttonBlock">
                        {/* いいねボタン ーーーーーーーーーーーーーーーーーーーーー*/}
                        <Link className="buttonArea" to="" onClick={handleCommentLike}>
                            <LikeIcon20 isCmtLiked={isCmtLiked} animate={animate}/>
                            {cmtLikes && cmtLikes > 0 ? <div className={`${likeTextClass}`}>{`${cmtLikes}`}</div> : <></>}
                        </Link>
                        {/* ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
                        {/* コメントボタン ーーーーーーーーーーーーーーーーーーーー*/}
                        <Link className="buttonArea" to="" onClick={toggleTextArea}>
                            <CommentIcon20/>
                            {/* <div className="buttonTextDefault">コメント</div> */}
                        </Link>
                        {/* ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
                        {/* 削除ボタン ーーーーーーーーーーーーーーーーーーーー*/}
                        {userId === localStorage.getItem("userId") ? 
                            (<Link className="deleteButton" to="" onClick={toggleDeleteComment}>
                            <DeleteIcon20/>
                        </Link>) : (<></>)}
                        {/* ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
                    </div>
                </div>
                {subComments.length > 0 || isTextAreaVisible ? (<div className="mainLine"/>) : (<></>)}
            </div>
            <InputSubComment
                userAvatar={localStorage.getItem("avatar")}
                userName={localStorage.getItem("userName")}
                sendText={sendText} 
                setSendText={setSendText} 
                isTextAreaVisible={isTextAreaVisible}
                toggleTextArea={toggleTextArea}
                handleCommentSubmit={handleCommentSubmit}
                isSubCommentExist={subComments.length > 0}
            />
            {subComments && subComments.map((subComment) => (
                <SubComment
                key={subComment.subCommentId}
                userId={subComment.userId}
                userName={subComment.userName}
                date={subComment.date}
                userAvatar={subComment.userAvatar}
                commentId={subComment.commentId}
                subCommentId={subComment.subCommentId}
                commentText={subComment.commentText}
                like={subComment.like}
                likeCnt={subComment.likeCnt}
                isLast={subComment.isLast}
                commentUpdated={commentUpdated}
                setCommentUpdated={setCommentUpdated}
                />
            ))}
        </div>
    )
}

export default Comment