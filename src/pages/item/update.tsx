import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useAuth } from "../../utils/AuthContext"
import { ImgUploadIcon } from "../../components/icon/Icon"
import ImgInput from "../../components/imgInput"

const UpdateItem = () => {
    const params = useParams()

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [mainBody, setMainBody] = useState("")
    const [userId, setUserId] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        const getSingleItem = async () => {
            const response = await fetch(`http://localhost:5050/item/${params.id}`)
            const jsonResponse = await response.json()

            setTitle(jsonResponse.singleItem.title)
            setImage(jsonResponse.singleItem.image)
            setMainBody(jsonResponse.singleItem.mainBody)
            setUserId(jsonResponse.singleItem.userId)
        }
        getSingleItem()
    },[params.id])
    //params.idが変わったらuseEffectが再度実行される
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:5050/item/update/${params.id}`, {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    title: title,
                    image: image,
                    mainBody: mainBody,
                    userId: userId,
                    email: loginUser?.email
                })
            })
            console.log(loginUser?.email)
            console.log(userId)
            const jsonData = await response.json()
            alert(jsonData.message)

            navigate(`/item/${params.id}`);
        } catch (error) {
            alert("アイテム編集失敗")
        }
    }


    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (url: string | null) => {
        setPreviewUrl(url);
    };



    const { loginUser } = useAuth()

    if (loginUser?.userId === userId) {
        return (
            <div>
                <div className="form-container">
                    <form onSubmit={ handleSubmit }>
                        <div className="img-container">
                            <label className={`${image !== null ? 'imgInputLabelActive' : 'imgInputLabel'}`} htmlFor="fileInput">
                                <ImgInput className={""} text={<div className="svgBox" ><ImgUploadIcon/></div>} onFileChange={handleFileChange} setImage={setImage}/>
                                <div className="imgBox">
                                    
                                    <div className="imgBoxText">画像を選択</div>
                                    <img src={image || previewUrl || ""} alt=""/>
                                </div>
                                
                            </label>
                        </div>
                        
                        <div className="form-title">
                            <input className="input-title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="アイテム名" required/>
                            <textarea value={mainBody} onChange={(e) => setMainBody(e.target.value)} name="mainBody" rows={15} placeholder="商品説明" required></textarea>
                        </div>
                        <div className="img-container">
                            <ImgInput className={""} text={<div></div>} setImage={setImage} onFileChange={handleFileChange}/>
                        </div>
                        <button>編集を完了する</button>
                    </form>
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