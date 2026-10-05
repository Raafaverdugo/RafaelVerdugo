// Genera el bloque <head> de cada página pre-renderizada (solo se usa en el build).

export const SITE = 'https://rafaelverdugo.com'
export const PERSON_ID = `${SITE}/#person`
export const BUSINESS_ID = `${SITE}/#business`
const DEFAULT_OG = `${SITE}/images/og-rafael-verdugo.jpg`

const escapeAttr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function breadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  }
}

export function buildHead({ title, description, path, ogImage, ogType = 'website', noindex = false, schema = [] }) {
  const url = `${SITE}${path}`
  const image = ogImage ? `${SITE}${ogImage}` : DEFAULT_OG
  const t = escapeAttr(title)
  const d = escapeAttr(description)
  const jsonLd = schema.length
    ? `\n    <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': schema }).replace(/</g, '\\u003c')}</script>`
    : ''

  return `
    <title>${t}</title>
    <meta name="description" content="${d}" />
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="${noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large'}" />
    <meta name="author" content="Rafael Verdugo" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:locale" content="es_ES" />
    <meta property="og:site_name" content="Rafael Verdugo" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${t}" />
    <meta property="og:description" content="${d}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${t}" />
    <meta name="twitter:description" content="${d}" />
    <meta name="twitter:image" content="${image}" />${jsonLd}
    `
}
