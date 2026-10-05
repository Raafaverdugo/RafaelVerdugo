import PageLayout, { Breadcrumbs, ContactCta } from '../components/PageLayout.jsx'
import RichText from '../components/RichText.jsx'
import { formatDate } from './dates.js'

export default function BlogPost({ post }) {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: post.title }]} />

      <article className="prose prose-article">
        <header className="content-hero">
          <p className="eyebrow">Blog</p>
          <h1>{post.title}</h1>
          <p className="post-meta">
            Por <a href="/">Rafael Verdugo</a> · <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
            {' · '}
            {post.readingMinutes} min de lectura
          </p>
        </header>
        <RichText blocks={post.blocks} />
      </article>

      <aside className="author-box">
        <img src="/images/Yo.webp" alt="Rafael Verdugo" width="72" height="72" loading="lazy" />
        <div>
          <p className="author-name">Rafael Verdugo</p>
          <p>
            Diseñador y desarrollador web freelance en Sevilla. Construyo webs rápidas y preparadas para Google para negocios y
            profesionales. <a href="/diseno-web-sevilla/">Ver servicios</a>.
          </p>
        </div>
      </aside>

      <ContactCta />
    </PageLayout>
  )
}
