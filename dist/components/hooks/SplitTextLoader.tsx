import { useEffect, useState } from 'react';
import gsap from 'gsap';

export const useSplitTextLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadSplitText = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        if ((window as any).SplitText) {
          gsap.registerPlugin((window as any).SplitText);
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = '/libs/SplitText.min.js'; // desde public
        script.async = true;
        script.onload = () => {
          const SplitText = (window as any).SplitText || (window as any).gsap?.SplitText;
          if (SplitText) {
            gsap.registerPlugin(SplitText);
            console.log('✅ SplitText cargado correctamente.');
            resolve();
          } else {
            reject(new Error('SplitText no disponible tras carga.'));
          }
        };
        script.onerror = () => reject(new Error('Error al cargar SplitText'));
        document.body.appendChild(script);
      });
    };

    loadSplitText()
      .then(() => setIsLoaded(true))
      .catch(error => {
        console.error(error);
        setIsLoaded(false);
      });
  }, []);

  return isLoaded;
};
