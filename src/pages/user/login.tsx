import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useAuth } from "../../utils/AuthContext";
import FloatLabel from "../../components/FloatLabel"
import * as Types from "../../types"
import { postUserLogin } from '../../apiHelper'
//useAuthは名前付きエクスポートだから、{}が必要。default exportの場合は{}は不要


const Login = () => {
    const { setLoginUser } = useAuth();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e: Types.E) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const [isEmailValid, setIsEmailValid] = useState(true);
    

    //背景色を管理
    useEffect(() => {
        document.body.classList.add('register-background');
        return () => {
            document.body.classList.remove('register-background');
        };
    }, [])

    const validateEmail = (event: React.FocusEvent<HTMLInputElement>) => {
        const value = event.target.value
        setIsEmailValid(value.includes("@") || value === "")
        //@を含むか、空になっている以外の場合は色を赤にする
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //入力されたユーザー情報に基づいてサーバーに問い合わせます
        try {
            const response = await postUserLogin(userInfo)

            const jsonResponse = await response.json()

            //ユーザー情報が正しい場合
            if (response.status === 200) {
                const decoded = jwt_decode(jsonResponse.token) as { email: string };

                //ログインしたということをAuthContextを通してアプリ全体で共有する
                //※setLoginUserはAuthContextで管理されている
                setLoginUser({
                    email: decoded.email,
                    avatar: jsonResponse.avatar,
                    userId: jsonResponse.userId
                });

                localStorage.setItem("token", jsonResponse.token)
                localStorage.setItem("avatar", jsonResponse.avatar)
                localStorage.setItem("userId", jsonResponse.userId)
                localStorage.setItem("userName", jsonResponse.userName)

                alert(jsonResponse.message)
                navigate("/")
            }
            else {
                alert(jsonResponse.message)
            }
            
        } catch (error) {
            alert("通信エラーが発生しました")
        }
    }
    
    return (
        <div className="register-container">
            <h1 className="register-title">ログイン</h1>
            <form onSubmit={ handleSubmit }>
            <FloatLabel 
                    name="email"
                    className={isEmailValid ? "inputFloat" : "inputFloatInvalid"}
                    type={"email"}
                    placeholder="メールアドレス" 
                    value={userInfo.email}
                    onChange={handleChange}
                    onBlurFunc={validateEmail}
                    required
            />
            <FloatLabel 
                    name="password"
                    className={"inputFloat"}
                    type={"password"}
                    placeholder="パスワード" 
                    value={userInfo.password}
                    onChange={handleChange}
                    required
            />
            <button>ログイン</button>
            </form>
        </div>
    )
}

export default Login