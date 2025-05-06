import { useEffect, useRef } from 'react'
import { useScroll } from '@react-three/drei'

const TouchScrollHandler = ({ sensitivity = 2, minDelta = 2 }) => {
  const scroll = useScroll()
  const touchStartX = useRef(0)

  useEffect(() => {
    const el = scroll.el
    if (!el) return

    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
    }

    const onTouchMove = (e: TouchEvent) => {
      const touchX = e.touches[0].clientX
      const deltaX = touchX - touchStartX.current

      // Ignorar movimientos muy pequeños (filtrar ruido)
      if (Math.abs(deltaX) < minDelta) return

      el.scrollLeft -= deltaX * sensitivity
      touchStartX.current = touchX
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })

    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
    }
  }, [sensitivity, minDelta])

  return null
}

export default TouchScrollHandler
