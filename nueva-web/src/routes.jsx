// Registro único de páginas: lo usan el router (cliente y pre-render), el
// pre-renderizado para el <head> y el sitemap. Las páginas `pending` no se publican.
import App from './App.jsx'
import AppointDate from './pages/AppointDate.jsx'
import ServicePage from './pages/ServicePage.jsx'
import ServicesIndex from './pages/ServicesIndex.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ProjectsIndex from './pages/ProjectsIndex.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import BlogIndex from './pages/BlogIndex.jsx'
import BlogPost from './pages/BlogPost.jsx'
import LegalPage from './pages/LegalPage.jsx'
import { services, extraServices } from './content/services.js'
import { projects } from './content/projects.js'
import { posts } from './content/posts.js'
import { legalPages } from './content/legal.js'
import { SITE, PERSON_ID, BUSINESS_ID, breadcrumbSchema, buildHead } from './seo.js'

const author = { '@type': 'Person', '@id': PERSON_ID, name: 'Rafael Verdugo', url: `${SITE}/` }
const fileFor = (path) => `${path.replace(/^\//, '')}index.html`
const published = (items) => items.filter((item) => !item.pending)

export const routes = [
  // La portada usa el <head> de index.html tal cual
  { path: '/', file: 'index.html', element: <App />, lastmod: '2026-10-05' },
  {
    path: '/AppointDate/',
    // /AppointDate/ es una carpeta del SaaS en el hosting: su .htaccess sirve este archivo
    file: 'appointdate.html',
    element: <AppointDate />,
    lastmod: '2026-10-04',
    head: () =>
      buildHead({
        title: 'AppointDate | Software de gestión de citas y reservas para negocios',
        description:
          'AppointDate es un software de gestión de citas y reservas para negocios: agenda, clientes, empleados, facturación y portal de reserva online 24/7. Consulta planes y precios.',
        path: '/AppointDate/',
        ogImage: '/images/AppointDate.png',
        schema: [
          {
            '@type': 'SoftwareApplication',
            name: 'AppointDate',
            url: `${SITE}/AppointDate/`,
            image: `${SITE}/images/AppointDate.png`,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            inLanguage: 'es-ES',
            description:
              'Sistema integral de gestión de reservas y citas para negocios: agenda, clientes, agenda de empleados, facturación automática y portal de reserva público.',
            author,
            publisher: author,
          },
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'AppointDate', path: '/AppointDate/' },
          ]),
        ],
      }),
  },

  {
    path: '/servicios/',
    file: fileFor('/servicios/'),
    element: <ServicesIndex />,
    lastmod: '2026-10-05',
    head: () =>
      buildHead({
        title: 'Servicios de diseño web, tiendas online y SEO en Sevilla | Rafael Verdugo',
        description:
          'Diseño web, tiendas online, landing pages, SEO técnico, software a medida y automatizaciones en Sevilla. Precios de partida claros y trato directo con un desarrollador freelance.',
        path: '/servicios/',
        schema: [
          {
            '@type': 'OfferCatalog',
            name: 'Servicios de Rafael Verdugo',
            url: `${SITE}/servicios/`,
            itemListElement: [
              ...published(services).map((service) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: service.navLabel, url: `${SITE}${service.path}` },
                ...(service.priceFrom
                  ? { priceSpecification: { '@type': 'PriceSpecification', minPrice: service.priceFrom, priceCurrency: 'EUR' } }
                  : {}),
              })),
              ...extraServices.map((service) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: service.name },
                priceSpecification: { '@type': 'PriceSpecification', minPrice: service.priceFrom, priceCurrency: 'EUR' },
              })),
            ],
          },
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Servicios', path: '/servicios/' },
          ]),
        ],
      }),
  },
  ...published(services).map((service) => ({
    path: service.path,
    file: fileFor(service.path),
    element: <ServicePage service={service} />,
    lastmod: '2026-10-05',
    head: () =>
      buildHead({
        ...service.seo,
        path: service.path,
        schema: [
          {
            '@type': 'Service',
            name: service.navLabel,
            serviceType: service.serviceType,
            description: service.seo.description,
            url: `${SITE}${service.path}`,
            provider: { '@type': 'ProfessionalService', '@id': BUSINESS_ID, name: 'Rafael Verdugo · Diseño y desarrollo web', url: `${SITE}/` },
            areaServed: [
              { '@type': 'City', name: 'Sevilla' },
              { '@type': 'Country', name: 'España' },
            ],
          },
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Servicios', path: '/servicios/' },
            { name: service.navLabel, path: service.path },
          ]),
        ],
      }),
  })),

  {
    path: '/proyectos/',
    file: fileFor('/proyectos/'),
    element: <ProjectsIndex />,
    lastmod: '2026-10-05',
    head: () =>
      buildHead({
        title: 'Proyectos de diseño y desarrollo web | Rafael Verdugo',
        description:
          'Proyectos de diseño y desarrollo web de Rafael Verdugo: plataformas a medida, webs informativas y tiendas online con casos de estudio detallados.',
        path: '/proyectos/',
        schema: [
          {
            '@type': 'CollectionPage',
            name: 'Proyectos de diseño y desarrollo web',
            url: `${SITE}/proyectos/`,
            author,
          },
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Proyectos', path: '/proyectos/' },
          ]),
        ],
      }),
  },
  ...published(projects).map((project) => ({
    path: project.path,
    file: fileFor(project.path),
    element: <ProjectPage project={project} />,
    lastmod: '2026-10-05',
    head: () =>
      buildHead({
        ...project.seo,
        path: project.path,
        ogImage: project.image,
        ogType: 'article',
        schema: [
          {
            '@type': 'CreativeWork',
            name: project.name,
            description: project.summary,
            url: `${SITE}${project.path}`,
            image: `${SITE}${project.image}`,
            creator: author,
            sameAs: project.url,
          },
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Proyectos', path: '/proyectos/' },
            { name: project.name, path: project.path },
          ]),
        ],
      }),
  })),

  {
    path: '/blog/',
    file: fileFor('/blog/'),
    element: <BlogIndex />,
    lastmod: '2026-10-05',
    head: () =>
      buildHead({
        title: 'Blog de diseño web y SEO para negocios | Rafael Verdugo',
        description:
          'Guías prácticas sobre diseño web, SEO y presencia online para negocios y profesionales: cómo aparecer en Google, qué web necesitas y qué tener en cuenta antes de invertir.',
        path: '/blog/',
        schema: [
          { '@type': 'Blog', name: 'Blog de Rafael Verdugo', url: `${SITE}/blog/`, inLanguage: 'es-ES', author },
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Blog', path: '/blog/' },
          ]),
        ],
      }),
  },
  ...published(posts).map((post) => ({
    path: post.path,
    file: fileFor(post.path),
    element: <BlogPost post={post} />,
    lastmod: post.dateModified || post.datePublished,
    head: () =>
      buildHead({
        ...post.seo,
        path: post.path,
        ogType: 'article',
        schema: [
          {
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.seo.description,
            url: `${SITE}${post.path}`,
            mainEntityOfPage: `${SITE}${post.path}`,
            datePublished: post.datePublished,
            dateModified: post.dateModified || post.datePublished,
            inLanguage: 'es-ES',
            image: `${SITE}/images/og-rafael-verdugo.jpg`,
            author,
            publisher: author,
          },
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Blog', path: '/blog/' },
            { name: post.title, path: post.path },
          ]),
        ],
      }),
  })),

  {
    path: '/contacto/',
    file: fileFor('/contacto/'),
    element: <ContactPage />,
    lastmod: '2026-10-05',
    head: () =>
      buildHead({
        title: 'Contacto | Pide presupuesto para tu web | Rafael Verdugo',
        description:
          'Cuéntame tu proyecto y te respondo con una propuesta cerrada: qué incluye, plazo y precio. Diseño web, tiendas online y software a medida en Sevilla. rafa@rafaelverdugo.com',
        path: '/contacto/',
        schema: [
          {
            '@type': 'ContactPage',
            name: 'Contacto',
            url: `${SITE}/contacto/`,
            about: { '@type': 'ProfessionalService', '@id': BUSINESS_ID, name: 'Rafael Verdugo · Diseño y desarrollo web', email: 'rafa@rafaelverdugo.com', telephone: '+34621000706' },
          },
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Contacto', path: '/contacto/' },
          ]),
        ],
      }),
  },

  ...published(legalPages).map((page) => ({
    path: page.path,
    file: fileFor(page.path),
    element: <LegalPage page={page} />,
    sitemap: false,
    head: () => buildHead({ ...page.seo, path: page.path, noindex: true }),
  })),
]
