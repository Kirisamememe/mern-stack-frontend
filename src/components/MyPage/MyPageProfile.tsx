import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../utils/AuthContext"
import Avatar from "../Avatar"
import ProfileNameBlock from "./ProfileNameBlock"
import ProfileStatusBlock from "./ProfileStatusBlock"
import { FollowController } from "../FollowController"
import * as Types from "../../types"

const MyPageProfile = ({ setUserUpdated, userId, avatar, name, signature, itemCnt, coleCnt, following, follower }: Types.MyPageProfileType ) => {

    const { loginUser } = useAuth()
    const [isFollowing, setIsFollowing] = useState(false)
    const [followers, setFollowers] = useState(0)
    const [isHovered, setIsHovered] = useState(false)


    const handleFollow = () => {
        console.log(isFollowing, followers)

        if (loginUser) {
            setIsHovered(false)

            FollowController({
                setUserUpdated: setUserUpdated,
                isFollowing: isFollowing,
                setIsFollowing: setIsFollowing,
                setFollowers: setFollowers,
                yourId: userId,
                myId: loginUser.userId
            })()
            
        }
        else {
            console.log('ログインしてください')
        }
    }

    const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.type !== 'touchstart') {
            setIsHovered(true)
        }
    }
    
    const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.type !== 'touchend') {
            setIsHovered(false)
        }
    }

    useEffect(() => {
        setIsFollowing(follower.includes(loginUser?.userId || ""))
        setFollowers(follower.length)
        

    },[follower, loginUser])

    return (
        <div className="profile">
            <div className="avatarBlock">
                <div className="avatarContainer">
                    <Avatar imageUrl={avatar}/>
                </div>
                {loginUser ? 
                (loginUser.userId === userId ? (<Link className="button_main" to={""}>プロフィールを編集</Link>) : 
                <button
                    onClick={handleFollow}
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    className={isFollowing ? isHovered ? "unFollow" : "following" : ""}>{isFollowing ? isHovered ? "フォロー解除" : "フォロー中" : "フォロー"}</button>) : 
                <></>}
            </div>
            <div className="infoBlock">
                <ProfileNameBlock
                    name={name}
                    signature={signature}
                />
                <ProfileStatusBlock
                    itemCnt={itemCnt}
                    coleCnt={coleCnt}
                    follower={following.length}
                    following={followers}
                />
            </div>
        </div>
    )
}

export default MyPageProfile