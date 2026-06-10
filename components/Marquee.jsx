import { useTranslation } from '../src/i18n/LanguageContext'

export default function MarqueeBand() {
  const { t } = useTranslation()
  const items = t('marquee.items') || []
  // doubled for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="marquee-band">
      <div className="marquee-track">
        {doubled.map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  )
}