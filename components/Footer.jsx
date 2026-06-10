import { useTranslation } from '../src/i18n/LanguageContext'

export default function Footer() {
  const { t } = useTranslation()
  const servicesLinks = t('footer.services_links') || []
  return (
    <footer>
      <div className="footer-grid">

        <div className="footer-brand">
          <div className="logo"><img src="/images/logo.png" alt="codeb-logo" /></div>
          <p className="footer-tagline">{t('footer.tagline')}</p>
          <p>
            {t('footer.desc')}
          </p>
          <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-very-dim)' }}>
            contact@codebsarl.com · www.codebsarl.com
          </p>
        </div>

        <div className="footer-col">
          <h5>{t('footer.services_title')}</h5>
          <a href="#energie">{servicesLinks[0]}</a>
          <a href="#infrastructure">{servicesLinks[1]}</a>
          <a href="#services">{servicesLinks[2]}</a>
          <a href="#bigdata">{servicesLinks[3]}</a>
          <a href="#contact">{servicesLinks[4]}</a>
        </div>

        <div className="footer-col">
          <h5>{t('footer.contact_title')}</h5>
          <a href="tel:+352661215835">+352 661 215 835 (LU)</a>
          <a href="tel:+254722906876">+254 722 906 876 (KE)</a>
          <a href="tel:+22901691297">+229 016 911 6297 (BJ)</a>
          <a href="tel:+255747305053">+255 747 305 053 (TZ)</a>
          <a href="https://www.codebsarl.com" target="_blank" rel="noreferrer">
            www.codebsarl.com
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>{t('footer.rights')}</p>
        <p>
          {t('footer.designed_by')}{' '}
          <a href="https://www.codebsarl.com" target="_blank" rel="noreferrer" style={{ display: 'inline' }}>
            Smart Design
          </a>
        </p>
      </div>
    </footer>
  )
}