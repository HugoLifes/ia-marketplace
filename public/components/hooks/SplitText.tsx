// src/hooks/useSplitTextLoader.ts
import { useEffect, useState } from "react";
import gsap from "gsap";

export function SplitText() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Si ya lo cargamos antes, no volvemos a hacerlo
    if ((window as any).SplitText) {
      setReady(true);
      return;
    }

    const script = document.createElement("script");
    // Ruta absoluta: /libs/SplitText.min.js
    script.src = `${window.location.origin}/libs/SplitText.min.js`;
    script.async = true;

    script.onload = () => {
      const ST =
        (window as any).SplitText?.default ??
        (window as any).SplitText ??
        (window as any).gsap?.SplitText;
      if (ST) {
        gsap.registerPlugin(ST);
        console.log("✅ SplitText cargado y registrado");
        setReady(true);
      } else {
        console.error("⚠️ SplitText no estuvo disponible en window");
      }
    };
    script.onerror = () => {
      console.error("❌ Error cargando SplitText.min.js");
    };

    document.body.appendChild(script);

    // cleanup si desmontan antes de cargar
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return ready;
}
