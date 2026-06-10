import { Link } from 'react-router-dom'

export default function PageHeader({ title, bgImage }) {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="page-header-content">
        <h1 className="page-header-title">{title}</h1>
        <div className="page-header-breadcrumbs">
          <Link to="/" style={{ color: 'var(--blue-bright)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          {title}
        </div>
      </div>
    </div>
  )
}
