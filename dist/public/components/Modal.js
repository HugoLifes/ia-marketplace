"use strict";
"use client";
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
var lucide_react_1 = require("lucide-react");
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, title = _a.title, children = _a.children;
    var modalRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(false), isClosing = _b[0], setIsClosing = _b[1];
    // Manejar cierre con animación
    var handleClose = function () {
        setIsClosing(true);
        setTimeout(function () {
            setIsClosing(false);
            onClose();
        }, 300); // Duración de la animación
    };
    // Cerrar modal al hacer clic fuera
    var handleOutsideClick = function (e) {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            handleClose();
        }
    };
    // Cerrar modal con tecla ESC
    (0, react_1.useEffect)(function () {
        var handleEscKey = function (e) {
            if (e.key === "Escape" && isOpen) {
                handleClose();
            }
        };
        // Prevenir scroll del body cuando el modal está abiertostá abierto
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEscKey);
        }
        return function () {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscKey);
        };
    }, [isOpen]);
    if (!isOpen && !isClosing)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 " + (isClosing ? "opacity-0" : "opacity-100"), onClick: handleOutsideClick }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ ref: modalRef, className: "bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-auto transition-all duration-300 " + (isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"), onClick: function (e) { return e.stopPropagation(); } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700" }, { children: [(0, jsx_runtime_1.jsx)("h2", __assign({ className: "text-xl font-semibold text-gray-900 dark:text-white" }, { children: title }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: handleClose, className: "p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors", "aria-label": "Cerrar" }, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "h-5 w-5 text-gray-500 dark:text-gray-400" }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "p-4 overflow-auto" }, { children: children }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ onClick: handleClose, className: "px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md text-gray-900 dark:text-white transition-colors" }, { children: "Cerrar" }), void 0) }), void 0)] }), void 0) }), void 0));
};
exports["default"] = Modal;
