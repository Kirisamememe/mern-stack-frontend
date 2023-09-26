import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import * as Types from "../../types"
// import ImgInput from "../../components/imgInput"
import FloatLabel from "../../components/FloatLabel"
import { postRegister } from '../../apiHelper'

const Register = () => {
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        code: "",
        avatar: ""
    })

    const handleChange = (e: Types.E) => {
        const { name, value } = e.target

        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })

        if (isEmailTouched && name === 'email') {
            setIsEmailValid(value.includes("@"))
        }
        if (isNameTouched && name === 'name') {
            setIsNameValid(value.length < 12)
        }
        if (isPasswordTouched && name === 'password') {
            const regex = /^[a-zA-Z0-9-_]+$/
            const isValid = (6 < value.length && value.length < 20) && regex.test(value)
            setIsPasswordValid(isValid)
        }
    }


    
    const navigate = useNavigate()

    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isNameValid, setIsNameValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)

    const [isEmailTouched, setIsEmailTouched] = useState(false)
    const [isNameTouched, setIsNameTouched] = useState(false)
    const [isPasswordTouched, setIsPasswordTouched] = useState(false)



    const validateEmail = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsEmailTouched(true)
        const value = event.target.value
        setIsEmailValid(value.includes("@"))
        //@を含むか、空になっている以外の場合は色を赤にする
    }

    const validateName = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsNameTouched(true)
        const value = event.target.value
        setIsNameValid(value.length < 12 && value.length > 0)
    }

    const validatePassword = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsPasswordTouched(true)
        const value = event.target.value
        const regex = /^[a-zA-Z0-9-_]+$/
        const isValid = (6 < value.length && value.length < 20) && regex.test(value)
        setIsPasswordValid(isValid)
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
            const response = await postRegister(newUser)
            
            const jsonResponse = await response.json()
            alert(jsonResponse.message)
            if (response?.ok) {
                navigate("/user/login")
            }
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
                    className={!isNameTouched || isNameValid ? "inputFloat" : "inputFloatInvalid"}
                    onBlurFunc={validateName}
                    type={"text"}
                    placeholder="ニックネーム" 
                    value={newUser.name}
                    onChange={handleChange} 
                    required
                />
                <FloatLabel 
                    name="email"
                    className={!isEmailTouched || isEmailValid ? "inputFloat" : "inputFloatInvalid"}
                    onBlurFunc={validateEmail}
                    type={"email"}
                    placeholder="メールアドレス" 
                    value={newUser.email}
                    onChange={handleChange} 
                    required
                />
                <FloatLabel 
                    name="password"
                    className={!isPasswordTouched || isPasswordValid ? "inputFloat" : "inputFloatInvalid"}
                    onBlurFunc={validatePassword}
                    type={"password"}
                    placeholder="パスワード（6~20桁）" 
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
                
            <button disabled={!isEmailValid || !isNameValid || !isPasswordValid}>登録</button>
            </form>
        </div>
    )
}

export default Register
