export default function Feature({
  id,
  label,
  title,
  imgSrc,
  imgAlt,
  steps,
  reversed = false,
}) {
  const overlayStyle = reversed
    ? { background: 'var(--overlay-feature-rev)' }
    : undefined

  const imgBlock = (
    <div className={`feature-img reveal ${reversed ? 'right' : 'left'}`}>
      <img src={imgSrc} alt={imgAlt} />
      <div className="feature-img-overlay" style={overlayStyle} />
    </div>
  )

  const contentBlock = (
    <div className={`feature-content reveal ${reversed ? 'left' : 'right'}`}>
      <div className="section-label">{label}</div>
      <h2>{title}</h2>
      <div className="steps">
        {steps.map((s, i) => (
          <div key={i} className="step">
            <div className="step-icon">
              {s.icon ? s.icon : <div className="step-dot" />}
            </div>
            <div className="step-body">
              <strong>{s.title}</strong>
              <span>{s.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section
      className={`feature${reversed ? ' reversed' : ''}`}
      id={id}
    >
      {reversed ? contentBlock : imgBlock}
      {reversed ? imgBlock : contentBlock}
    </section>
  )
}