import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./utils/AuthContext"
import App from "./App"
import "./css/App.scss"

const MyApp = () => {
    return (
      <AuthProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </AuthProvider>
    )
}

export default MyApp