import vertexShader from '../shaders/vertexShader.glsl'
import fragmentShader from '../shaders/fragmentShader.glsl'
import { MathUtils } from 'three'
import React , { useRef, useState, useMemo }from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import {OrbitControls} from '@react-three/drei'

type BlobProps = {
  position?: [number, number, number]
  scale?: number
  r?:  number
  g?: number
  b?: number
}

const Blob: React.FC<BlobProps> = ({  
  position = [0, 0, 0],
  scale: customScale,
  r = 1.0,
  g = 0.0,
  b = 0.0,
  }) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>(null);
  const hover = useRef(false);
  const {viewport, gl} = useThree();

  // Definir la escala en función del ancho del viewport
  // Por ejemplo, para móviles (<480px), tabletas (<768px) y desktop:
   // Escalado responsivo si no se pasa explícitamente
   const scaleFactor =
   customScale ??
   (viewport.width < 480 ? 0.3 : viewport.width < 768 ? 0.7 : 0.5)


  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
      r: { value: r },
      g: { value: g },
      b: { value: b }
      //u_color: { value: new THREE.Color('#ff0000') } 
      
      
    }),
    [r,g,b]
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
    <>
    <mesh
      ref={mesh}
      position={position}
      scale={scaleFactor}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = true)}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
    </>
  );
};

export default Blob;
