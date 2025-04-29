import React , {  Suspense }from 'react'
import { Canvas, } from '@react-three/fiber'
import { Environment, ScrollControls, Scroll} from '@react-three/drei'
import { Model } from './Scrolling/ModelSpace'
import  Blob  from './Blob/Blob'
import AdjustCamera from './utils/adjustCamera'
import { useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { Scale } from 'lucide-react'
import { blobPersonalities} from './Blob/blobLibrary'
import { Particles } from './Particles/particles'
import { ParticlesMorph } from './Particles/particles2'
import { Stats } from '@react-three/drei'
import TouchScrollHandler   from './hooks/scroll'
import BlobRow from './Blob/blobRow'
import { SplitText } from './hooks/SplitText'


const Scene: React.FC = () => {
  
  return (
    
    <div  >
      
      <div >
          <Canvas style={{ overflow: "hidden", pointerEvents: "auto" }} id='canvas' shadows  camera={{  fov: 50 }} dpr={[1, 2]}  >
          <ambientLight intensity={1.6} />
          <pointLight position={[-1 ,-0.11 , -10]} intensity={1999} />
          <pointLight position={[2 ,-0.11 , 5.5]} intensity={500} />
          {/* Carga tu modelo .glb en la ruta que tengas <Stats />   <Particles />   */}
         
          <Suspense fallback={null}>
          <ParticlesMorph />
          </Suspense>
          <AdjustCamera />
          
          <ScrollControls pages={4} horizontal damping={0.24}  > 
            <TouchScrollHandler/>
            <BlobRow />
            {/* Add your scrollable content here */}
            <Model />
            
            {/*<primitive object={new THREE.AxesHelper(2)} /> */}
          </ScrollControls>
          
          </Canvas>
      </div>
      
      
    </div>
  )
}

export default Scene