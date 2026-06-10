import { Link } from 'react-router-dom'
import { useTranslation } from '../src/i18n/LanguageContext'

export default function About({ preview = false }) {
  const { t } = useTranslation()
  const pills = t('about.pills') || []
  return (
    <section className={`about ${preview ? 'about-preview' : ''}`} id="about">
      <div className="about-text reveal right">
        <div className="section-label">{t('about.label')}</div>
        <h2>
          {t('about.title_start')}<br />
          <em>{t('about.title_strong')}</em>
        </h2>
        <p>
          {t('about.desc1')}
        </p>
        {!preview && (
          <p>
            {t('about.desc2')}
          </p>
        )}
        <div className="about-pills">
          {(preview ? pills.slice(0, 4) : pills).map(p => (
            <span key={p} className="pill">{p}</span>
          ))}
        </div>
        {preview && (
          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/about" className="btn-learn-more">
              {t('about.learn_more') || 'En savoir plus'}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        )}
      </div>
      <div className="about-visual">
        <img src="/images/pont.png" alt="CODEB" />
        <div className="about-visual-overlay"></div>
      </div>
    </section>
  )
}