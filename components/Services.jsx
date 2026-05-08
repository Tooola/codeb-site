const svcs = [
  {
    num: '01',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80',
    imgAlt: 'Panneaux solaires champ Afrique',
    title: 'Énergies Renouvelables',
    desc: "Développeur clé en main de centrales solaires, hydroélectriques, biomasse et éoliennes — de l'identification du site à la signature du PPA et à la construction.",
    tags: ['Solaire', 'Hydro', 'Biomasse', 'Éolien', 'PPA'],
  },
  {
    num: '02',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    imgAlt: 'Lignes haute tension pylônes électriques',
    title: 'Infrastructure Électrique',
    desc: "Études d'électrification, installation de poteaux, raccordement au réseau et lignes haute tension — de la conception à la mise en service.",
    tags: ['Électrification', 'Poteaux', 'Raccordement', 'Haute tension'],
  },
  {
    num: '03',
    img: 'https://images.unsplash.com/photo-1544013697-d3eb6c72c7a7?w=600&q=80',
    imgAlt: 'Château eau infrastructure hydraulique',
    title: 'Eaux & Infrastructures',
    desc: "Villes intelligentes, réseaux d'eau, dessalement et stations d'épuration pour besoins industriels et municipaux.",
    tags: ['Smart Cities', 'Dessalement', 'Épuration'],
  },
  {
    num: '04',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    imgAlt: 'Big Data solutions',
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
            <div className="svc-img-wrap">
              <img src={s.img} alt={s.imgAlt} />
              <div className="svc-img-overlay" />
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