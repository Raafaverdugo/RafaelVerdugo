import PageLayout, { Breadcrumbs, ContactCta } from '../components/PageLayout.jsx'
import RichText, { Inline } from '../components/RichText.jsx'
import { projects } from '../content/projects.js'
import { posts } from '../content/posts.js'

const isPublished = (item) => item && !item.pending

export default function ServicePage({ service }) {
  const relatedProjects = service.relatedProjects.map((slug) => projects.find((p) => p.slug === slug)).filter(isPublished)
  const relatedPosts = service.relatedPosts.map((slug) => posts.find((p) => p.slug === slug)).filter(isPublished)

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Servicios' }, { label: service.navLabel }]} />

      <header className="content-hero">
        <p className="eyebrow">{service.eyebrow}</p>
        <h1>{service.h1}</h1>
        <p className="content-lead">{service.intro}</p>
        {service.price ? (
          <p className="service-price">
            <strong>{service.price}</strong> + cuota mensual de mantenimiento según el proyecto.{' '}
            <a href="/blog/cuanto-cuesta-una-pagina-web-en-sevilla/">Ver precios</a>
          </p>
        ) : null}
        <div className="hero-actions">
          <a className="button button-primary" href="/#contacto">
            Pedir propuesta
          </a>
          <a className="button button-secondary" href="/proyectos/">
            Ver proyectos
          </a>
        </div>
      </header>

      <div className="highlight-grid">
        {service.highlights.map((item) => (
          <article className="service-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <article className="prose">
        <RichText blocks={service.blocks} />
      </article>

      {relatedProjects.length ? (
        <section className="content-section">
          <h2 className="content-section-title">Proyectos relacionados</h2>
          <div className="project-grid">
            {relatedProjects.map((project) => (
              <article className="project-card" key={project.slug}>
                <img src={project.image} alt={project.imageAlt} width="800" height="500" loading="lazy" decoding="async" />
                <div className="project-body">
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <a href={project.path}>Ver caso de estudio →</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="content-section prose">
        <h2>Preguntas frecuentes</h2>
        {service.faqs.map((faq) => (
          <details className="faq" key={faq.q}>
            <summary>{faq.q}</summary>
            <p>
              <Inline text={faq.a} />
            </p>
          </details>
        ))}
      </section>

      {relatedPosts.length ? (
        <section className="content-section">
          <h2 className="content-section-title">Te puede interesar</h2>
          <div className="post-list">
            {relatedPosts.map((post) => (
              <a className="post-card" key={post.slug} href={post.path}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <ContactCta />
    </PageLayout>
  )
}
