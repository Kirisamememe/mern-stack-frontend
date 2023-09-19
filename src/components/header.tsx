import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../utils/AuthContext"
import DropdownMenu from "./DropdownMenu"
import UserAvatar from "./UserAvatar"


const Header = () => {
    const { loginUser } = useAuth();

    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true)
    };
    const handleMouseLeave = () => {
        setIsOpen(false)
    };

    useEffect(() => {
        const updateMenuPosition = () => {
            const viewportWidth = window.innerWidth;
            const menuWidth = 160;
            let leftValue = Math.max(Math.min((viewportWidth - 1240) / 2 - menuWidth + 50, -10), -110);
            document.documentElement.style.setProperty('--dynamic-left', `${leftValue}px`);
        };
      
        window.addEventListener('resize', updateMenuPosition);
        updateMenuPosition();  // 初期値を設定
      
        return () => {
            window.removeEventListener('resize', updateMenuPosition);
        };
    }, []);

    const menuData = [
        { label: "マイページ", link: "" },
        { label: "お知らせ", link: "" },
        { label: "設定", link: "" },
        { label: "ログアウト", link: "/user/logout" }
    ];

    const imageUrl: string | null = localStorage.getItem('avatar');

    if (loginUser) {
        return (
            <header>
                <div>
                    <Link to="/"><img src="/logo.svg" alt="header"/></Link>
                </div>
                <nav>
                    <Link className="button-main" to="/item/create">投稿</Link>
                    <div className="menu-block" onMouseLeave={handleMouseLeave}>
                        <div className="avatar" onMouseEnter={handleMouseEnter}>
                            <UserAvatar imageUrl={imageUrl}/>
                        </div>
                        <DropdownMenu isOpen={isOpen} menuItems={menuData}/>
                    </div>
                </nav>
            </header>
        )
    }
    else {
        return (
            <header>
                <div>
                    <Link to="/"><img src="/logo.svg" alt="header"/></Link>
                </div>
                <nav>
                    <Link className="button-sub" to="/user/register">登録</Link>
                    <Link className="button-main" to="/user/login">ログイン</Link>
                </nav>
            </header>

        )
    }
}

export default Header