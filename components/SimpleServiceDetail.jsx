import { useTranslation } from '../src/i18n/LanguageContext'

export default function SimpleServiceDetail({ id, label, title, desc, imgSrc, imgAlt, reversed }) {
  return (
    <section className="simple-service-detail" id={id}>
      <div className={`simple-service-container reveal ${reversed ? 'reversed' : ''}`}>
        <div className="simple-service-img-col">
          <img src={imgSrc} alt={imgAlt} className="simple-service-img" />
        </div>
        <div className="simple-service-text-col">
          <div className="section-label">{label}</div>
          <h2 className="section-title">{title}</h2>
          <p className="simple-service-desc">{desc}</p>
        </div>
      </div>
    </section>
  )
}
