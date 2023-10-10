import { useState, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Register from "./pages/user/register"
import Login from "./pages/user/login"
import Logout from "./pages/user/logout"
import MyPage from "./pages/user/myPage"
import ReadAll from "./pages/item/readAll"
import ReadSingle from "./pages/item/readSingle"
import CreateItem from "./pages/item/create"
import Update from "./pages/item/update"
import Header from "./components/header"
import Footer from "./components/footer"

import MobileNav from "./components/MobileNav"

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [atTop, setAtTop] = useState(true)

    const [lastScrollTop, setLastScrollTop] = useState(0)
    const [lastScrollTime, setLastScrollTime] = useState(0)
    const [hideHeader, setHideHeader] = useState(false)
    const [hideNav, setHideNav] = useState(false)

    const location = useLocation()

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)

        const handleScroll = () => {
            //慣性があるから、<=0 にするとスムーズに切り替わる
            setAtTop(window.scrollY <= 20)
            const currentScrollTop = window.scrollY
            const currentTime = Date.now()
            const scrollSpeed = Math.abs(currentScrollTop - lastScrollTop) / (currentTime - lastScrollTime)
      
            if (currentScrollTop > lastScrollTop) {
                // 下にスクロール
                if (scrollSpeed > 1) {
                    setHideHeader(true)
                    setHideNav(true)
                }
            }
            else {
                // 上にスクロール
                if (scrollSpeed > 1 || atTop) {
                    setHideHeader(false)
                }
                if (scrollSpeed > 0.3) {
                    setHideNav(false)
                }
            }
            setLastScrollTop(currentScrollTop)
            setLastScrollTime(currentTime)
        }
        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScroll)

        // console.log("Current scroll position:", window.scrollY)
        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("scroll", handleScroll)
        }

    }, [lastScrollTop, lastScrollTime, atTop])

    useEffect(() => {
        setHideHeader(false)
        window.scrollTo(0, 0)
    }, [location])

    return(
            <>
                <div className={`header_box ${hideHeader ? "headerHide" : ""}`}>
                    <Header atTop={atTop}/>
                </div>
                {windowWidth <= 600 ? <MobileNav hide={hideNav}/> : null}
                <div className="container">
                <Routes>
                    <Route path="/user/register" element={ <Register/> }/>
                    <Route path="/user/login" element={ <Login/> }/>
                    <Route path="/user/logout" element={ <Logout/> }/>
                    <Route path="/user/myPage/:id" element={ <MyPage/> }/>
                    <Route path="/" element={ <ReadAll/> }/>
                    <Route path="/item/:id" element={ <ReadSingle/> }/>
                    <Route path="/item/create" element={ <CreateItem/> }/>
                    <Route path="/item/update/:id" element={ <Update/> }/>
                    <Route path="*" element={<h1>Page Not Found</h1>}/>
                </Routes>
                <Footer/>
                </div>
            </>
    )
}

export default App