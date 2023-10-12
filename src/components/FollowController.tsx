import { follow } from '../apiHelper'
import * as Types from "../types"

export const FollowController = ({ isFollowing, setIsFollowing, setFollowers, yourId, myId, setUserUpdated}: Types.FollowControllerType) => {

    const handleFollow = async () => {
        // Optimistic UI
        setIsFollowing(prevIsFollowing => !prevIsFollowing)
        setFollowers(prevFollowers => isFollowing ? prevFollowers - 1 : prevFollowers + 1)
        
        try {
            const action = isFollowing ? 'unFollow' : 'follow'

            console.log(yourId, myId, action)
            const response = await follow({yourId, myId, action})
        
            // 失敗した時、UIを元に戻す 
            if (response.status !== 200) {
                console.log("失敗しました")
                setFollowers(prevFollowers => isFollowing ? prevFollowers + 1 : prevFollowers - 1)
                setIsFollowing(prevIsFollowing => !prevIsFollowing)
                // console.log(`2: ${isFollowed}`)
            }
            else {
                setUserUpdated(prev => !prev)
            }
            
        } catch (error) {
            setFollowers(prevFollowers => isFollowing ? prevFollowers + 1 : prevFollowers - 1)
            setIsFollowing(prevIsFollowing => !prevIsFollowing)
            // console.log(`3: ${isFollowed}`)
            console.error('サーバとの通信に問題が発生しました', error)
        }
    }
    return handleFollow
}