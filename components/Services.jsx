import { Zap, Droplets, Database, Sun } from 'lucide-react'
import { useTranslation } from '../src/i18n/LanguageContext'

const icons = [Sun, Zap, Droplets, Database]
const images = [
  '/images/EnerRenou.png',
  '/images/InfraElectrique.png',
  '/images/eauxinfra.png',
  '/images/bigdata.jpg'
]

export default function Services() {
  const { t } = useTranslation()
  const items = t('services.items') || []

  const svcs = items.map((item, index) => ({
    num: `0${index + 1}`,
    icon: icons[index],
    img: images[index],
    imgAlt: item.title,
    title: item.title,
    desc: item.desc,
    tags: item.tags,
  }))

  return (
    <section className="services" id="services">
      <div className="services-header reveal">
        <div>
          <div className="section-label">{t('services.label')}</div>
          <h2 className="services-title">
            {t('services.title_start')}<br /><span>{t('services.title_strong')}</span>
          </h2>
        </div>
        <p>
          {t('services.desc')}
        </p>
      </div>

      <div className="svc-grid">
        {svcs.map(s => (
          <div key={s.num} className="svc-card reveal">
            <div className="svc-icon-badge">
              <s.icon className="svc-icon" />
            </div>
            <div className="svc-img-wrap">
              <img src={s.img} alt={s.imgAlt} />
              <div className="svc-img-overlay" />
            </div>
            <div className="svc-content">
              <span className="svc-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="svc-tags">
                {s.tags.map(tag => (
                  <span key={tag} className="svc-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="svc-line" />
          </div>
        ))}
      </div>
    </section>
  )
}