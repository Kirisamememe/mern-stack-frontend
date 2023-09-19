import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../utils/AuthContext"
import { ImgUploadIcon } from "../../components/icon/Icon"
import Background from "../../components/Background"
import ImgInput from "../../components/imgInput"

const CreateItem = () => {
    
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [mainBody, setMainBody] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            const response = await fetch("http://localhost:5050/item/create", {
                method: "POST",
                headers: { 
                    "Accept": "application/json", 
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    title: title,
                    image: image,
                    mainBody: mainBody,
                    userId: localStorage.getItem("userId")
                })
            })
            const jsonData = await response.json()
            alert(jsonData.message) 

            navigate("/")
        }catch(err){
            alert("アイテム作成失敗")
        }
    }

    useEffect(() => {
        document.title = "作成ページ"
    }, [])



    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (url: string | null) => {
        setPreviewUrl(url);
    };



    const loginUser = useAuth()

    if(loginUser){
        return (
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="img-container">
                        <label className={`${previewUrl !== null ? 'imgInputLabelActive' : 'imgInputLabel'}`} htmlFor="fileInput">
                            <ImgInput className={""} text={<div className="svgBox" ><ImgUploadIcon/></div>} onFileChange={handleFileChange} setImage={setImage}/>
                            <div className="imgBox">
                                
                                <div className="imgBoxText">画像を選択</div>
                                <img src={previewUrl || ""} alt=""/>
                            </div>
                            
                        </label>
                    </div>
                    <div className="form-title">
                        <input className="input-title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="タイトル" required/>
                        <textarea value={mainBody} onChange={(e) => setMainBody(e.target.value)} name="mainBody" rows={15} placeholder="本文" required></textarea>
                    </div>
                    
                    <button>投稿</button>
                </form>
                <Background image={image}/>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>ログアウトしています</h1>
            </div>
        )
    }
}

export default CreateItem

