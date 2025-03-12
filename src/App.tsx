import React , { useRef, useState, useMemo }from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Environment, ScrollControls} from '@react-three/drei'
import CameraInfo from '../public/components/cameraInfo'
import '../public/styles/landingPage.css'
import * as THREE from 'three';
import { Model } from '../public/components/ModelSpace'
import  Blob  from '../public/components/Blob'

const App: React.FC = () => {
  
  return (
    
    <div  >
      <div >
          <Canvas shadows  camera={{ position: [1, 6, 1], fov: 50 }}>
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
