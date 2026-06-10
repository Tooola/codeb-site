import { useTranslation } from '../src/i18n/LanguageContext'

export default function Locations() {
  const { t } = useTranslation()
  const locs = t('locations.items') || []
  return (
    <section className="locations" id="contact">
      <div className="locations-inner">

        <div className="reveal left">
          <div className="section-label">{t('locations.label')}</div>
          <h2 className="locations-title">
            {t('locations.title_start')}<br /><em>{t('locations.title_strong')}</em>
          </h2>
          <p style={{ marginTop: '1.5rem', fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.8, color: 'var(--text-dim)' }}>
            {t('locations.desc')}
          </p>
          <a href="mailto:info@codebsarl.com" className="contact-btn">
            {t('locations.contact_btn')}
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