import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../utils/AuthContext"
import UserAvatar from "../UserAvatar"
import { LikeIcon20, DeleteIcon20 } from "../icon/Icon"
import {Popup, PopupCaution} from "../ConfirmPopup"
import { LikeSbCmtController } from "../LikeController"
import { HandleDeleteSubComment } from "../../pages/item/delete"
// import Popup from "./ConfirmPopup"
import * as Types from "../../types"

type SubCommentProps = {commentUpdated: boolean, setCommentUpdated: React.Dispatch<React.SetStateAction<boolean>>} & Types.SubCommentType

const SubComment = ({ userId, userName, date, userAvatar, commentId, subCommentId, commentText, like, likeCnt, isLast, commentUpdated, setCommentUpdated}: SubCommentProps) => {

    const { loginUser } = useAuth()
    const navigate = useNavigate()

    

    //ログイン判定
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    const [showLoginPopup, setShowLoginPopup] = useState(false)
    
    const onConfirm = () => {
        setShowLoginPopup(false)
        navigate("/user/login")
    }

    const onCancel = () => {
        setShowLoginPopup(false)
    }
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


    //いいね操作関連
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    const [cmtSbLikes, setSbCmtLikes] = useState(likeCnt)
    const [isSbCmtLiked, setIsSbCmtLiked] = useState(like.includes(loginUser?.userId || "null"))

    const handleSbCommentLike = () => {
        if (loginUser) {
            setAnimate(true)
            setTimeout(() => setAnimate(false), 500)
            const userId = loginUser.userId
            LikeSbCmtController({
                isSbCmtLiked,
                setIsSbCmtLiked,
                setSbCmtLikes,
                userId,
                commentId,
                subCommentId
            })()
        }
        else {
            setShowLoginPopup(true)
        }
    }
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


    //削除操作関連
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    const [showDeletePopup, setShowDeletePopup] = useState(false)

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
        HandleDeleteSubComment({commentId, subCommentId, commentUpdated, setCommentUpdated})
    }

    const onCancel_delete = () => {
        setShowDeletePopup(false)
    }

    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


    //グッドボタンアニメーション
    const [animate, setAnimate] = useState(false)

    const likeTextClass = isSbCmtLiked ? "buttonTextActive" : "buttonTextDefault"
    const maskClass = isLast ? "subLineNoMask" : "subLineMask"
    return (
        <div className="subComment">
            {showLoginPopup && (
                <Popup message={{ title: "ログインしていません", body: "今すぐログインしますか？" }}
                onConfirm={onConfirm} onCancel={onCancel}
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
            <div className="subBlock">
                <Link className="subCommentAvatar" to={`/user/myPage/${userId}`}>
                    <UserAvatar imageUrl={userAvatar}/>
                </Link>
                <div className="commentContainer">
                    <div className="nameBlock">
                        <div className="nameText">{userName}</div>
                        <div className="dateText">{date}</div>
                    </div>
                    <div>
                        <div className="commentText">{commentText}</div>
                    </div>
                    <div className="buttonBlock">
                        <Link className="buttonArea" to="" onClick={handleSbCommentLike}>
                            <LikeIcon20 isCmtLiked={isSbCmtLiked} animate={animate}/>
                            {cmtSbLikes && cmtSbLikes > 0 ? <div className={`${likeTextClass}`}>{`${cmtSbLikes}`}</div> : <></>}
                        </Link>
                        {/* 削除ボタン ーーーーーーーーーーーーーーーーーーーー*/}
                        {userId === localStorage.getItem("userId") ? 
                            (<Link className="deleteButton" to="" onClick={toggleDeleteComment}>
                            <DeleteIcon20/>
                        </Link>) : (<></>)}
                        {/* ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
                    </div>
                </div>
            </div>
            <div className={maskClass}>
                <div className="subLine"/>
            </div>
            {!isLast && <div className="subLineToNext"/>}
        </div>
    )
}

export default SubComment