export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-video-wrap">
        <img
          src="/images/hero.png"
          alt="Centrale solaire Afrique"
        />
      </div>
      <div className="hero-vignette" />
      <div className="hero-grid-overlay" />
      <div className="hero-accent-line" />

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span>CODEB Sarl · Europe · Afrique</span>
        </div>
        <h1 className="hero-title">
          Le pont vers<br />
          <strong>l'Afrique</strong>
        </h1>
        <div className="hero-sub-row">
          <p className="hero-desc">
            Énergies renouvelables, infrastructures, eau &amp; big data
            nous sommes votre pont vers les opportunités africaines.
          </p>
          <div className="hero-scroll-hint">
            <div className="scroll-line" />
            <span>Découvrir</span>
          </div>
        </div>
      </div>
    </section>
  )
}