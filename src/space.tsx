import React , { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Points, PointMaterial } from '@react-three/drei'
import { Group } from 'three'

// Define la interfaz del resultado de useGLTF si deseas tipar los nodos y materiales
// Esto es opcional, pero puede ayudarte a tener autocompletado en TypeScript
interface GLTFResult {
  scene: Group
  nodes: { [key: string]: THREE.Mesh }
  materials: { [key: string]: THREE.Material }
  // ... otras propiedades opcionales
}

interface MyModelProps {
  url: string
  scale?: number
}



const Space: React.FC<MyModelProps> = ({ url, scale = 1 }) => {
  const group = useRef<Group>(null); // Asegura que el tipo sea Group o null
  // Carga el modelo glb
  // "as GLTFResult" sirve para tener autocompletado, si lo deseas más estricto
  const { scene, nodes, materials } = useGLTF(url) as unknown as GLTFResult
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001; // Ejemplo: Rotación en el eje Y
    }
  });
  
  // Retorna la primitiva con la escena cargada
  return( <group ref={group} scale={[scale, scale, scale]} position={[0, -1, 0]}> 
          <primitive object={scene} />
        </group>);
}

export default Space