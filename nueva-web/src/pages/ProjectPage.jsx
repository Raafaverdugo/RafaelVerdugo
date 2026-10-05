import PageLayout, { Breadcrumbs, ContactCta } from '../components/PageLayout.jsx'
import RichText from '../components/RichText.jsx'

export default function ProjectPage({ project }) {
  return (
    <PageLayout>
      <Breadcrumbs
        items={[{ label: 'Inicio', href: '/' }, { label: 'Proyectos', href: '/proyectos/' }, { label: project.name }]}
      />

      <header className="content-hero">
        <p className="eyebrow">{project.category}</p>
        <h1>{project.name}</h1>
        <p className="content-lead">{project.summary}</p>
      </header>

      <figure className="case-figure">
        <img src={project.image} alt={project.imageAlt} width="800" height="450" decoding="async" />
      </figure>

      <dl className="case-facts">
        {project.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <article className="prose">
        <RichText blocks={project.blocks} />
        <p>
          <a className="button button-secondary" href={project.url} target="_blank" rel="noreferrer">
            Visitar la web de {project.name}
          </a>
        </p>
      </article>

      <ContactCta />
    </PageLayout>
  )
}
