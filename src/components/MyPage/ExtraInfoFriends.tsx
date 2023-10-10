import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { useAuth } from "../../utils/AuthContext"
import ExtraInfoFriendsUser from "./ExtraInfoFriendsUser"
import BlockTitle from "../BlockTitle"
import { fetchUser } from '../../apiHelper'
// import * as Types from "../../types"

const ExtraInfoFriends = ({friends}: {friends: string[]}) => {

    const [followedUsersProfile, setFollowedUsersProfile] = useState<{userId: string, name: string, avatar: string, signature: string}[]>([])

    useEffect(() => {
        const getFollowedUsersProfile = async ( friends: string[] ) => {
            try {
                const responses = await Promise.all(friends.map(friend => fetchUser(friend,["_id", "name", "avatar", "signature"])))
                // if (!responses[0]?.ok) {
                //     // alert("ユーザー情報を取得できませんでした")
                //     return
                // }

                const jsonResponses = await Promise.all(responses.map(res => res?.json()))

                setFollowedUsersProfile(jsonResponses.map(res => ({
                    userId: res.userData._id, 
                    name: res.userData.name,
                    avatar: res.userData.avatar,
                    signature: res.userData.signature
                })))

            } catch (error) {
                // alert("ユーザー情報を取得できませんでした")
            }
        }
        getFollowedUsersProfile(friends)
    },[friends])

    return (
        <div className="extraInfoFriends">
            <BlockTitle text="おすすめのユーザー"/>
            <div className="friends">
                {followedUsersProfile.map((profile) => (
                    <ExtraInfoFriendsUser
                        key={profile.userId}
                        userId={profile.userId}
                        avatar={profile.avatar}
                        name={profile.name}
                        signature={profile.signature}
                    />
                ))}
            </div>
        </div>
    )
}

export default ExtraInfoFriends