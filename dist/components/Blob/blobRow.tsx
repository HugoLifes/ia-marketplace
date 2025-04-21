import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { blobPersonalities} from './blobLibrary'
import  Blob  from './Blob'


const BlobRow = () => {
    const { viewport } = useThree()
    
    //console.log('section',sectionWidth)
    return (
      <>
      {[...Array(5)].map((_, i) => {
  
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
        
  
        const scales = [
          0.4,
          0.3,
          0.3,
          0.3,
          0.3
         
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

export default BlobRow


