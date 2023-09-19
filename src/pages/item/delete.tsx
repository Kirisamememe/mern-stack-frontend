import { useNavigate } from "react-router-dom"
import * as Types from "../../types"

export const useHandleDelete = () => {
    const navigate = useNavigate()

    return async ( params: Types.ParamsType ) => {    
        try {
            const response = await fetch(`http://localhost:5050/item/delete/${params.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                    //authorizationはバックエンドのauthというミドルウェアで使う
                },
            })
            const jsonData = await response.json()

            if (!response.ok) {
                alert(jsonData.message)
                return
            }

            alert(jsonData.message)
            navigate(`/`);
        } catch (error) {
            alert("アイテム削除失敗")
        }
    }
}

export const HandleDeleteComment = async ({ params, commentId, commentUpdated, setCommentUpdated }: Types.HandleDeleteCommentType) => {
    try {
        const response = await fetch(`http://localhost:5050/item/${params.id}/comment/${commentId}/delete`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("token")}`
                //authorizationはバックエンドのauthというミドルウェアで使う
            },
        })

        const jsonData = await response.json()

        if (!response.ok) {
            alert(jsonData.message)
            return
        }

        setCommentUpdated(!commentUpdated)
        alert(jsonData.message)
    } catch (error) {
        alert("削除できませんでした")
    }
}

export const HandleDeleteSubComment = async ({ commentId, subCommentId, commentUpdated, setCommentUpdated }: Types.HandleDeleteSubCommentType) => {
    try {
        const response = await fetch(`http://localhost:5050/comment/${commentId}/${subCommentId}/delete`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("token")}`
                //authorizationはバックエンドのauthというミドルウェアで使う
            },
        })

        const jsonData = await response.json()

        if (!response.ok) {
            alert(jsonData.message)
            return
        }

        setCommentUpdated(!commentUpdated)
        alert(jsonData.message)
    } catch (error) {
        alert("削除できませんでした")
    }
}