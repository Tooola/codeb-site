import { useEffect, useRef, useCallback } from 'react'

export default function Cursor() {
  const curRef = useRef(null)
  const ringRef = useRef(null)
  const animationRef = useRef()
  const mouseRef = useRef({ x: 0, y: 0 })
  const ringPosRef = useRef({ x: 0, y: 0 })

  const onMove = useCallback((e) => {
    mouseRef.current.x = e.clientX
    mouseRef.current.y = e.clientY
  }, [])

  const animate = useCallback(() => {
    const ease = 0.15
    ringPosRef.current.x += (mouseRef.current.x - ringPosRef.current.x) * ease
    ringPosRef.current.y += (mouseRef.current.y - ringPosRef.current.y) * ease

    if (curRef.current) {
      curRef.current.style.left = mouseRef.current.x + 'px'
      curRef.current.style.top = mouseRef.current.y + 'px'
    }
    if (ringRef.current) {
      ringRef.current.style.left = ringPosRef.current.x + 'px'
      ringRef.current.style.top = ringPosRef.current.y + 'px'
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [])

  const grow = useCallback(() => {
    if (curRef.current) { 
      curRef.current.style.width = '20px'
      curRef.current.style.height = '20px'
    }
    if (ringRef.current) { 
      ringRef.current.style.width = '64px'
      ringRef.current.style.height = '64px'
    }
  }, [])

  const shrink = useCallback(() => {
    if (curRef.current) { 
      curRef.current.style.width = '12px'
      curRef.current.style.height = '12px'
    }
    if (ringRef.current) { 
      ringRef.current.style.width = '40px'
      ringRef.current.style.height = '40px'
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', onMove, { passive: true })
    animationRef.current = requestAnimationFrame(animate)

    const targets = document.querySelectorAll('a, button, .svc-card, .loc-card')
    targets.forEach(el => {
      el.addEventListener('mouseenter', grow, { passive: true })
      el.addEventListener('mouseleave', shrink, { passive: true })
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      targets.forEach(el => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [onMove, animate, grow, shrink])

  return (
    <>
      <div className="cursor" ref={curRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}