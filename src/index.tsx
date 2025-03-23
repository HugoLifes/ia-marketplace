import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './styles.css'
import './index.css'
import Labels from '../public/components/Labels'

// Añadir estilos globales para ocultar scrollbars
const style = document.createElement("style")
style.textContent = `
  html, body, #root, * {
    scrollbar-width: none !important;
  }
  ::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }
`
document.head.appendChild(style)



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
 
  <React.StrictMode>
  <App />
</React.StrictMode>
 
);
