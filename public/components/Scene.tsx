import React , { useRef, useState, useMemo }from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Environment, ScrollControls, Scroll} from '@react-three/drei'
import CameraInfo from './utils/cameraInfo'

import * as THREE from 'three';
import { Model } from './Scrolling/ModelSpace'
import  Blob  from './Blob/Blob'
import AdjustCamera from './utils/adjustCamera'
import { useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { Scale } from 'lucide-react'
import { blobPersonalities} from './Blob/blobLibrary'


const BlobRow = () => {
  const { viewport } = useThree()
  
  //console.log('section',sectionWidth)
  return (
    <>
    {[...Array(3)].map((_, i) => {

      const positions: [number, number, number][] = [
        [0, 0, 0],
        [15, 0, 0],
        [30, 0, 0],
        //[50, 1, -2],
      
      ]

      const personalities: (keyof typeof blobPersonalities)[] = [
        'alien',
        'lava',
        'metallic',
       
      ];
      

      const scales = [
        0.5,
        0.4,
        0.4,
       
      ]

     // const [r, g, b] = colors[i]
     // const position = positions[i]
     // const personality = personalities[i];
      const personalityKey = personalities[i];
      const config = blobPersonalities[personalityKey];
      const position = positions[i];
      const scale = scales[i];

      return (
        <Blob
          key={i}
          position={position}
          scale={scale}
          r={config.r}
          g={config.g}
          b={config.b}
          distortion={config.distortion}
          speed={config.speed}
          phase={config.phase}
          vertexShader={config.vertex}
          fragmentShader={config.fragment}
          color1={config.color1}
          color2={config.color2}
          color3={config.color3}
          glowStrength={config.glowStrength.value}
          pulseSpeed={config.pulseSpeed.value}
          iTime={config.iTime}

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
          <ambientLight intensity={0.5} />
          <directionalLight position={[30, 0, 0]} intensity={1} />
          {/* Carga tu modelo .glb en la ruta que tengas (ej. /models/myModel.glb) */}
          <AdjustCamera />
          <ScrollControls pages={4} horizontal damping={0.24}  > 

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