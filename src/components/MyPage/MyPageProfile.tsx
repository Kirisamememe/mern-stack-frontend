import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../utils/AuthContext"
import Avatar from "../Avatar"
import ProfileNameBlock from "./ProfileNameBlock"
import ProfileStatusBlock from "./ProfileStatusBlock"
import * as Types from "../../types"

const MyPageProfile = ({ userId, avatar, name, signature, itemCnt, coleCnt, follower, following }: Types.MyPageProfileType ) => {

    const { loginUser } = useAuth()
    const [isFollowing, setIsFollowing] = useState(false)
    const [isHovered, setIsHovered] = useState(false)


    const handleFollow = () => {
        setIsFollowing(!isFollowing)
        //FollowController()()
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }
    
    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    useEffect(() => {
        setIsFollowing(follower.includes(loginUser?.userId || ""))


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
                    follower={follower.length}
                    following={following.length}
                />
            </div>
        </div>
    )
}

export default MyPageProfile