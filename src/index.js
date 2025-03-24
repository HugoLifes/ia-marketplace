"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
var App_1 = __importDefault(require("./App"));
require("./styles.css");
require("./index.css");
// Añadir estilos globales para ocultar scrollbars
var style = document.createElement("style");
style.textContent = "\n  html, body, #root, * {\n    scrollbar-width: none !important;\n  }\n  ::-webkit-scrollbar {\n    display: none !important;\n    width: 0 !important;\n    height: 0 !important;\n  }\n";
document.head.appendChild(style);
client_1["default"].createRoot(document.getElementById("root")).render((0, jsx_runtime_1.jsx)(react_1["default"].StrictMode, { children: (0, jsx_runtime_1.jsx)(App_1["default"], {}, void 0) }, void 0));
