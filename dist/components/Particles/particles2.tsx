import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler'
import * as THREE from 'three'
import { useEffect, useMemo, useRef, useState } from 'react'
import { isMobile, isTablet, isBrowser } from 'react-device-detect'


type DeviceType = 'mobile' | 'tablet' | 'desktop'

const getDeviceType = (): DeviceType => {
  if (isMobile && !isTablet) return 'mobile'
  if (isTablet) return 'tablet'
  return 'desktop'
}


interface Props {
    size?: number
    duration?: number
    baseCount?: number
}

export const ParticlesMorph = ({  size = 0.015,
    duration = 0.01,
    baseCount = 6000, }: Props) => {
    const { size: viewportSize } = useThree()
    const { viewport } = useThree()
    const isMobile = viewportSize.width < 768
    const count = isMobile ? baseCount / 3 : baseCount

    const device = getDeviceType()
    // Detectamos si hay poco espacio visible (por ejemplo, navegador reducido)
    const isSmallScreen = viewport.width < 6
  
    const { scene } = useGLTF('../../model/humanoid.glb')
    const pointsRef = useRef<THREE.Points>(null)
    const [morph, setMorph] = useState(false)
    const progress = useRef(0)

    const effectiveDevice: DeviceType = (() => {
      // Si el dispositivo es desktop pero la pantalla es pequeña, lo tratamos como tablet
      if (device === 'desktop' && isSmallScreen) return 'tablet'
      return device
    })()

    const positionsMap: Record<DeviceType, [number, number, number]> = {
      mobile: [15.4, 0, 0.40],
      tablet: [16.4, 0, 0],
      desktop: [16.4, 0, 0],
    }

    const scaleMap: Record<DeviceType, number> = {
      mobile: 0.3,
      tablet: 0.25,
      desktop: 0.7,
    }
      
  
    const [randomPositions, targetPositions] = useMemo(() => {
      const rand = new Float32Array(count * 3)
      const target = new Float32Array(count * 3)
  
      for (let i = 0; i < count * 3; i++) {
        rand[i] = (Math.random() - 0.5) * 10
      }
  
      const geo = extractFirstGeometry(scene)
      if (geo) {
        geo.center()
        const mesh = new THREE.Mesh(geo)
        const sampler = new MeshSurfaceSampler(mesh).build()
        const temp = new THREE.Vector3()
  
        for (let i = 0; i < count; i++) {
          sampler.sample(temp)
          target.set([temp.x, temp.y, temp.z], i * 3)
        }
      }
  
      return [rand, target]
    }, [scene, count])
  
    const positions = useMemo(() => new Float32Array(randomPositions), [randomPositions])
  
    const geometry = useMemo(() => {
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      return geo
    }, [positions])
  
    const material = useMemo(
      () =>
        new THREE.PointsMaterial({
          size,
          color: 0x00ffff,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.9,
        }),
      [size]
    )
  
    useFrame(() => {
      const posAttr = geometry.attributes.position as THREE.BufferAttribute
  
      if ((!morph && progress.current <= 0) || (morph && progress.current >= 1)) return
  
      const dir = morph ? 1 : -1
      progress.current = THREE.MathUtils.clamp(progress.current + dir * duration, 0, 1)
      const t = progress.current
  
      for (let i = 0; i < count * 3; i++) {
        const a = randomPositions[i]
        const b = targetPositions[i]
        posAttr.array[i] = THREE.MathUtils.lerp(a, b, t)
      }
  
      posAttr.needsUpdate = true
    })
  
    const toggle = () => {
      progress.current = morph ? 1 : 0
      setMorph(!morph)
    }
    const positionsAdaptive = positionsMap[effectiveDevice]
    const scaleAdaptive = scaleMap[effectiveDevice]
  
  return (
    <points
      ref={pointsRef}
      geometry={geometry}
      material={material}
      position={positionsAdaptive} // enfrente del modelo z = 1
      rotation={[0, 80, 0]}
      scale={scaleAdaptive} 
      onClick={toggle} // click para que se pueda ver el modelo
    />
  )
}


// Extrae la primera geometría encontrada en el modelo
function extractFirstGeometry(obj: THREE.Object3D): THREE.BufferGeometry | null {
  let geometry: THREE.BufferGeometry | null = null
  obj.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      geometry = (child as THREE.Mesh).geometry
    }
  })
  return geometry
}
