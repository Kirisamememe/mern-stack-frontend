// import { useAuth } from "../utils/AuthContext"
import { fetchLike, fetchLikeComment, fetchLikeSubComment } from '../apiHelper'
import * as Types from "../types"

//投稿をいいねする
export const LikeController = ({ isLiked, setIsLiked, setLikes, params, userId }: Types.LikeControllerType) => {

    const handleLike = async () => {
        // Optimistic UI
        setIsLiked(prevIsLiked => !prevIsLiked)
        setLikes(prevLikes => isLiked ? prevLikes - 1 : prevLikes + 1)
        
        try {
            const action = isLiked ? 'unlike' : 'like'
            const itemId = params.id
            const response = await fetchLike({itemId, action, userId})
        
            // 失敗した時、UIを元に戻す
            if (response.status !== 200) {
                console.log("失敗")
                setLikes(prevLikes => isLiked ? prevLikes + 1 : prevLikes - 1)
                setIsLiked(prevIsLiked => !prevIsLiked)
                // console.log(`2: ${isLiked}`)
            }
        } catch (error) {
            setLikes(prevLikes => isLiked ? prevLikes + 1 : prevLikes - 1)
            setIsLiked(prevIsLiked => !prevIsLiked)
            // console.log(`3: ${isLiked}`)
            console.error('Like failed', error)
        }
    };
    return handleLike;
};


//コメントをいいねする
export const LikeCmtController = ({isCmtLiked, setIsCmtLiked, setCmtLikes, userId, commentId}: Types.LikeCmtControllerType) => {

    const handleCmtLike = async () => {
        setIsCmtLiked(prevIsCmtLiked => !prevIsCmtLiked)
        setCmtLikes(prevCmtLikes => isCmtLiked ? prevCmtLikes - 1 : prevCmtLikes + 1)

        try {
            const action = isCmtLiked ? "unlike" : "like"
            const response = await fetchLikeComment({commentId, userId, action})

            if (response.status !== 200) {
                console.log("失敗")
                setCmtLikes(prevLikes => isCmtLiked ? prevLikes + 1 : prevLikes - 1)
                setIsCmtLiked(prevIsCmtLiked => !prevIsCmtLiked)
                // console.log(`2: ${isCmtLiked}`)
            }

        } catch (error) {
            console.log("接続できませんでした")
            setCmtLikes(prevLikes => isCmtLiked ? prevLikes + 1 : prevLikes - 1)
            setIsCmtLiked(prevIsCmtLiked => !prevIsCmtLiked)
        }
    }
    return handleCmtLike
}


//サブコメントをいいねする
export const LikeSbCmtController = ({isSbCmtLiked, setIsSbCmtLiked, setSbCmtLikes, userId, commentId, subCommentId }: Types.LikeSbCmtControllerType) => {

    const handleSbCmtLike = async () => {
        setIsSbCmtLiked(prevIsSbCmtLiked => !prevIsSbCmtLiked)
        setSbCmtLikes(prevSbCmtLikes => isSbCmtLiked ? prevSbCmtLikes - 1 : prevSbCmtLikes + 1)

        try {
            const action = isSbCmtLiked ? "unlike" : "like"
            const response = await fetchLikeSubComment({commentId, subCommentId, userId, action})

            if (response.status !== 200) {
                console.log("失敗")
                setSbCmtLikes(prevLikes => isSbCmtLiked ? prevLikes + 1 : prevLikes - 1)
                setIsSbCmtLiked(prevIsSbCmtLiked => !prevIsSbCmtLiked)
                // console.log(`2: ${isCmtLiked}`)
            }

        } catch (error) {
            setSbCmtLikes(prevLikes => isSbCmtLiked ? prevLikes + 1 : prevLikes - 1)
            setIsSbCmtLiked(prevIsSbCmtLiked => !prevIsSbCmtLiked)
        }
    }
    return handleSbCmtLike
}