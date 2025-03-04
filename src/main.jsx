import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import './styles/style.css'
import App from "./App.jsx";
import "./scss/main.scss";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
  </BrowserRouter>
  </StrictMode>,
)
