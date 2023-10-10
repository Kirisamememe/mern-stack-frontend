import { useState } from "react"
import { useAuth } from "../utils/AuthContext"
import { useNavigate } from "react-router-dom"
import { LikeController } from './LikeController'
import { CollectController } from "../pages/item/collect"
import {Popup} from "./ConfirmPopup"
import { LikeIcon36, CommentIcon36, CollectIcon36, ShareIcon36 } from "./icon/Icon"
import * as Types from "../types"

const ButtonBar = ({ likeCnt, commentCnt, collectCnt, liked, params, userId, isCollected, setIsCollected }: Types.ButtonBarType) => {
    const { loginUser } = useAuth()

    const navigate = useNavigate()

    // console.log(likes)
    // console.log(`0: ${isLiked}`)

    //ログインポップ
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    const [showLoginPopup, setShowLoginPopup] = useState(false)

    const onConfirm = () => {
        setShowLoginPopup(false)
        navigate("/user/login")
    }

    const onCancel = () => {
        setShowLoginPopup(false)
    }
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


    //いいね操作関連
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    const [isLiked, setIsLiked] = useState(liked)
    const [likes, setLikes] = useState(likeCnt)
    
    const likeTextClass = isLiked ? "buttonBarTextActive" : "buttonBarText"

    const handleLike = () => {
        if (loginUser && userId) {
            setLikeAnimate(true)
            setTimeout(() => setLikeAnimate(false), 600)

            LikeController({
                isLiked,
                setLikes,
                setIsLiked,
                params,
                userId,
            })()
        }
        else {
            setShowLoginPopup(true)
        }
    }
    // console.log(likeClass)
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



    //コメント操作関連
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    const handleComment = () => {
        if (loginUser) {
            const element = document.getElementById("commentInputBox")
            element?.scrollIntoView({ behavior: "smooth", block: "center" })
        }
        else{
            setShowLoginPopup(true)
        }
    }
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



    //コレクト操作関連
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // const [isCollected, setIsCollected] = useState(liked)
    const [collects, setCollects] = useState(collectCnt)
    
    const collectTextClass = isCollected ? "buttonBarCollectTextActive" : "buttonBarText"

    const handleCollect = () => {
        if (loginUser && userId) {
            setCollectAnimate(true)
            setTimeout(() => setCollectAnimate(false), 600)

            CollectController({
                isCollected,
                setIsCollected,
                setCollects,
                params,
                userId
            })()
        }
        else {
            setShowLoginPopup(true)
        }
    }
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



    //シェア操作関連
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // const [showSharePopup, setShowSharePopup] = useState(false)

    const handleShare = () => {
        if (loginUser) {
            //シェアの処理
            // setShowSharePopup(true)
        }
        else {
            setShowLoginPopup(true)
        }
    }
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



    //アニメーション用
    const [likeAnimate, setLikeAnimate] = useState(false)
    const [collectAnimate, setCollectAnimate] = useState(false)



    return(
        <div className="buttonBar">
            {showLoginPopup && (
                    <Popup message={{ title: "ログインしていません", body: "今すぐログインしますか？" }}
                    yesText="はい"
                    noText="いいえ"
                    onConfirm={onConfirm} onCancel={onCancel} />
            )}
            {/* いいねボタン */}
            {<button id="like" className={`${isLiked ? 'roundButton_Liked' : 'roundButton'}`} onClick={handleLike}>
                <LikeIcon36 isLiked={isLiked} animate={likeAnimate} />
                {likes && likes > 0 ? <div className={`${likeTextClass}`}>{`${likes}`}</div> : <div className={`${likeTextClass}`}>いいね</div>}
            </button>}

            {/* コメントボタン */}
            <button className="roundButton" onClick={handleComment}>
                <CommentIcon36/>
                {commentCnt && commentCnt > 0 ? <div className="buttonBarText">{`${commentCnt}`}</div> : <div className="buttonBarText">コメント</div>}
            </button>
            

            {/* コレクトボタン */}
            <button className={`${isCollected ? 'roundButton_Collected' : 'roundButton'}`} onClick={handleCollect}>
                <CollectIcon36 isCollected={isCollected} animate={collectAnimate}/>
                {collects && collects > 0 ? <div className={`${collectTextClass}`}>{`${collects}`}</div> : <div className={`${collectTextClass}`}>コレクト</div>}
            </button>
            
            {/* シェアボタン */}
            <button className="roundButton" id="share" onClick={handleShare}>
                {/* {showSharePopup && (null)} */}
                <ShareIcon36/>
                <div className="buttonBarText">シェア</div>
            </button>
        </div>
    )
}

export default ButtonBar