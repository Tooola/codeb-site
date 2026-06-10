import { useEffect, useState, useRef } from 'react'
import { Sun, Moon, Globe, Menu, X, ChevronDown } from 'lucide-react'
import { useTranslation } from '../src/i18n/LanguageContext'
import { NavLink, Link } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const { lang, toggleLang, t } = useTranslation()

  // Handle clicking outside of dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])


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

  const closeMenu = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  const toggleDropdown = (e) => {
    e.preventDefault()
    setDropdownOpen(!dropdownOpen)
  }

  const servicesItems = t('services.items') || []
  const serviceRoutes = [
    '/services/renewable-energy',
    '/services/electrical-infrastructure',
    '/services/water-sanitation',
    '/services/big-data'
  ]

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img src="/images/logo.png" alt="CODEB" />
      </Link>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''} end>{t('nav.home') || 'Accueil'}</NavLink>
        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.about')}</NavLink>
        
        <div className={`dropdown-container ${dropdownOpen ? 'open' : ''}`} ref={dropdownRef} onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(true)} onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(false)}>
          <button className="nav-dropdown-toggle" onClick={toggleDropdown}>
            {t('nav.services')} <ChevronDown size={16} />
          </button>
          <div className="dropdown-menu">
            {servicesItems.map && servicesItems.map((item, idx) => (
              <NavLink 
                key={idx} 
                to={serviceRoutes[idx]} 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? 'dropdown-item active' : 'dropdown-item'}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>

        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.contact')}</NavLink>
        {/* Visible only on mobile menu */}
        <a href="mailto:info@codebsarl.com" className="nav-cta mobile-only">{t('nav.write_us')}</a>
      </div>

      <div className="nav-actions">
        <button 
          onClick={toggleLang} 
          className="icon-btn lang-toggle"
          aria-label="Toggle language"
        >
          <Globe size={18} />
          <span>{lang.toUpperCase()}</span>
        </button>
        <button 
          onClick={toggleTheme} 
          className="icon-btn theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <a href="mailto:info@codebsarl.com" className="nav-cta desktop-only">{t('nav.write_us')}</a>
        
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  )
}