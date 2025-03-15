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
var vertexShader_glsl_1 = __importDefault(require("../shaders/vertexShader.glsl"));
var fragmentShader_glsl_1 = __importDefault(require("../shaders/fragmentShader.glsl"));
var three_1 = require("three");
var react_1 = require("react");
var fiber_1 = require("@react-three/fiber");
var Blob = function () {
    // This reference will give us direct access to the mesh
    var mesh = (0, react_1.useRef)(null);
    var hover = (0, react_1.useRef)(false);
    var viewport = (0, fiber_1.useThree)().viewport;
    // Definir la escala en función del ancho del viewport
    // Por ejemplo, para móviles (<480px), tabletas (<768px) y desktop:
    var scaleFactor;
    if (viewport.width < 480) {
        scaleFactor = 0.3;
    }
    else if (viewport.width < 768) {
        scaleFactor = 0.7;
    }
    else {
        scaleFactor = 0.5;
    }
    var uniforms = (0, react_1.useMemo)(function () { return ({
        u_intensity: {
            value: 0.3
        },
        u_time: {
            value: 0.0
        }
    }); }, []);
    (0, fiber_1.useFrame)(function (state) {
        var clock = state.clock;
        if (mesh.current) {
            mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
        }
        if (mesh.current) {
            mesh.current.material.uniforms.u_intensity.value = three_1.MathUtils.lerp(mesh.current.material.uniforms.u_intensity.value, hover.current ? 0.85 : 0.15, 0.02);
        }
    });
    return ((0, jsx_runtime_1.jsxs)("mesh", __assign({ ref: mesh, position: [0, 0, 0], scale: scaleFactor, onPointerOver: function () { return (hover.current = true); }, onPointerOut: function () { return (hover.current = false); } }, { children: [(0, jsx_runtime_1.jsx)("icosahedronGeometry", { args: [2, 20] }, void 0), (0, jsx_runtime_1.jsx)("shaderMaterial", { fragmentShader: fragmentShader_glsl_1["default"], vertexShader: vertexShader_glsl_1["default"], uniforms: uniforms, wireframe: false }, void 0)] }), void 0));
};
exports["default"] = Blob;
