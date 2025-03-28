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
  distortion?: number
  blobDistort?: number
  blobFreq?: number
  speed?: number
  phase?: number

  // Blob Surface Noise
  surfaceDistort?: number
  surfaceFreq?: number
  waves?: number

  // Blob Geometry
  size?: number
  segments?: number

}

const Blob: React.FC<BlobProps> = ({  
  position = [0, 0, 0],
  scale: customScale,
  r = 1.0,
  g = 0.0,
  b = 0.0,
  distortion = 0.4,
  speed = 1.0,    // 👈 default 1x
  phase = 0.0,     // 👈 default sin desfaseblobDistort?: number
  // Deformación avanzada (forma + superficie)
  blobDistort = 0.15,
  blobFreq = 2.0,
  surfaceDistort = 0.6,
  surfaceFreq = 2.5,
  waves = 3.0,
 
 
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
        value: distortion,
      },
      u_time: {
        value: 0.0,
      },
      r: { value: r },
      g: { value: g },
      b: { value: b },
      u_blobDistort: { value: blobDistort ?? 0.0 },
      u_blobFreq: { value: blobFreq ?? 0.0 },
      u_surfaceDistort: { value: surfaceDistort ?? 0.0 },
      u_surfaceFreq: { value: surfaceFreq ?? 0.0 },
      u_waves: { value: waves ?? 0.0 },
     

    }),
    [r,g,b,distortion]
  );

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      const shader = mesh.current.material as THREE.ShaderMaterial;
      
      // Movimiento animado único por blob
      shader.uniforms.u_time.value = clock.getElapsedTime() * speed + phase;
  
      // Mantener u_intensity constante o animarla si quieres pulsos
      shader.uniforms.u_intensity.value = distortion;
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
