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
         CODEB est une entreprise pluridisciplinaire qui identifie, finance et déploie des projets à fort impact — des énergies propres aux infrastructures essentielles.
        <p>
          Nous offrons aux gouvernements et investisseurs un accès clé-en-main : analyses de marché, structuration financière, et exécution technique de bout en bout.
        </p>
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