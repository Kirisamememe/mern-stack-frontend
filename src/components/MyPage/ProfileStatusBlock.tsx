// import { useState } from "react"
import { Link } from "react-router-dom"
// import { useAuth } from "../../utils/AuthContext"
import * as Types from "../../types"

const ProfileStatusBlock = ({itemCnt, coleCnt, follower, following}: Types.ProfileStatusBlockType) => {
    return (
        <div className="profileStatusBlock">
            <Link to={""} className="numberAndText">
                <h2 className="number">{itemCnt}</h2>
                <p className="body14_G3_h150">投稿数</p>
            </Link>
            <div className="line"></div>
            <Link to={""} className="numberAndText">
                <h2 className="number">{coleCnt}</h2>
                <p className="body14_G3_h150">コレクト</p>
            </Link>
            <div className="line"></div>
            <Link to={""} className="numberAndText">
                <h2 className="number">{follower}</h2>
                <p className="body14_G3_h150">フォロー</p>
            </Link>
            <div className="line"></div>
            <Link to={""} className="numberAndText">
                <h2 className="number">{following}</h2>
                <p className="body14_G3_h150">フォロワー</p>
            </Link>
        </div>
    )
}

export default ProfileStatusBlock