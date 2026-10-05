import PageLayout, { Breadcrumbs, ContactCta } from '../components/PageLayout.jsx'
import { posts } from '../content/posts.js'
import { formatDate } from './dates.js'

export default function BlogIndex() {
  const published = posts.filter((post) => !post.pending)

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Blog' }]} />

      <header className="content-hero">
        <p className="eyebrow">Blog</p>
        <h1>Blog sobre diseño web, SEO y negocio digital</h1>
        <p className="content-lead">
          Guías prácticas para negocios y profesionales que quieren una web que funcione: cómo aparecer en Google, qué tipo de
          web necesitas y qué tener en cuenta antes de invertir.
        </p>
      </header>

      <div className="post-list">
        {published.map((post) => (
          <a className="post-card" key={post.slug} href={post.path}>
            <p className="post-meta">
              {formatDate(post.datePublished)} · {post.readingMinutes} min de lectura
            </p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <span className="post-card-more">Leer artículo →</span>
          </a>
        ))}
      </div>

      <ContactCta />
    </PageLayout>
  )
}
