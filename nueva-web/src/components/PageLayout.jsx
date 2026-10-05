import SiteHeader from './SiteHeader.jsx'
import SiteFooter from './SiteFooter.jsx'
import '../App.css'
import '../pages/ContentPages.css'

export function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Migas de pan">
      {items.map((item, i) => (
        <span key={item.label}>
          {i > 0 ? <span aria-hidden="true"> / </span> : null}
          {item.href ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  )
}

export function ContactCta({ title = '¿Hablamos de tu proyecto?', text }) {
  return (
    <section className="content-cta">
      <h2>{title}</h2>
      <p>
        {text ||
          'Cuéntame qué necesitas y te respondo con una propuesta clara: qué haría, en cuánto tiempo y cuánto costaría.'}
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="/contacto/">
          Pedir propuesta
        </a>
        <a className="button button-secondary" href="mailto:rafa@rafaelverdugo.com">
          rafa@rafaelverdugo.com
        </a>
      </div>
    </section>
  )
}

export default function PageLayout({ children }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="content-main">{children}</main>
      <SiteFooter />
    </div>
  )
}
