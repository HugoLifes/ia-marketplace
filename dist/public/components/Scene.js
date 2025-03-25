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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
var BlobRow = function () {
    var viewport = (0, fiber_1.useThree)().viewport;
    var sectionWidth = viewport.width * 1.5; // espacio entre blobs, puedes ajustar el factor
    //console.log('section',sectionWidth)
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: __spreadArray([], Array(5), true).map(function (_, i) {
            var colors = [
                [0.094, 0.42, 0.565],
                [0.62, , 0.4, 0.871],
                [0, 0, 1],
                [1, 1, 0],
                [1, 0, 1], // magenta
            ];
            var _a = colors[i], r = _a[0], g = _a[1], b = _a[2];
            return ((0, jsx_runtime_1.jsx)(Blob_1["default"], { position: [i * sectionWidth, 0, 0], r: r, g: g, b: b }, i));
        }) }, void 0));
};
var Scene = function () {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(fiber_1.Canvas, __assign({ id: 'canvas', shadows: true, camera: { fov: 50 } }, { children: [(0, jsx_runtime_1.jsx)(adjustCamera_1["default"], {}, void 0), (0, jsx_runtime_1.jsxs)(drei_1.ScrollControls, __assign({ pages: 3, horizontal: true, damping: 0.25 }, { children: [(0, jsx_runtime_1.jsx)(BlobRow, {}, void 0), (0, jsx_runtime_1.jsx)(ModelSpace_1.Model, {}, void 0)] }), void 0)] }), void 0) }, void 0) }, void 0));
};
exports["default"] = Scene;
