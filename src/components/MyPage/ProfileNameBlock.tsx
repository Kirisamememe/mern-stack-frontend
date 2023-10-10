// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { useAuth } from "../../utils/AuthContext"
import * as Types from "../../types"

const ProfileNameBlock = ({name, signature}: Types.ProfileNameBlockType) => {
    return (
        <div className="profileNameBlock">
            <h1 className="title24_G1">{name}</h1>
            <p className="body14_G3_h150">{signature}</p>
        </div>
    )
}

export default ProfileNameBlock