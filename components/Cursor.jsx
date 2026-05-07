import { useEffect, useRef } from 'react'

export default function Cursor() {
  const curRef = useRef(null)
  const ringRef = useRef(null)
  let mx = 0, my = 0, rx = 0, ry = 0

  useEffect(() => {
    const onMove = e => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    const loop = () => {
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      if (curRef.current) {
        curRef.current.style.left = mx + 'px'
        curRef.current.style.top = my + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      requestAnimationFrame(loop)
    }
    const rafId = requestAnimationFrame(loop)

    const grow = () => {
      if (curRef.current) { curRef.current.style.width = '20px'; curRef.current.style.height = '20px' }
      if (ringRef.current) { ringRef.current.style.width = '64px'; ringRef.current.style.height = '64px' }
    }
    const shrink = () => {
      if (curRef.current) { curRef.current.style.width = '12px'; curRef.current.style.height = '12px' }
      if (ringRef.current) { ringRef.current.style.width = '40px'; ringRef.current.style.height = '40px' }
    }

    const targets = document.querySelectorAll('a, button, .svc-card, .loc-card')
    targets.forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={curRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}