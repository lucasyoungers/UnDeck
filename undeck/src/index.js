import React from "react"
import ReactDOM from "react-dom/client"
import Modal from "react-modal"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import store from "./redux/store"

const root = document.getElementById("root")
Modal.setAppElement(root)
const reactRoot = ReactDOM.createRoot(root)
reactRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()