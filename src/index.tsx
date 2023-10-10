import ReactDOM from 'react-dom/client'
// import App from './App'
import MyApp from './MyApp'

const rootElement = document.getElementById('root')

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <MyApp />
    )
} else {
    console.error("Root element not found")
}