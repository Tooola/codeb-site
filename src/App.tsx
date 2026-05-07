import { useEffect } from 'react'
import Cursor from '../components/Cursor'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import MarqueeBand from '../components/Marquee'
import About from '../components/About'
import Services from '../components/Services'
import Feature from '../components/Feature'
import Stats from '../components/Stats'
import Locations from '../components/Locations'
import Footer from '../components/Footer'
import './index.css'

export default function App() {
  useEffect(() => {
    // Scroll reveal
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 100)
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <MarqueeBand />
      <About />
      <Services />
      <Feature
        id="energie"
        label="Développement · Clé en Main"
        title={<>De l'identification<br />du site au <em>PPA signé</em></>}
        imgSrc="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
        imgAlt="Solaire Afrique"
        steps={[
          { title: 'Identification & Sélection de sites', desc: 'Prospection terrain, analyse des ressources solaires, hydrologiques, éoliennes et biomasse.' },
          { title: 'Études complètes', desc: 'Faisabilité, études d\'impact environnemental, études techniques et connexion réseau.' },
          { title: 'Autorisations & Permis', desc: 'Sécurisation des terrains, permis de construire et autorisations réglementaires.' },
          { title: 'Financement & PPA / PIE', desc: 'Recherche de financements adaptés et négociation des contrats d\'achat d\'électricité.' },
          { title: 'Construction des centrales', desc: 'Notre équipe technique assure la construction et la mise en service des centrales.' },
        ]}
      />
      <Feature
        id="infrastructure"
        label="Infrastructure Électrique"
        title={<>De l'étude au<br /><em>raccordement final</em></>}
        imgSrc="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80"
        imgAlt="Infrastructure électrique"
        reversed
        bgColor="#060d18"
        steps={[
          { title: 'Études d\'électrification', desc: 'Élaboration des études techniques et plans d\'électrification rurale et urbaine.' },
          { title: 'Installation de poteaux', desc: 'Déploiement des lignes de distribution, pose et installation des poteaux électriques.' },
          { title: 'Raccordement au réseau', desc: 'Connexion aux réseaux existants, sous-stations et systèmes de protection.' },
          { title: 'Maintenance & Suivi', desc: 'Supervision continue et consultation en maintenance des installations électriques.' },
        ]}
      />
      <Feature
        id="bigdata"
        label="Big Data de bout en bout"
        title={<>Des données brutes<br />aux <em>décisions clés</em></>}
        imgSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
        imgAlt="Big Data Africa"
        steps={[
          { title: 'Collecte & Modélisation', desc: 'Agrégation de sources multiples dans un modèle flexible et évolutif.' },
          { title: 'Traitement & Nettoyage', desc: 'Enrichissement et organisation des données pour exactitude et fiabilité.' },
          { title: 'Stockage optimisé', desc: 'Architecture efficace pour maximiser l\'exploration et la business intelligence.' },
          { title: 'Dashboards & Rapports fiables', desc: 'Informations livrées aux ministères et équipes opérationnelles en temps réel.' },
        ]}
      />
      <Stats />
      <Locations />
      <Footer />
    </>
  )
}