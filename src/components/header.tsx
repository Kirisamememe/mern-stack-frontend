import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../utils/AuthContext"
import DropdownMenu from "./DropdownMenu"
import UserAvatar from "./UserAvatar"


const Header = ({ atTop }: { atTop: boolean }) => {
    const { loginUser } = useAuth()
    const location = useLocation()
    const [forceDarkMode, setForceDarkMode] = useState(false)
    // const isMyPage = location.pathname === '/myPage'

    const [isOpen, setIsOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0)

    const handleScroll = () => {
        setScrollY(window.scrollY)
    }
    

    const handleMouseEnter = () => {
        setIsOpen(true)
    }
    const handleMouseLeave = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        const regex = /^\/user\/myPage\/\w+$/
        if (regex.test(location.pathname) && scrollY < 440) {
            setForceDarkMode(true)
        }
        else{
            setForceDarkMode(false)
        }

        window.addEventListener('scroll', handleScroll)

        const updateMenuPosition = () => {
            const viewportWidth = window.innerWidth
            const menuWidth = 160
            let leftValue = Math.max(Math.min((viewportWidth - 1240) / 2 - menuWidth + 50, -10), -110)
            document.documentElement.style.setProperty('--dynamic-left', `${leftValue}px`)
        }
        
        window.addEventListener('resize', updateMenuPosition)
        updateMenuPosition()  // 初期値を設定
        
      
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', updateMenuPosition)
        }
    }, [location.pathname, scrollY])

    const menuData = [
        { label: "マイページ", link: `/user/myPage/${localStorage.getItem("userId")}` },
        { label: "お知らせ", link: "" },
        { label: "設定", link: "" },
        { label: "ログアウト", link: "/user/logout" }
    ]

    const imageUrl: string | null = localStorage.getItem('avatar')

    if (loginUser) {
        return (
            <>
            <header>
                <div className="logo">
                    <Link to="/"><img src={forceDarkMode ? "/logo_dark.svg" : "/logo.svg"} alt="header"/></Link>
                </div>
                <nav>
                    <div className="nav_button">
                        <Link style={{ opacity: 1 }} className="button_main" to="/item/create">投稿</Link>
                    </div>
                    <div className="menu_block" onMouseLeave={handleMouseLeave}>
                        <div className="avatar" onMouseEnter={handleMouseEnter}>
                            <UserAvatar imageUrl={imageUrl}/>
                        </div>
                        <DropdownMenu isOpen={isOpen} menuItems={menuData}/>
                    </div>
                </nav>
                
            </header>
            <div style={forceDarkMode ? atTop ? {background: 'none', backdropFilter: 'none'} : {background: 'none'} : {}} className={`header_bg ${atTop ? `at_top` : ''}`} />
            </>
        )
    }
    else {
        return (
            <>
            <header>
                <div className="logo">
                    <Link to="/"><img src={forceDarkMode ? "/logo_dark.svg" : "/logo.svg"} alt="header"/></Link>
                </div>
                <nav>
                    <Link style={forceDarkMode ? {color: "#FFF"}:{}} className="button_sub" to="/user/register">登録</Link>
                    <Link className="button_main" to="/user/login">ログイン</Link>
                </nav>
            </header>
            <div style={forceDarkMode ? atTop ? {background: 'none', backdropFilter: 'none'} : {background: 'none'} : {}} className={`header_bg ${atTop ? `at_top` : ''}`} />
            </>
        )
    }
}

export default Header