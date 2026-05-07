const items = [
  'Solaire',
  'Hydroélectrique',
  'Biomasse',
  'Éolien',
  'Clé en Main · Bout en Bout',
  'Infrastructure Électrique',
  'Eau & Assainissement',
  'Solutions Big Data',
]

export default function MarqueeBand() {
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