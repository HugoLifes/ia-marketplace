"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fiber_1 = require("@react-three/fiber");
var AdjustCamera = function () {
    var camera = (0, fiber_1.useThree)().camera;
    (0, react_1.useEffect)(function () {
        var updateCamera = function () {
            var width = window.innerWidth;
            // Ajusta la posición de la cámara según el ancho de la pantalla
            if (width < 480) {
                // Móviles
                camera.position.set(1, 7, 1);
            }
            else if (width < 768) {
                // Dispositivos medianos (tabletas)
                camera.position.set(1, 4, 2);
            }
            else {
                // Desktop
                camera.position.set(3, 1, 0.999);
            }
        };
        updateCamera(); // Llama al inicio
        window.addEventListener('resize', updateCamera);
        return function () { return window.removeEventListener('resize', updateCamera); };
    }, [camera]);
    return null;
};
exports["default"] = AdjustCamera;
