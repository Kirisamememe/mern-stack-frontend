import { Route, Routes, BrowserRouter } from "react-router-dom"
import Register from "./pages/user/register"
import Login from "./pages/user/login"
import Logout from "./pages/user/logout"
import ReadAll from "./pages/item/readAll"
import ReadSingle from "./pages/item/readSingle"
import CreateItem from "./pages/item/create"
import Update from "./pages/item/update"
import Header from "./components/header"
import Footer from "./components/footer"
import { AuthProvider } from "./utils/AuthContext"
import "./css/App.css"
import "./css/Item.css"
import "./css/button.css"
import "./css/header.css"
import "./css/delete.css"
import "./css/imgInput.css"
import "./css/singleItem.css"
import "./css/form.css"
import "./css/popup.css"
import "./css/contents.css"
import "./css/dropdownMenu.css"
import "./css/text.css"
import "./css/Comment.css"
import "./css/avatar.css"
import "./css/iconAnime.css"

const App = () => {
    return(
        <AuthProvider>
            <BrowserRouter>
                <div className="container">
                <Header/>
                <Routes>
                    <Route path="/user/register" element={ <Register/> }/>
                    <Route path="/user/login" element={ <Login/> }/>
                    <Route path="/user/logout" element={ <Logout/> }/>
                    <Route path="/" element={ <ReadAll/> }/>
                    <Route path="/item/:id" element={ <ReadSingle/> }/>
                    <Route path="/item/create" element={ <CreateItem/> }/>
                    <Route path="/item/update/:id" element={ <Update/> }/>
                    <Route path="*" element={<h1>Page Not Found</h1>}/>
                </Routes>
                <Footer/>
                </div>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;