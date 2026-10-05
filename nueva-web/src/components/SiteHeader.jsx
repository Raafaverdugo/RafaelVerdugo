import { useState } from 'react'

const navItems = [
  { href: '/diseno-web-sevilla/', label: 'Servicios' },
  { href: '/proyectos/', label: 'Proyectos' },
  { href: '/blog/', label: 'Blog' },
  { href: '/#contacto', label: 'Contacto' },
]

// Cabecera de las páginas interiores (la portada mantiene la suya con anclas y selector de idioma)
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Ir al inicio">
        <img className="brand-photo" src="/images/Yo.webp" alt="Rafael Verdugo" width="46" height="46" />
        <span className="brand-copy">
          <strong>Rafael Verdugo</strong>
          <small>Diseño y desarrollo web en Sevilla</small>
        </span>
      </a>

      <nav className="nav" aria-label="Principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="topbar-right">
        <a className="nav-cta" href="/#contacto">
          Solicitar propuesta
        </a>
      </div>

      <button
        type="button"
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a className="button button-primary mobile-menu-cta" href="/#contacto">
          Solicitar propuesta
        </a>
      </div>
    </header>
  )
}
