"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Labels = function () {
    var _a = (0, react_1.useState)(false), isModalOpen = _a[0], setIsModalOpen = _a[1];
    var openModal = function () { return setIsModalOpen(true); };
    var closeModal = function () { return setIsModalOpen(false); };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "pages" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "pages_wrapper" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ id: "page-1", className: "page page--welcome page--intro" }, { children: [(0, jsx_runtime_1.jsx)("h2", { className: "message" }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "logo-container" }, { children: (0, jsx_runtime_1.jsx)("img", { src: "/Images/logo.png", alt: "Logo", className: "imageLogo2" }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "scroll-indicator" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: "/Images/scroll-bar.png", alt: "Desliza!", className: "scrollLogo" }, void 0), (0, jsx_runtime_1.jsx)("span", __assign({ className: "scroll-text" }, { children: "Desliza horizontal" }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ id: "page-2", className: "page page--headband page--hidden" }, { children: [(0, jsx_runtime_1.jsx)("h1", __assign({ className: "message" }, { children: "ALPHA" }), void 0), (0, jsx_runtime_1.jsx)("p", __assign({ className: "message--sub" }, { children: "Nuevo modelo by IAM" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ className: "primary-button" }, { children: "Probar \uD83D\uDE80" }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ id: "page-3", className: "page page--headband page--hidden" }, { children: [(0, jsx_runtime_1.jsx)("h1", __assign({ className: "message" }, { children: "Subscibete!" }), void 0), (0, jsx_runtime_1.jsx)("p", { className: "message--sub" }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "card" }, { children: [(0, jsx_runtime_1.jsx)("h2", __assign({ className: "card-title" }, { children: "La evoluci\u00F3n comienza aqu\u00ED. Vive la inteligencia artificial como nunca antes." }), void 0), (0, jsx_runtime_1.jsx)("p", __assign({ className: "card-text" }, { children: "Deja tu correo y recibe acceso anticipado." }), void 0), (0, jsx_runtime_1.jsxs)("form", __assign({ className: "form" }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "email", className: "input-field", placeholder: "Ingresa tu correo", required: true }, void 0), (0, jsx_runtime_1.jsx)("button", __assign({ className: "submit-button", type: "submit" }, { children: "\u00A1Quiero ser parte! \uD83D\uDE80" }), void 0)] }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ id: "page-4", className: "page page--headband page--hidden" }, { children: [(0, jsx_runtime_1.jsx)("h1", __assign({ className: "message" }, { children: "UnderConstruction" }), void 0), (0, jsx_runtime_1.jsx)("p", __assign({ className: "message--sub" }, { children: "by" }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "logo-container" }, { children: (0, jsx_runtime_1.jsx)("img", { src: "/images/logo.png", alt: "Under Construction", className: "imageLogo" }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ id: "page-5", className: "page page--headband page--hidden" }, { children: [(0, jsx_runtime_1.jsx)("h1", __assign({ className: "message" }, { children: "UnderConstruction" }), void 0), (0, jsx_runtime_1.jsx)("p", __assign({ className: "message--sub" }, { children: "IAMarket proximamente" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ className: "primary-button" }, { children: "Mantente informado" }), void 0)] }), void 0)] }), void 0) }), void 0));
};
exports["default"] = Labels;
