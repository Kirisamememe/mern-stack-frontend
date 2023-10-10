import { useNavigate } from "react-router-dom"
import * as Types from "../../types"
import { fetchDelete, fetchDeleteComment, fetchDeleteSubComment } from '../../apiHelper'

export const useHandleDelete = () => {
    const navigate = useNavigate()

    return async ( params: Types.ParamsType ) => {    
        try {
            const itemId = params.id

            const response = await fetchDelete(itemId)
            const jsonData = await response.json()

            if (!response.ok) {
                alert(jsonData.message)
                return
            }

            alert(jsonData.message)
            navigate(`/`)
        } catch (error) {
            alert("アイテム削除失敗")
        }
    }
}

export const HandleDeleteComment = async ({ params, commentId, commentUpdated, setCommentUpdated }: Types.HandleDeleteCommentType) => {
    try {
        const itemId = params.id
        const response = await fetchDeleteComment({itemId, commentId})

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
        const response = await fetchDeleteSubComment({commentId, subCommentId})

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