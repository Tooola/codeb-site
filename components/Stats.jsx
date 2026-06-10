import { useEffect, useRef } from 'react'
import { useTranslation } from '../src/i18n/LanguageContext'

function StatItem({ val, suffix = '', label }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        let cur = 0
        const inc = Math.ceil(val / 40)
        const t = setInterval(() => {
          cur = Math.min(cur + inc, val)
          el.textContent = cur + suffix
          if (cur >= val) clearInterval(t)
        }, 40)
        obs.disconnect()
      }
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [val, suffix])

  return (
    <div className="stat-item">
      <div className="stat-big" ref={ref}>{val}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Stats() {
  const { t } = useTranslation()
  const stats = t('stats.items') || []

  return (
    <div className="stats-band reveal">
      {stats.map(s => (
        <StatItem key={s.label} {...s} />
      ))}
    </div>
  )
}