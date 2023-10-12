// import { useState } from "react"
import { Link } from "react-router-dom"
// import { useAuth } from "../../utils/AuthContext"
import { LikeIcon20, CommentIcon20 } from "../icon/Icon"
import * as Types from "../../types"

const PostedItem = ({itemId, isCollect, title, mainBody, image, date, likeCnt, cmtCnt}: Types.PostedItemType) => {
    const className = isCollect ? "collectedItem" : "postedItem"

    return (
        <Link to={`/item/${itemId}`} className={`${className}`}>
            <div className="content">
                <div className="textBlock">
                    <h1 className="title20_G1">{title}</h1>
                    <p className="body16_G1_h160 mainBody">{mainBody}</p>
                </div>
                
                <div className="itemInfo">
                    <div className="iconAndText">
                        <LikeIcon20 isCmtLiked={false} animate={false} />
                        <p className="label13_G3_h100">{likeCnt}</p>
                    </div>
                    <div className="iconAndText">
                        <CommentIcon20/>
                        <p className="label13_G3_h100">{cmtCnt}</p>
                    </div>
                    <p className="label13_G3_h100">{date}</p>
                </div>
            </div>
            <div className="image">
                <img src={image} alt="img" />
            </div>
        </Link>
    )
}

export default PostedItem