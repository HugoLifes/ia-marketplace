import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { blobPersonalities} from './blobLibrary'
import  Blob  from './Blob'
import { isMobile, isTablet, isBrowser } from 'react-device-detect'

type DeviceType = 'mobile' | 'tablet' | 'desktop'

const getDeviceType = (): DeviceType => {
  if (isMobile && !isTablet) return 'mobile'
  if (isTablet) return 'tablet'
  return 'desktop'
}

const BlobRow = () => {
    const { viewport } = useThree()

    const device = getDeviceType()

    // Detectamos si hay poco espacio visible (por ejemplo, navegador reducido)
    const isSmallScreen = viewport.width < 6

    const effectiveDevice: DeviceType = (() => {
      // Si el dispositivo es desktop pero la pantalla es pequeña, lo tratamos como tablet
      if (device === 'desktop' && isSmallScreen) return 'tablet'
      return device
    })()
    
    const positions: [number, number, number][] = [
      [0, 0, 0],
      [15, 0, 0],
      [30, 0, 0],
      [50, 0, 0],
      [70, 0, 0],
    
    ]
    const personalities: (keyof typeof blobPersonalities)[] = [
      'alien',
      'lava',
      'lava2',
      'ghostFlame',
      'ice',
    ];
    const scaleMap: Record<DeviceType, number[]> = {
      mobile: [0.4, 0.2, 0.2, 0.2, 0.2],
      tablet: [0.35, 0.25, 0.25, 0.25, 0.25],
      desktop: [0.4, 0.3, 0.3, 0.3, 0.3],
    }
  
    const scales = scaleMap[effectiveDevice]
    return (
      <>
      {[...Array(5)].map((_, i) => {
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

export default BlobRow


