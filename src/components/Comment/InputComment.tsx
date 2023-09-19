// import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import UserAvatar from "../UserAvatar"
import * as Types from "../../types"


export const InputSubComment = ({ userAvatar, userName, sendText, setSendText, handleCommentSubmit, isTextAreaVisible, toggleTextArea }: Types.InputSubCommentType) => {

    const handleSubmit = () => {
        handleCommentSubmit(sendText);
        setSendText('');  // テキストエリアをクリア
        toggleTextArea()
    }

    return(
        <>
            {isTextAreaVisible && (
                <div className="sub">
                    <div className="subBlock">
                        <Link className="subCommentAvatar" to={""}>
                            <UserAvatar imageUrl={userAvatar}/>
                        </Link>
                        <div className="content">
                            <div className="nameBlock">
                                <div className="nameText">{userName}</div>
                            </div>
                            <textarea
                                value={sendText}
                                onChange={(e) => setSendText(e.target.value)}
                                placeholder="大変楽しく読ませていただきました"
                            />
                            <div className="subContent">
                                <div className="buttonBlockSubmit">
                                    <button className="submitButton" onClick={handleSubmit} disabled={sendText.length > 200}>送信</button>
                                    <button className="closeButton" onClick={toggleTextArea}>閉じる</button>
                                </div>
                                <div className="textCnt">{sendText.length} / 200</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="subLineMask">
                        <div className="subLine"/>
                    </div>
                    <div className="subLineToNext"/>
                </div>
            )}
        </>
    )
}

export const InputComment = ({sendText, setSendText, handleCommentSubmit}: Types.InputCommentType ) => {

    const handleSubmit = () => {
        handleCommentSubmit(sendText);
        setSendText('');  // テキストエリアをクリア
    }

    return (
        <>
            <div id="commentInputBox" className="sendComment">
                <textarea
                    value={sendText}
                    onChange={(e) => setSendText(e.target.value)}
                    placeholder="大変興味深い文章でした"
                />
                <div className="buttonArea">
                    <div className="textCnt">{sendText.length} / 1000</div>
                    <button className="submitButton" onClick={handleSubmit} disabled={sendText.length > 1000}>送信</button>
                </div>
            </div>
        </>
    )
}