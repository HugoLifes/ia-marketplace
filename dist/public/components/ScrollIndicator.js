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
require("../../src/styles.css");
var ScrollIndicator = function () {
    var _a = (0, react_1.useState)(0), scrollProgress = _a[0], setScrollProgress = _a[1];
    (0, react_1.useEffect)(function () {
        var handleScroll = function () {
            // Calcular el progreso del scroll
            var scrollTop = window.scrollY;
            var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            var progress = scrollTop / scrollHeight;
            setScrollProgress(progress);
        };
        // Añadir event listener
        window.addEventListener("scroll", handleScroll);
        // Llamar una vez para inicializar
        handleScroll();
        // Limpiar event listener
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "scroll-progress-container" }, { children: (0, jsx_runtime_1.jsx)("div", { className: "scroll-progress-bar", style: { width: scrollProgress * 100 + "%" } }, void 0) }), void 0));
};
exports["default"] = ScrollIndicator;
