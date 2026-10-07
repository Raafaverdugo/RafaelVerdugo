import CookieBanner from './CookieBanner.jsx'
import { setConsent } from './consent.js'
import '../pages/ContentPages.css'
import { services } from '../content/services.js'
import { projects } from '../content/projects.js'
import { legalPages } from '../content/legal.js'

const published = (items) => items.filter((item) => !item.pending)

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <strong>Rafael Verdugo</strong>
          <p>Diseño y desarrollo web freelance en Sevilla. Webs rápidas, cuidadas y preparadas para Google.</p>
          <a href="mailto:rafa@rafaelverdugo.com">rafa@rafaelverdugo.com</a>
          <a href="tel:+34621000706">621 000 706 · teléfono y WhatsApp</a>
          <a className="footer-contact-link" href="/contacto/">Pedir presupuesto →</a>
        </div>

        <nav aria-label="Servicios">
          <p className="footer-title">Servicios</p>
          <a href="/servicios/">Todos los servicios</a>
          {published(services).map((service) => (
            <a key={service.slug} href={service.path}>
              {service.navLabel}
            </a>
          ))}
          <a href="/AppointDate/">AppointDate</a>
        </nav>

        <nav aria-label="Proyectos y blog">
          <p className="footer-title">Trabajo</p>
          <a href="/proyectos/">Todos los proyectos</a>
          {published(projects).map((project) => (
            <a key={project.slug} href={project.path}>
              {project.name}
            </a>
          ))}
          <a href="/blog/">Blog</a>
        </nav>

        <nav aria-label="Legal">
          <p className="footer-title">Legal</p>
          {published(legalPages).map((page) => (
            <a key={page.slug} href={page.path}>
              {page.navLabel}
            </a>
          ))}
          <button type="button" className="footer-link-button" onClick={() => setConsent('unset')}>
            Configurar cookies
          </button>
        </nav>
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Rafael Verdugo · Sevilla, España
      </p>
      <CookieBanner />
    </footer>
  )
}
