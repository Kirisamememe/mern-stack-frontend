import { useState } from "react"
import Comment from "./Comment"
import { useAuth } from "../../utils/AuthContext"
import { InputComment } from "./InputComment"
import * as Types from "../../types"


//CommentType[]とすることで、CommentsBlockはCommentTypeの配列を期待するようになる。
//[]がないと、一個一個のオブジェクトを期待してしまう
const CommentsBlock = ({comments, params, commentUpdated, setCommentUpdated}:
    {
        comments: Types.CommentType[],
        params: Types.ParamsType, 
        commentUpdated: boolean, 
        setCommentUpdated: React.Dispatch<React.SetStateAction<boolean>>
    }) => {
    

    //コメント送信関連
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    const [sendText, setSendText] = useState('');

    //コメント送信
    const handleCommentSubmit = async( sendText: string ) => {
        try {
            const response = await fetch(`http://localhost:5050/item/${params.id}/comment`, {
                method: "POST",
                headers: { 
                    "Accept": "application/json", 
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    userId: localStorage.getItem("userId"),
                    commentText: sendText,
                })
            })

            const jsonData = await response.json()
            alert(jsonData.message) 

            setCommentUpdated(!commentUpdated)
        } catch (error) {
            alert("コメント投稿失敗")
            console.log(error)
        }
    };
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


    const { loginUser } = useAuth()

    return(
        <div className="commentDiv">
            {loginUser && 
            <>
                <InputComment
                    sendText={sendText}
                    setSendText={setSendText}
                    handleCommentSubmit={handleCommentSubmit}
                />
            </>
            }
            {comments.length > 0 &&
            <>
            <div className="titleBox">
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="18" viewBox="0 0 7 18" fill="none">
                    <path d="M2 0H7L5 18H0L2 0Z" fill="#5741E7"/>
                </svg>
                <div className="commentTitle">コメント</div>
            </div>
            
            <div className="commentBlock">
                {comments.map((comment, index) => (
                    <Comment
                        key={index}
                        userId={comment.userId}
                        userName={comment.userName}
                        date={comment.date}
                        userAvatar={comment.userAvatar || null}
                        commentId={comment.commentId}
                        commentText={comment.commentText}
                        like={comment.like}
                        likeCnt={comment.likeCnt}
                        subComments={comment.subComments || null}
                        likeState={comment.likeState}
                        commentUpdated={commentUpdated}
                        setCommentUpdated={setCommentUpdated}
                    />
                ))}
            </div>
            </>}
        </div>
    )
}

export default CommentsBlock