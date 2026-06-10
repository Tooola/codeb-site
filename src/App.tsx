import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import RenewableEnergyPage from './pages/RenewableEnergyPage'
import ElectricalInfrastructurePage from './pages/ElectricalInfrastructurePage'
import WaterSanitationPage from './pages/WaterSanitationPage'
import BigDataPage from './pages/BigDataPage'
import ContactPage from './pages/ContactPage'
import './index.css'

function ScrollRevealUpdater() {
  const location = useLocation()

  useEffect(() => {
    // Scroll reveal observer needs to re-run when the location changes
    // because new elements with .reveal class might be added to the DOM.
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 100)
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
    
    // Add a slight delay to allow the new page component to render
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    }, 100)
    
    // Scroll to top on route change
    window.scrollTo(0, 0)
    
    return () => io.disconnect()
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollRevealUpdater />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services">
            <Route path="renewable-energy" element={<RenewableEnergyPage />} />
            <Route path="electrical-infrastructure" element={<ElectricalInfrastructurePage />} />
            <Route path="water-sanitation" element={<WaterSanitationPage />} />
            <Route path="big-data" element={<BigDataPage />} />
          </Route>
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}