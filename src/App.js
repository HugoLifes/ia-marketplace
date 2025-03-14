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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("../src/index.css");
var Labels_1 = __importDefault(require("../public/components/Labels"));
var Scene_1 = __importDefault(require("../public/components/Scene"));
function App() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'scene_container' }, { children: [(0, jsx_runtime_1.jsx)(Labels_1["default"], {}, void 0), (0, jsx_runtime_1.jsx)(react_1.Suspense, __assign({ fallback: null }, { children: (0, jsx_runtime_1.jsx)(Scene_1["default"], {}, void 0) }), void 0)] }), void 0) }, void 0));
}
exports["default"] = App;
