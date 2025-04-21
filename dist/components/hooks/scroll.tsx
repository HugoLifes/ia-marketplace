// hooks/useTouchScroll.ts
import { useEffect, useRef } from 'react'
import { useScroll } from '@react-three/drei'

const TouchScrollHandler = () => {
    const scroll = useScroll()
    const touchStartX = useRef(0)
  
    useEffect(() => {
      const el = scroll.el
      if (!el) return
  
      const onTouchStart = (e: TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
      }
  
      const onTouchMove = (e: TouchEvent) => {
        const deltaX = e.touches[0].clientX - touchStartX.current
        el.scrollLeft -= deltaX * 1.5
        touchStartX.current = e.touches[0].clientX
      }
  
      el.addEventListener('touchstart', onTouchStart)
      el.addEventListener('touchmove', onTouchMove)
  
      return () => {
        el.removeEventListener('touchstart', onTouchStart)
        el.removeEventListener('touchmove', onTouchMove)
      }
    }, [])
  
    return null
  }

 export default TouchScrollHandler 