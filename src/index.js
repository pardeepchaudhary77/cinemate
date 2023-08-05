import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter as Router } from "react-router-dom"
import ScrollTop from "./components/ScrollTop"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <Router>
            <ScrollTop />
            <App />
        </Router>
    </React.StrictMode>
)