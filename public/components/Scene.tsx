import React , { useRef, useState, useMemo }from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Environment, ScrollControls, Scroll} from '@react-three/drei'
import CameraInfo from './cameraInfo'
import '../styles/landingPage.css'
import * as THREE from 'three';
import { Model } from './ModelSpace'
import  Blob  from './Blob'
import AdjustCamera from './adjustCamera'
import { useInView } from 'react-intersection-observer';

const Scene: React.FC = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    
    <div  >
      
      <div >
          <Canvas shadows  camera={{  fov: 50 }}  >
          <color attach="background" args={['black']} />
          
          {/* Carga tu modelo .glb en la ruta que tengas (ej. /models/myModel.glb) */}
          <AdjustCamera />
          <ScrollControls pages={3} damping={0.25}  > 
          
            <Blob />
            {/* Add your scrollable content here */}
            <Model />
            
           
          </ScrollControls>
          
          </Canvas>
      </div>
      
      
    </div>
  )
}

export default Scene