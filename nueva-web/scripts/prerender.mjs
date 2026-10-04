// Genera HTML estático de cada página tras `vite build` para que Google y los
// buscadores con IA (que no ejecutan JavaScript) vean el contenido completo.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/

const appointDateSeo = `
    <title>AppointDate | Software de gestión de citas y reservas para negocios</title>
    <meta
      name="description"
      content="AppointDate es un software de gestión de citas y reservas para negocios: agenda, clientes, empleados, facturación y portal de reserva online 24/7. Consulta planes y precios."
    />
    <link rel="canonical" href="https://rafaelverdugo.com/AppointDate/" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <meta name="author" content="Rafael Verdugo" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_ES" />
    <meta property="og:site_name" content="Rafael Verdugo" />
    <meta property="og:url" content="https://rafaelverdugo.com/AppointDate/" />
    <meta property="og:title" content="AppointDate | Software de gestión de citas para negocios" />
    <meta
      property="og:description"
      content="Agenda, clientes, facturación y reservas online en un solo sistema. Pensado para negocios que trabajan con cita previa."
    />
    <meta property="og:image" content="https://rafaelverdugo.com/images/AppointDate.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="AppointDate | Software de gestión de citas para negocios" />
    <meta
      name="twitter:description"
      content="Agenda, clientes, facturación y reservas online en un solo sistema."
    />
    <meta name="twitter:image" content="https://rafaelverdugo.com/images/AppointDate.png" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "SoftwareApplication",
            "name": "AppointDate",
            "url": "https://rafaelverdugo.com/AppointDate/",
            "image": "https://rafaelverdugo.com/images/AppointDate.png",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "inLanguage": "es-ES",
            "description": "Sistema integral de gestión de reservas y citas para negocios: agenda, clientes, agenda de empleados, facturación automática y portal de reserva público.",
            "author": { "@id": "https://rafaelverdugo.com/#person" },
            "publisher": { "@id": "https://rafaelverdugo.com/#person" }
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://rafaelverdugo.com/" },
              { "@type": "ListItem", "position": 2, "name": "AppointDate", "item": "https://rafaelverdugo.com/AppointDate/" }
            ]
          }
        ]
      }
    </script>
    `

const pages = [
  { url: '/', file: 'index.html' },
  // Servida en /AppointDate/ mediante AppointDate/.htaccess en el hosting
  { url: '/AppointDate/', file: 'appointdate.html', seo: appointDateSeo },
]

for (const page of pages) {
  const appHtml = render(page.url)
  if (!appHtml.includes('<h1')) throw new Error(`El pre-renderizado de ${page.url} no contiene <h1>`)
  let html = template.replace('<!--app-html-->', appHtml)
  if (page.seo) html = html.replace(SEO_BLOCK, `<!--seo:start-->${page.seo}<!--seo:end-->`)
  fs.writeFileSync(path.join(dist, page.file), html)
  console.log(`prerender: ${page.url} -> dist/${page.file} (${html.length} bytes)`)
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
