import * as Types from "../types"

export const PopupCaution = ({ message, onConfirm, onCancel, yesText, noText }: Types.ConfirmPopupType) => (
    <div className="popup_background">
        <div className="popup">
            <h5>{message.title}</h5>
            <h4>{message.body}</h4>
            <div className="popup_buttonBlock">
                <button className="button_caution" onClick={(e) => onConfirm(true)}>{yesText}</button>
                <button onClick={(e) => onCancel(false)}>{noText}</button>
            </div>
        </div>
    </div>
)

export const Popup = ({ message, onConfirm, onCancel, yesText, noText }: Types.ConfirmPopupType) => (
    <div className="popup_background">
        <div className="popup">
            <h5>{message.title}</h5>
            <h4>{message.body}</h4>
            <div className="popup_buttonBlock">
                <button className="button_caution" onClick={(e) => onCancel(false)}>{noText}</button>
                <button onClick={(e) => onConfirm(true)}>{yesText}</button>
            </div>
        </div>
    </div>
)
