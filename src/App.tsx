import { Suspense } from "react";
import "../src/index.css";
import Labels from "../public/components/Labels";
import Scene from "../public/components/Scene";

function App() {
  return (
    <>
      <div className='scene_container'>
      <Labels />
        <Suspense fallback={null}>
       
          <Scene />
        </Suspense>
      </div>
      
    </>
  );
}

export default App;
