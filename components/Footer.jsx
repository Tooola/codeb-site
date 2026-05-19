export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">

        <div className="footer-brand">
          <div className="logo"><img src="/images/logo.png" alt="codeb-logo" /></div>
          <p className="footer-tagline">Le Pont vers l'Afrique</p>
          <p>
            Partenaire stratégique pour le développement durable et
            l'investissement en Afrique depuis Luxembourg.
          </p>
          <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-very-dim)' }}>
            info@codebltd.com · www.codebltd.com
          </p>
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          <a href="#energie">Solaire · Hydro · Biomasse · Éolien</a>
          <a href="#infrastructure">Infrastructure électrique</a>
          <a href="#services">Eaux &amp; Infrastructures</a>
          <a href="#bigdata">Solutions Big Data</a>
          <a href="#contact">Nos bureaux</a>
        </div>

        <div className="footer-col">
          <h5>Contact</h5>
          <a href="tel:+352661215835">+352 661 215 835 (LU)</a>
          <a href="tel:+254722906876">+254 722 906 876 (KE)</a>
          <a href="tel:+22901691297">+229 016 911 6297 (BJ)</a>
          <a href="tel:+255747305053">+255 747 305 053 (TZ)</a>
          <a href="http://www.codebltd.com" target="_blank" rel="noreferrer">
            www.codebltd.com
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 CODEB Sarl. Tous droits réservés.</p>
        <a href="http://www.codebltd.com" target="_blank" rel="noreferrer">
          codebltd.com
        </a>
      </div>
    </footer>
  )
}