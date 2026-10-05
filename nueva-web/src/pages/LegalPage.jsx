import PageLayout, { Breadcrumbs } from '../components/PageLayout.jsx'
import RichText from '../components/RichText.jsx'
import { formatDate } from './dates.js'

export default function LegalPage({ page }) {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: page.title }]} />
      <article className="prose">
        <header className="content-hero">
          <h1>{page.title}</h1>
          <p className="post-meta">Última actualización: {formatDate(page.updated)}</p>
        </header>
        <RichText blocks={page.blocks} />
      </article>
    </PageLayout>
  )
}
