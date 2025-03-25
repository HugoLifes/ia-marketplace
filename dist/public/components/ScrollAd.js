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
var ScrollAd = function (_a) {
    var message = _a.message, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? '#ffcc00' : _b, _c = _a.textColor, textColor = _c === void 0 ? '#000' : _c;
    var _d = (0, react_1.useState)(false), visible = _d[0], setVisible = _d[1];
    (0, react_1.useEffect)(function () {
        var handleScroll = function () {
            var scrollPosition = window.scrollY;
            if (scrollPosition > 300) {
                setVisible(true);
            }
            else {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: {
            display: visible ? 'block' : 'none',
            position: 'fixed',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: backgroundColor,
            color: textColor,
            padding: '10px 20px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1000
        } }, { children: message }), void 0));
};
exports["default"] = ScrollAd;
