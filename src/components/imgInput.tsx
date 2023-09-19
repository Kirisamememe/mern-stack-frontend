import { useEffect, useState } from "react"
import * as Types from "../types"

const ImgInput = ({ className, text, setImage, onFileChange }: Types.ImgInputType) => {
    const [imageFile, setImageFile ] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null >(null)

    useEffect(() => {
        let url: string | null = null;
        if (imageFile) {
            url = URL.createObjectURL(imageFile);
            setPreviewUrl(url);
        }
        return () => {
            if (url) {
                URL.revokeObjectURL(url);
            }
        };
    }, [imageFile]);

    useEffect(() => {
        if (onFileChange) {
            onFileChange(previewUrl);
        }
    }, [previewUrl, onFileChange]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            setImageFile(files[0]);
        } else {
            setImageFile(null);
        }
    };



    const handleClick = async() => {
        if (!imageFile) return;

        try{
            const data = new FormData()
            data.append("file", imageFile)
            data.append("upload_preset", "mememe")
            data.append("cloud_name","dvs51igrz")
            const response= await fetch("https://api.cloudinary.com/v1_1/dvs51igrz/image/upload", {method: "POST", body: data})
            const jsonData = await response.json()
            await setImage(jsonData.url)
            alert("画像アップロード成功")
        }catch(err){
            alert("画像アップロード失敗")
        }
    }


    return (
        <div className="img-input">
            <input id="fileInput" type="file" style={{display: 'none'}} onChange={handleFileChange} accept="image/png, image/jpg"/>
            <button className={className} type="button" onClick={handleClick} disabled={!imageFile}>{text}</button>
        </div>
    )
}

export default ImgInput