import { useTranslation } from '../src/i18n/LanguageContext'

export default function About() {
  const { t } = useTranslation()
  const pills = t('about.pills') || []
  return (
    <section className="about" id="about">
      <div className="about-text reveal right">
        <div className="section-label">{t('about.label')}</div>
        <h2>
          {t('about.title_start')}<br />
          <em>{t('about.title_strong')}</em>
        </h2>
        <p>
          {t('about.desc1')}
        </p>
        <p>
          {t('about.desc2')}
        </p>
        <div className="about-pills">
          {pills.map(p => (
            <span key={p} className="pill">{p}</span>
          ))}
        </div>
      </div>
      <div className="about-visual">
        <img src="/images/pont.png" alt="CODEB" />
        <div className="about-visual-overlay"></div>
      </div>
    </section>
  )
}