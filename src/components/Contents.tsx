import { Link } from "react-router-dom"
import * as Types from "../types"

const Contents = ({singleItem, FormatDate, paragraphs}: Types.ContentsType) => {
    return (
        <div className="content_container">
            {/* これはヘッダー画像　*/}
            {singleItem.image && <img className="headImg" src={singleItem.image} alt="item" />}
            <div className="content_text">
                {/* タイトルと本文　*/}
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4.2rem",}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2rem", alignSelf: "stretch"}}>
                        <h1>{singleItem.title}</h1>
                        <div className="textInfo">
                            <Link to={`/user/myPage/${singleItem.userId}`} className="authorName">{singleItem.name ? `${singleItem.name}` : "Null"}</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M9 1H10L7 15H6L9 1Z" fill="#D9D9D9"/>
                            </svg>
                            <h2>{FormatDate(new Date(singleItem.date))}</h2>
                        </div>
                    </div>
                    <div className="white_space_pre_line">
                        {paragraphs}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contents