import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './styles.css'
import './index.css'
import Labels from '../public/components/Labels'


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
 
  <React.StrictMode>
  <App />
</React.StrictMode>
 
);
