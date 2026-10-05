import PageLayout, { Breadcrumbs, ContactCta } from '../components/PageLayout.jsx'
import { services, extraServices } from '../content/services.js'

const steps = [
  { num: '01', title: 'Definimos enfoque', desc: 'Qué quieres conseguir, para quién y qué debe transmitir el proyecto.' },
  { num: '02', title: 'Propuesta cerrada', desc: 'Te paso qué incluye, el plazo y el precio antes de empezar.' },
  { num: '03', title: 'Diseño y desarrollo', desc: 'Lo construyo y te lo enseño en una dirección de pruebas para que lo revises.' },
  { num: '04', title: 'Lanzamiento y soporte', desc: 'Lo publico, lo dejo preparado para Google y sigo disponible después.' },
]

export default function ServicesIndex() {
  const published = services.filter((service) => !service.pending)

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Servicios' }]} />

      <header className="content-hero">
        <p className="eyebrow">Servicios</p>
        <h1>Servicios de diseño web, desarrollo y SEO en Sevilla</h1>
        <p className="content-lead">
          Webs, tiendas online, landing pages y software a medida para negocios y profesionales. Todo hecho por mí, con trato
          directo, precios claros y preparado desde el primer día para aparecer en Google.
        </p>
      </header>

      <div className="service-grid services-index-grid">
        {published.map((service) => (
          <article className="service-card" key={service.slug}>
            <h2>{service.navLabel}</h2>
            <p>{service.seo.description}</p>
            {service.priceFrom ? <p className="service-card-price">Desde {service.priceFrom} €</p> : null}
            <a className="card-link" href={service.path}>
              Ver {service.navLabel.toLowerCase()} →
            </a>
          </article>
        ))}
        {extraServices.map((service) => (
          <article className="service-card" key={service.name}>
            <h2>{service.name}</h2>
            <p>{service.text}</p>
            <p className="service-card-price">Desde {service.priceFrom} €</p>
            <a className="card-link" href={service.href}>
              {service.linkLabel} →
            </a>
          </article>
        ))}
      </div>

      <p className="services-index-note">
        Precios de partida en euros. Cada proyecto lleva además una cuota mensual de mantenimiento según lo que necesite.{' '}
        <a href="/blog/cuanto-cuesta-una-pagina-web-en-sevilla/">Ver cómo funcionan los precios</a>.
      </p>

      <section className="content-section">
        <h2 className="content-section-title">Cómo trabajo</h2>
        <div className="process-grid">
          {steps.map((step) => (
            <article key={step.num}>
              <span>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactCta />
    </PageLayout>
  )
}
