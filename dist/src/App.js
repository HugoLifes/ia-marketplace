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
var NavBar_1 = __importDefault(require("../public/components/NavBar"));
var ScrollIndicator_1 = __importDefault(require("../public/components/ScrollIndicator"));
function App() {
    var appRef = (0, react_1.useRef)(null);
    var timelineRef = (0, react_1.useRef)(null);
    // Función para desplazarse a una sección específica
    var scrollToSection = function (sectionId) {
        // Obtener el índice de la sección (1-based)
        var sectionIndex = Number.parseInt(sectionId.split("-")[1]);
        // Calcular la posición de scroll basada en el índice
        // Esto asume que cada sección ocupa aproximadamente una altura de ventana
        var scrollPosition = (sectionIndex - 1) * window.innerHeight;
        // Animar el scroll a la posición calculada
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {
                y: scrollPosition,
                autoKill: false
            },
            ease: "power2.inOut",
            onComplete: function () {
                // Opcional: disparar un evento personalizado para notificar que el scroll ha terminado
                var event = new CustomEvent("scrollComplete", { detail: { sectionId: sectionId } });
                document.dispatchEvent(event);
            }
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'scene_container' }, { children: [(0, jsx_runtime_1.jsx)(react_1.Suspense, __assign({ fallback: null }, { children: (0, jsx_runtime_1.jsx)(Scene_1["default"], {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(Labels_1["default"], {}, void 0), (0, jsx_runtime_1.jsx)(NavBar_1["default"], { scrollToSection: scrollToSection }, void 0), (0, jsx_runtime_1.jsx)(ScrollIndicator_1["default"], {}, void 0)] }), void 0));
}
exports["default"] = App;
