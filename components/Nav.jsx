import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(t => t === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo"> <img src="/images/logo.png" alt="CODEB" /> </a>
      <div className="nav-links">
        <a href="#about">À propos</a>
        <a href="#services">Services</a>
        <a href="#energie">Énergie</a>
        <a href="#infrastructure">Infrastructure</a>
        <a href="#contact">Contact</a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <button 
          onClick={toggleTheme} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center' }}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <a href="mailto:info@codebltd.com" className="nav-cta">Nous écrire</a>
      </div>
    </nav>
  )
}