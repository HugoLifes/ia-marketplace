// hooks/useClubSplitText.ts
import { useLayoutEffect } from "react";
import gsap from "gsap";

export function useClubSplitText(
  ref: React.RefObject<HTMLElement>,
  vars: Record<string, any>
) {
  useLayoutEffect(() => {
    // función que crea y anima
    const init = () => {
      const ST = (window as any).SplitText;
      if (!ST || !ref.current) return;
      const instance = new ST(ref.current, vars);
      // ejemplo rápido: animar_chars o palabras
      gsap.from(
        instance.chars || instance.words || [],
        { opacity: 0, y: 20, stagger: 0.05, duration: 0.5 }
      );
      // limpia al desmontar
      return () => instance.revert();
    };

    // si ya está cargado, inicializa al vuelo
    if ((window as any).SplitText) {
      const cleanup = init();
      return () => cleanup && cleanup();
    }

    // si no, escucha el evento
    window.addEventListener("splittext:ready", init);
    return () => {
      window.removeEventListener("splittext:ready", init);
    };
  }, [ref, JSON.stringify(vars)]);
}
