import React , { useRef, useState, useMemo }from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Environment, ScrollControls, Scroll} from '@react-three/drei'
import CameraInfo from './cameraInfo'
import '../styles/landingPage.css'
import * as THREE from 'three';
import { Model } from './ModelSpace'
import  Blob  from './Blob'
import AdjustCamera from './adjustCamera'
import { useScroll } from '@react-three/drei'
import gsap from 'gsap'

const BlobRow = () => {
  const { viewport } = useThree()
  const sectionWidth = viewport.width * 1.5 // espacio entre blobs, puedes ajustar el factor
  console.log('section',sectionWidth)

  return (
    <>
      {[...Array(5)].map((_, i) => (
        <Blob key={i} position={[i * sectionWidth, 0, 0]} />
      ))}
    </>
  )
}
const Scene: React.FC = () => {
  
  return (
    
    <div  >
      
      <div >
          <Canvas id='canvas' shadows  camera={{  fov: 50 }}  >
          
          {/* Carga tu modelo .glb en la ruta que tengas (ej. /models/myModel.glb) */}
          <AdjustCamera />
          <ScrollControls pages={3} horizontal damping={0.25}  > 
          
            <BlobRow />
            {/* Add your scrollable content here */}
            <Model />
            
           
          </ScrollControls>
          
          </Canvas>
      </div>
      
      
    </div>
  )
}

export default Scene