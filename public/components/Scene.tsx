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
  //console.log('section',sectionWidth)
  

  return (
    <>
    {[...Array(5)].map((_, i) => {
      const colors = [
        [0.094, 0.42, 0.565],  
        [0.62, 0.4, 0.871],   
        [0, 0, 1],   // azul
        [1, 1, 0],   // amarillo
        [1, 0, 1],   // magenta
      ]

      const positions: [number, number, number][] = [
        [0, 0, 0],
        [15, 0, 0],
        [30, 0, 0],
        [50, 1, -2],
        [70, -1, 1],
      ]
  
      const [r, g, b] = colors[i]
      const position = positions[i]
      return (
        <Blob
          key={i}
          position={position}
          scale={0.4}
          r={r}
          g={g}
          b={b}
        />
      )
    })}
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
          <ScrollControls pages={4} horizontal damping={0.25}  > 
          
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