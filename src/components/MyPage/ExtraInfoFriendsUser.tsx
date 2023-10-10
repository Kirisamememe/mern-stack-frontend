// import { useState } from "react"
import { Link } from "react-router-dom"
// import { useAuth } from "../../utils/AuthContext"
import Avatar from "../Avatar"
import * as Types from "../../types"

const ExtraInfoFriendsUser = ({userId, avatar, name, signature}: Types.ProfileNameBlockType) => {
    return (
        <Link to={`/user/myPage/${userId}`} className="friend">
            <Avatar imageUrl={avatar || null}/>
            <div >
                <h2 className="title16_G1">{name}</h2>
                <p className="body14_G3_h150">{signature}</p>
            </div>
        </Link>
    )
}

export default ExtraInfoFriendsUser