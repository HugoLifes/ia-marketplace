import { Suspense, useRef } from "react";
import "../src/index.css";
import Labels from "../public/components/Labels";
import Scene from "../public/components/Scene";
import Navbar from "../public/components/utils/NavBar";
import ScrollIndicator from "../public/components/utils/ScrollIndicator";
import { SplitText } from "../public/components/hooks/SplitText";


function App() {
  SplitText()
  return (
    
      <div className='scene_container' >
      
        <Suspense fallback={null}>
        <Labels />
          <Scene />
        </Suspense>
          
          <Navbar  />
      
 
      </div>
      
    
  );
}

export default App;
