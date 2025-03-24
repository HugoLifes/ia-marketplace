"use strict";
exports.__esModule = true;
var fiber_1 = require("@react-three/fiber");
var CameraInfo = function () {
    var camera = (0, fiber_1.useThree)().camera;
    (0, fiber_1.useFrame)(function () {
        console.log('Posición de la cámara:', camera.position);
    });
    return null;
};
exports["default"] = CameraInfo;
