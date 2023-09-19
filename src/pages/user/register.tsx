import { useState, useEffect } from "react"
import * as Types from "../../types"
// import ImgInput from "../../components/imgInput"
import FloatLabel from "../../components/FloatLabel"

const Register = () => {
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        code: "",
        avatar: ""
    })

    const handleChange = (e: Types.E) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }
    // const handleAvatarChange = (avatar: string) => {
    //     setNewUser({
    //         ...newUser,
    //         avatar: avatar
    //     });
    // };

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const validateEmail = (event: React.FocusEvent<HTMLInputElement>) => {
        const value = event.target.value
        setIsEmailValid(value.includes("@") || value === "")
        //@を含むか、空になっている以外の場合は色を赤にする
    }

    const validateName = (event: React.FocusEvent<HTMLInputElement>) => {
        const value = event.target.value
        setIsNameValid(value.length < 12 || value === "")
    }

    const validatePassword = (event: React.FocusEvent<HTMLInputElement>) => {
        const value = event.target.value
        setIsPasswordValid((8 < value.length && value.length < 16) || value === "")
    }
    

    useEffect(() => {
        document.body.classList.add('register-background');
        return () => {
            document.body.classList.remove('register-background');
        };
    }, [])
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:5050/user/register", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            const jsonResponse = await response.json()
            alert(jsonResponse.message)
        } catch (error) {
            alert("ユーザー登録失敗")
        }
    }

    return (
        <div className="register-container">
            <h1 className="register-title">ユーザー登録</h1>
            <form onSubmit={ handleSubmit }>
                <FloatLabel 
                    name="name"
                    className={isNameValid ? "inputFloat" : "inputFloatInvalid"}
                    onBlurFunc={validateName}
                    type={"text"}
                    placeholder="ニックネーム" 
                    value={newUser.name}
                    onChange={handleChange} 
                    required
                />
                <FloatLabel 
                    name="email"
                    className={isEmailValid ? "inputFloat" : "inputFloatInvalid"}
                    onBlurFunc={validateEmail}
                    type={"email"}
                    placeholder="メールアドレス" 
                    value={newUser.email}
                    onChange={handleChange} 
                    required
                />
                <FloatLabel 
                    name="password"
                    className={isPasswordValid ? "inputFloat" : "inputFloatInvalid"}
                    onBlurFunc={validatePassword}
                    type={"password"}
                    placeholder="パスワード" 
                    value={newUser.password}
                    onChange={handleChange}
                    required
                />
                <FloatLabel 
                    name="code"
                    className={"inputFloat"}
                    type={"text"}
                    placeholder="招待コード" 
                    value={newUser.code}
                    onChange={handleChange}
                    required
                />
                {/* <div className="img-container">
                    <ImgInput setImage={handleAvatarChange}/>
                    <input value={newUser.avatar} onChange={(e) => handleAvatarChange(e.target.value)} type="text" name="avatar" placeholder="アイコンのURL"/>
                </div> */}
                
            <button>登録</button>
            </form>
        </div>
    )
}

export default Register
