const svcs = [
  {
    num: '01', icon: '☀️',
    title: 'Énergies Renouvelables',
    desc: "Développeur clé en main de centrales solaires, hydroélectriques, biomasse et éoliennes — de l'identification du site à la signature du PPA et à la construction.",
    tags: ['Solaire', 'Hydro', 'Biomasse', 'Éolien', 'PPA'],
  },
  {
    num: '02', icon: '⚡',
    title: 'Infrastructure Électrique',
    desc: "Études d'électrification, installation de poteaux, raccordement au réseau et lignes haute tension — de la conception à la mise en service.",
    tags: ['Électrification', 'Poteaux', 'Raccordement', 'Haute tension'],
  },
  {
    num: '03', icon: '💧',
    title: 'Eaux & Infrastructures',
    desc: "Villes intelligentes, réseaux d'eau, dessalement et stations d'épuration pour besoins industriels et municipaux.",
    tags: ['Smart Cities', 'Dessalement', 'Épuration'],
  },
  {
    num: '04', icon: '📡',
    title: 'Solutions Big Data',
    desc: 'Collecte, modélisation et dashboards pour transformer les données brutes en décisions stratégiques pour institutions et entreprises.',
    tags: ['Telecom', 'Fintech', 'Banque'],
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header reveal">
        <div>
          <div className="section-label">Domaines d'intervention</div>
          <h2 className="services-title">
            Projets<br /><span>clé en main</span>
          </h2>
        </div>
        <p>
          De l'identification du site jusqu'à la mise en service — CODEB développe,
          finance et construit des projets d'énergie et d'infrastructure en Afrique,
          de bout en bout.
        </p>
      </div>

      <div className="svc-grid">
        {svcs.map(s => (
          <div key={s.num} className="svc-card reveal">
            <span className="svc-num">{s.num}</span>
            <div className="svc-icon-wrap">
              <span className="svc-icon">{s.icon}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="svc-tags">
              {s.tags.map(t => (
                <span key={t} className="svc-tag">{t}</span>
              ))}
            </div>
            <div className="svc-line" />
          </div>
        ))}
      </div>
    </section>
  )
}