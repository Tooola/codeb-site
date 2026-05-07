const locs = [
  {
    flag: '🇱🇺', country: 'Luxembourg',
    lines: ['3 Rue Heicht, 6926 Grevenmacher', 'Grand-Duché de Luxembourg'],
    phone: '+352 661 215 835',
  },
  {
    flag: '🇧🇯', country: 'Bénin',
    lines: ['Lot 1611 Aibatin 2, 03 BP 1792', 'Cotonou, Bénin'],
    phone: '+229 016 911 6297',
  },
  {
    flag: '🇰🇪', country: 'Kenya',
    lines: ['Riverside Square, 10e étage', 'Riverside Drive, Nairobi'],
    phone: '+254 722 906 876',
  },
  {
    flag: '🇹🇿', country: 'Tanzanie',
    lines: ['Kimbiji House, 1er étage', '344 Ghuba Road, Dar es Salaam'],
    phone: '+255 747 305 053',
  },
]

export default function Locations() {
  return (
    <section className="locations" id="contact">
      <div className="locations-inner">

        <div className="reveal left">
          <div className="section-label">Présence internationale</div>
          <h2 className="locations-title">
            Nos<br /><em>bureaux</em>
          </h2>
          <p style={{ marginTop: '1.5rem', fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.8, color: 'rgba(232,244,253,0.42)' }}>
            Un réseau stratégique ancré sur deux continents pour vous accompagner
            où vous en avez besoin.
          </p>
          <a href="mailto:info@codebltd.com" className="contact-btn">
            Nous contacter →
          </a>
        </div>

        <div className="loc-cards reveal right">
          {locs.map(l => (
            <div key={l.country} className="loc-card">
              <span className="loc-flag">{l.flag}</span>
              <h4>{l.country}</h4>
              <p>
                {l.lines.map((line, i) => (
                  <span key={i}>{line}{i < l.lines.length - 1 && <br />}</span>
                ))}
              </p>
              <a
                href={`tel:${l.phone.replace(/\s/g, '')}`}
                className="loc-phone"
              >
                {l.phone}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}