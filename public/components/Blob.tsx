import vertexShader from '../shaders/vertexShader.glsl'
import fragmentShader from '../shaders/fragmentShader.glsl'
import { MathUtils } from 'three'
import React , { useRef, useState, useMemo }from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three';


const Blob = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>(null);
  const hover = useRef(false);
  const {viewport} = useThree();

  // Definir la escala en función del ancho del viewport
  // Por ejemplo, para móviles (<480px), tabletas (<768px) y desktop:
  let scaleFactor: number
  if (viewport.width < 480) {
    scaleFactor = 0.3
  } else if (viewport.width < 768) {
    scaleFactor = 0.7
  } else {
    scaleFactor = 0.5
  }
  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
      //u_color: { value: new THREE.Color('#ff0000') } 
      
      
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      (mesh.current.material as THREE.ShaderMaterial).uniforms.u_time.value = 0.4 * clock.getElapsedTime();
    }

    if (mesh.current) {
      (mesh.current.material as THREE.ShaderMaterial).uniforms.u_intensity.value = MathUtils.lerp(
        (mesh.current.material as THREE.ShaderMaterial).uniforms.u_intensity.value,
        hover.current ? 0.85 : 0.15,
        0.02
      );
    }
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={scaleFactor}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
};

export default Blob;
