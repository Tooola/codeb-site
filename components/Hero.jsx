import { useTranslation } from '../src/i18n/LanguageContext'

export default function Hero() {
  const { t } = useTranslation()
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
          <span>{t('hero.eyebrow')}</span>
        </div>
        <h1 className="hero-title">
          {t('hero.title_start')}<strong>{t('hero.title_strong')}</strong>
        </h1>
        <div className="hero-sub-row">
          <p className="hero-desc">
            {t('hero.desc')}
          </p>
          <div className="hero-scroll-hint">
            <div className="scroll-line" />
            <span>{t('hero.discover')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}