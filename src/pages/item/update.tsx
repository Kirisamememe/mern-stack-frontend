import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useAuth } from "../../utils/AuthContext"
import { ImgUploadIcon } from "../../components/icon/Icon"
import Background from "../../components/Background"
import ImgInput from "../../components/imgInput"
import * as Types from "../../types"
import { fetchUpdate, fetchItem } from '../../apiHelper'

const UpdateItem = () => {
    const params = useParams() as Types.ParamsType
    const { loginUser } = useAuth()

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [mainBody, setMainBody] = useState("")
    const [userId, setUserId] = useState("")
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    const navigate = useNavigate();

    useEffect(() => {
        const getSingleItem = async () => {
            const response = await fetchItem(params.id)
            const jsonResponse = await response.json()

            setTitle(jsonResponse.singleItem.title)
            setImage(jsonResponse.singleItem.image)
            setMainBody(jsonResponse.singleItem.mainBody)
            setUserId(jsonResponse.singleItem.userId)
        }
        getSingleItem()
    },[params.id])
    //params.idが変わったらuseEffectが再度実行される

    useEffect(() => {

        if (title && image && mainBody) {
            setIsButtonDisabled(false)
        }
        else {
            setIsButtonDisabled(true)
        }

    }, [title, image, mainBody])
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {

            const email = loginUser?.email
            const itemId = params.id

            if (!email) {
                alert("権限がありません")
                return
            }
            const response = await fetchUpdate({title, image, mainBody, userId, email, itemId})
            
            const jsonData = await response.json()
            alert(jsonData.message)

            navigate(`/item/${params.id}`);
        } catch (error) {
            alert("アイテム編集失敗")
        }
    }


    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    const handleFileChange = (url: string | null) => {
        setPreviewUrl(url);
    };


    if (loginUser?.userId === userId) {
        return (
            <div>
                <div className="form-container">
                    <form onSubmit={ handleSubmit }>
                        <div className="img-container">
                            <label className={`${previewUrl !== null ? 'imgInputLabelActive' : 'imgInputLabel'}`} htmlFor="fileInput">
                                <ImgInput className={`${previewUrl && !image ? "imgInputAnimation" : ""}`} text={<div className="svgBox" ><ImgUploadIcon/></div>} onFileChange={handleFileChange} setImage={setImage}/>
                                <div className="imgBox">
                                    
                                    <div className="imgBoxText">画像を選択</div>
                                    <img src={previewUrl || image || ""} alt=""/>
                                </div>
                                
                            </label>
                        </div>
                        
                        <div className="form-title">
                            <input style={{display: 'none'}} value={image} onChange={(e) => setTitle(e.target.value)} type="text" name="imageURL" placeholder="URL" required/>
                            <input className="input-title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="アイテム名" required/>
                            <textarea value={mainBody} onChange={(e) => setMainBody(e.target.value)} name="mainBody" rows={15} placeholder="商品説明" required></textarea>
                        </div>
                        
                        <button type="submit" disabled={isButtonDisabled}>編集を完了する</button>
                    </form>
                    <Background image={image}/>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>権限がありません</h1>
            </div>
        )
    }
    
}

export default UpdateItem 