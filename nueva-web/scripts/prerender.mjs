// Genera HTML estático de cada página tras `vite build` para que Google y los
// buscadores con IA (que no ejecutan JavaScript) vean el contenido completo.
// También genera sitemap.xml a partir del mismo registro de rutas (src/routes.jsx).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const { render, routes } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)

const SITE = 'https://rafaelverdugo.com'
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/

for (const route of routes) {
  const appHtml = render(route.path)
  if (!appHtml.includes('<h1')) throw new Error(`El pre-renderizado de ${route.path} no contiene <h1>`)

  let html = template.replace('<!--app-html-->', appHtml)
  if (route.head) html = html.replace(SEO_BLOCK, `<!--seo:start-->${route.head()}<!--seo:end-->`)

  // Nunca publicar una página con datos sin rellenar
  if (html.includes('[[PENDIENTE')) throw new Error(`${route.path} contiene texto [[PENDIENTE]]`)

  const out = path.join(dist, route.file)
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
  console.log(`prerender: ${route.path} -> dist/${route.file} (${html.length} bytes)`)
}

const urls = routes
  .filter((route) => route.sitemap !== false)
  .map((route) => `  <url>\n    <loc>${SITE}${route.path}</loc>\n    <lastmod>${route.lastmod}</lastmod>\n  </url>`)
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
)
console.log(`sitemap: ${urls.length} URLs`)

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
