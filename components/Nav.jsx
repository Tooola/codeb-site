import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo">CODEB<span>.</span></a>
      <div className="nav-links">
        <a href="#about">À propos</a>
        <a href="#services">Services</a>
        <a href="#energie">Énergie</a>
        <a href="#infrastructure">Infrastructure</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto:info@codebltd.com" className="nav-cta">Nous écrire</a>
    </nav>
  )
}