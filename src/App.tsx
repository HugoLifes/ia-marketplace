import React , { useRef, useState, useMemo }from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Environment, ScrollControls} from '@react-three/drei'
import CameraInfo from '../public/components/cameraInfo'
import '../public/styles/landingPage.css'
import * as THREE from 'three';
import { Model } from '../public/components/ModelSpace'
import vertexShader from '../public/shaders/vertexShader.glsl'
import fragmentShader from '../public/shaders/fragmentShader.glsl'
import { MathUtils } from 'three'

const Blob = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>(null);
  const hover = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
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
      scale={0.3}
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

const App: React.FC = () => {
  
  return (
    
    <div  >
      <div >
          <Canvas shadows  camera={{ position: [-0.36392836832837294, 0.040038241782564474, -0.1785380437058437], fov: 50 }}>
          <color attach="background" args={['black']} />
          {/* Carga tu modelo .glb en la ruta que tengas (ej. /models/myModel.glb) 
         {/* <Space url="/model/nebula.glb" scale={2} /> */}
          <Blob />
          <ScrollControls pages={3} damping={0.25}>
          
            {/* Add your scrollable content here */}
            <Model />
            
          </ScrollControls>
          </Canvas>
      </div>
      
      
    </div>
  )
}

export default App
