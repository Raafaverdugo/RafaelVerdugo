import PageLayout, { Breadcrumbs, ContactCta } from '../components/PageLayout.jsx'
import { projects } from '../content/projects.js'

export default function ProjectsIndex() {
  const published = projects.filter((project) => !project.pending)

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Proyectos' }]} />

      <header className="content-hero">
        <p className="eyebrow">Proyectos</p>
        <h1>Proyectos de diseño y desarrollo web</h1>
        <p className="content-lead">
          Una selección de webs y plataformas que he diseñado y desarrollado: qué necesitaba cada proyecto, qué construí y
          cómo lo enfoqué.
        </p>
      </header>

      <div className="project-grid">
        {published.map((project) => (
          <article className="project-card" key={project.slug}>
            <img src={project.image} alt={project.imageAlt} width="800" height="500" loading="lazy" decoding="async" />
            <div className="project-body">
              <p className="project-category">{project.category}</p>
              <h2 className="project-title">{project.name}</h2>
              <p>{project.summary}</p>
              <a href={project.path}>Ver caso de estudio →</a>
            </div>
          </article>
        ))}
        <article className="project-card">
          <div className="project-logo-wrap">
            <img
              src="/images/AppointDate.webp"
              alt="Logo de AppointDate, software de gestión de citas"
              width="677"
              height="369"
              loading="lazy"
            />
          </div>
          <div className="project-body">
            <p className="project-category">Software propio</p>
            <h2 className="project-title">AppointDate</h2>
            <p>Sistema de gestión de citas y reservas para negocios: agenda, clientes, facturación y portal de reserva online.</p>
            <a href="/AppointDate/">Conocer AppointDate →</a>
          </div>
        </article>
      </div>

      <ContactCta title="¿Quieres que tu proyecto sea el siguiente?" />
    </PageLayout>
  )
}
