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
var Navbar = function (_a) {
    var scrollToSection = _a.scrollToSection;
    // Estado para controlar la opacidad del navbar en scroll
    var _b = (0, react_1.useState)(false), scrolled = _b[0], setScrolled = _b[1];
    // Efecto para detectar el scroll y ajustar la apariencia
    (0, react_1.useEffect)(function () {
        var handleScroll = function () {
            var isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);
    return ((0, jsx_runtime_1.jsx)("nav", __assign({ className: "navbar " + (scrolled ? "scrolled" : "") }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "navbar-container" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "navbar-logo" }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#", onClick: function (e) {
                            e.preventDefault();
                            scrollToSection("page-1");
                        } }, { children: (0, jsx_runtime_1.jsx)("img", { src: "/Images/logo.png", alt: "IAMarket", className: "navbar-logo-image" }, void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "navbar-about" }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#", onClick: function (e) {
                            e.preventDefault();
                            scrollToSection("page-4");
                        } }, { children: "About" }), void 0) }), void 0)] }), void 0) }), void 0));
};
exports["default"] = Navbar;
