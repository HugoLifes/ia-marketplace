// hooks/useSplitTextLoader.ts
import { useEffect } from 'react'
import gsap from 'gsap'

export const SplitText = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '../../libs/SplitText.min.js'
    script.async = true
    script.onload = () => {
      const SplitText =
        (window as any).SplitText?.default ??
        (window as any).SplitText ??
        (window as any).gsap?.SplitText

        console.log(SplitText)

      if (SplitText) {
        gsap.registerPlugin(SplitText)
        console.log('✅ SplitText loaded and registered')
      } else {
        console.warn('⚠️ SplitText no disponible en window')
      }
    }

    document.body.appendChild(script)
  }, [])
}
