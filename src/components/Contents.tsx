import * as Types from "../types"

const Contents = ({singleItem, FormatDate, paragraphs}: Types.ContentsType) => {
    return (
        <div className="grid-container-si">
            <div>
                {/* これはヘッダー画像　*/}
                {singleItem.image && <img className="headImg" src={singleItem.image} alt="item" />}
            </div>
            <div className="grid-container-si.box">
                {/* タイトルと本文　*/}
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4.2rem",}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2rem", alignSelf: "stretch"}}>
                        <h1>{singleItem.title}</h1>
                        <div className="textInfo">
                            <div className="authorName">{singleItem.name ? `${singleItem.name}` : "Null"}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M9 1H10L7 15H6L9 1Z" fill="#D9D9D9"/>
                            </svg>
                            <h2>{FormatDate(new Date(singleItem.date))}</h2>
                        </div>
                    </div>
                    <div className="white-space-pre-line">
                        {paragraphs}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contents;