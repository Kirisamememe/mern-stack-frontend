import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../utils/AuthContext"
import { HomeIconTab, NotificationIconTab, PostTab, SearchIconTab, MyPageIconTab } from "./icon/Icon"
// import * as Types from "../types"

const MobileNav = ({hide}: {hide: boolean}) => {
    const { loginUser } = useAuth()

    const location = useLocation()
    const isHome = location.pathname === '/'
    const isNotification = location.pathname === '/notification'
    const isSearch = location.pathname === '/search'
    const isMyPage = location.pathname === `/user/myPage/${localStorage.getItem("userId")}`

    const [homeAnimate, setHomeAnimate] = useState(false)
    const [notificationAnimate, setNotificationAnimate] = useState(false)
    const [searchAnimate, setSearchAnimate] = useState(false)
    const [myPageAnimate, setMyPageAnimate] = useState(false)

    const handleHomeAnime = () => {
        setHomeAnimate(true)
        setTimeout(() => setHomeAnimate(false), 500)
    }

    const handleNotificationAnime = () => {
        setNotificationAnimate(true)
        setTimeout(() => setNotificationAnimate(false), 500)
    }

    const handleSearchAnime = () => {
        setSearchAnimate(true)
        setTimeout(() => setSearchAnimate(false), 500)
    }

    const handleMyPageAnime = () => {
        setMyPageAnimate(true)
        setTimeout(() => setMyPageAnimate(false), 500)
    }


    return (
        <div id="MobileNav" className={`mobileNav ${hide ? "navHide" : ""}`}>
            <Link id="home" className="tab" to={`${isHome ? "" : "/"}`} onClick={handleHomeAnime}>
                <HomeIconTab isSelected={isHome} animate={homeAnimate}/>
            </Link>
            <Link id="notification" className="tab" to={loginUser ? "" : "/user/login"} onClick={handleNotificationAnime}>
                <NotificationIconTab isSelected={isNotification} animate={notificationAnimate}/>
            </Link>
            <Link id="post" className="tab" to={loginUser ? "/item/create" : "/user/login"} style={{minWidth: "9.4rem"}}>
                <div className="post">
                    <PostTab/>
                </div>
            </Link>
            <button id="search" className="tab" onClick={handleSearchAnime}>
                <SearchIconTab isSelected={isSearch} animate={searchAnimate}/>
            </button>
            <Link id="myPage" className="tab" to={loginUser ? `/user/myPage/${localStorage.getItem("userId")}` : "/user/login"} onClick={handleMyPageAnime}>
                <MyPageIconTab isSelected={isMyPage} animate={myPageAnimate}/>
            </Link>
        </div>
    )
}

export default MobileNav