import React , { useRef, useState, useMemo }from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Environment, ScrollControls, Scroll} from '@react-three/drei'
import CameraInfo from './cameraInfo'
import '../styles/landingPage.css'
import * as THREE from 'three';
import { Model } from './ModelSpace'
import  Blob  from './Blob'
import AdjustCamera from './adjustCamera'
import { Person } from './Futurista'
import { Man } from './silverMan'

function GradientBackground() {
  const { scene } = useThree()
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 16
    canvas.height = 256
    const context = canvas.getContext('2d')
    if (context) {
      // Crear un gradiente lineal vertical
      const gradient = context.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#e66465') // Color de inicio
      gradient.addColorStop(1, '#9198e5') // Color final
      context.fillStyle = gradient
      context.fillRect(0, 0, canvas.width, canvas.height)
    }
    return new THREE.CanvasTexture(canvas)
  }, [])

  // Asigna la textura como fondo de la escena
  scene.background = gradientTexture
  return null
}

const Scene: React.FC = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  return (
    
    <div  >
      <div >
          <Canvas shadows  camera={{   fov: 50 }}  >
          <color attach="background" args={['#374151']} />
          {/* Carga tu modelo .glb en la ruta que tengas (ej. /models/myModel.glb) <color attach="background" args={['black']} />     */}
          
          <ambientLight intensity={1.6} />
          <pointLight position={[10.999, 10, 10]} intensity={1999} />
          <ScrollControls pages={3} damping={0.25}  > 
          
            
            {/* Add your scrollable content here */}
            <Model />
            <Man />
            
            <CameraInfo />
            
            
           
          </ScrollControls>
          
          </Canvas>
      </div>

    </div>
  )
}

export default Scene