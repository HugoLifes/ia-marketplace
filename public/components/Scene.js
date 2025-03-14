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
var fiber_1 = require("@react-three/fiber");
var drei_1 = require("@react-three/drei");
require("../styles/landingPage.css");
var ModelSpace_1 = require("./ModelSpace");
var Blob_1 = __importDefault(require("./Blob"));
var adjustCamera_1 = __importDefault(require("./adjustCamera"));
var Scene = function () {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(fiber_1.Canvas, __assign({ shadows: true, camera: { fov: 50 } }, { children: [(0, jsx_runtime_1.jsx)("color", { attach: "background", args: ['black'] }, void 0), (0, jsx_runtime_1.jsxs)(drei_1.ScrollControls, __assign({ pages: 3, damping: 0.25 }, { children: [(0, jsx_runtime_1.jsx)(Blob_1["default"], {}, void 0), (0, jsx_runtime_1.jsx)(ModelSpace_1.Model, {}, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(adjustCamera_1["default"], {}, void 0)] }), void 0) }, void 0) }, void 0));
};
exports["default"] = Scene;
