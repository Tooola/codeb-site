const pills = [
  'Solaire', 'Hydroélectrique', 'Biomasse', 'Éolien',
  'Infrastructure électrique', 'Eau & Assainissement', 'Big Data',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-visual reveal left">
        <img
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1000&q=80"
          alt="Afrique"
        />
        <div className="about-visual-overlay" />
        <div className="about-counter">
          <div className="big-num">4</div>
          <p>Pays présents</p>
        </div>
      </div>

      <div className="about-text reveal right">
        <div className="section-label">À propos de CODEB</div>
        <h2>
          Développeur de projets<br />
          <em>clé en main · bout en bout</em>
        </h2>
        <p>
          CODEB est un développeur de projets d'énergies renouvelables et
          d'infrastructures en Afrique. Nous prenons en charge chaque projet
          depuis l'identification du site jusqu'à la signature du PPA — et
          au-delà, avec notre équipe technique dédiée à la construction.
        </p>
        <p>
          Solaire, hydroélectrique, biomasse, éolien : nous développons,
          finançons et construisons des centrales avec une maîtrise totale
          du cycle projet.
        </p>
        <div className="about-pills">
          {pills.map(p => (
            <span key={p} className="pill">{p}</span>
          ))}
        </div>
      </div>
    </section>
  )
}