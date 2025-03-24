import { Suspense, useRef } from "react";
import "../src/index.css";
import Labels from "../public/components/Labels";
import Scene from "../public/components/Scene";
import Navbar from "../public/components/NavBar";
import ScrollIndicator from "../public/components/ScrollIndicator";



function App() {

  const appRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  // Función para desplazarse a una sección específica
  const scrollToSection = (sectionId: string) => {
    // Obtener el índice de la sección (1-based)
    const sectionIndex = Number.parseInt(sectionId.split("-")[1])

    // Calcular la posición de scroll basada en el índice
    // Esto asume que cada sección ocupa aproximadamente una altura de ventana
    const scrollPosition = (sectionIndex - 1) * window.innerHeight

    // Animar el scroll a la posición calculada
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: scrollPosition,
        autoKill: false,
      },
      ease: "power2.inOut",
      onComplete: () => {
        // Opcional: disparar un evento personalizado para notificar que el scroll ha terminado
        const event = new CustomEvent("scrollComplete", { detail: { sectionId } })
        document.dispatchEvent(event)
      },
    })
  }

  


  return (
    <div className="app-container no-scrollbar" ref={appRef} >
      <div className='scene_container' >
      
        <Suspense fallback={null}>
       
          <Scene />
        </Suspense>
        <Labels />
        <Navbar scrollToSection={scrollToSection} />
      <ScrollIndicator />
 
      </div>
      
    </div>
  );
}

export default App;
