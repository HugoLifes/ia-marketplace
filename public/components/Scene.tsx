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
const blobPersonalities = {
  alien: {
    distortion: 1,       // fuerte intensidad de distorsión
    speed: 1.5,            // animación rápida
    phase: 1.5,           // desfase para que se desincronice del resto
    r: 0.3,                // verde eléctrico
    g: 1.0,
    b: 0.7,                // mezcla alienígena
  
    blobDistort: 5.0,      // forma base muy deformada
    blobFreq: 1.0,         // mucha frecuencia
    surfaceDistort: 0.5,   // superficie muy viva
    surfaceFreq:2.0,      // ruido de superficie muy activo
    waves: 2.0             // muchas olas pequeñas
  },
  glow: {
    distortion: 0.9,
    speed: 0.6,
    phase: 5.0,
    r: 0.62,
    g: 0.4,
    b: 0.871, // Cian brillante
    blobDistort: 0.25,
    blobFreq: 0.5,
    surfaceDistort: 1.5,
    surfaceFreq: 0.5,
    waves: 0.4
  },
 
  chaotic: {
    distortion: 1.0,
    speed: 3.0,
    phase: 2.5,
    r: 1.0,
    g: 0.6,
    b: 0.2,
    blobDistort: 5.5,
    blobFreq: 8.0,
    surfaceDistort: 2.5,
    surfaceFreq: 5.0,
    waves: 8.0,
  },
  
  jelly: {
    distortion: 0.4,
    speed: 1.2,
    phase: 1.5,
    r: 0.9,
    g: 0.4,
    b: 0.9,
    blobDistort: 0.4,
    blobFreq: 3.0,
    surfaceDistort: 2.5,
    surfaceFreq: 5.0,
    waves: 6.0,
  },
  chill: {
    distortion: 0.4,
    speed: 1.2,
    phase: 1.5,
    r: 0.9,
    g: 0.4,
    b: 0.9,
    blobDistort: 0.4,
    blobFreq: 3.0,
    surfaceDistort: 2.5,
    surfaceFreq: 5.0,
    waves: 6.0,
  },
}
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

      const personalities: (keyof typeof blobPersonalities)[] = [
        'alien',
        'glow',
        'chaotic',
        'jelly',
        'chaotic',
        'chill',
      ];

     // const [r, g, b] = colors[i]
     // const position = positions[i]
     // const personality = personalities[i];
      const personalityKey = personalities[i];
      const config = blobPersonalities[personalityKey];
      const position = positions[i];

      return (
        <Blob
          key={i}
          position={position}
          scale={0.4}
          r={config.r}
          g={config.g}
          b={config.b}
          distortion={config.distortion}
          speed={config.speed}
          phase={config.phase}
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