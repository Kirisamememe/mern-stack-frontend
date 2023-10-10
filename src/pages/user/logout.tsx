import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../utils/AuthContext"

const Logout = () => {
    const { setLoginUser } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem("token")
        localStorage.removeItem("avatar")
        localStorage.removeItem("userId")
        localStorage.removeItem("userName")
        setLoginUser(null)
        alert("ログアウト成功")
        navigate("/"); // ホームページなど、ログアウト後に遷移させたいページへリダイレクト
    }, [navigate, setLoginUser])

    return (
        <div>
            <h1 className="page_title">ログアウト中...</h1>
        </div>
    )
}

export default Logout
