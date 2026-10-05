import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { useScrollReveal, useStaggerReveal } from './hooks/useScrollReveal'
import SiteFooter from './components/SiteFooter.jsx'

// ── Traducciones ──────────────────────────────────────────────────────────────
const translations = {
  es: {
    brandSubtitle: 'Emprendedor | Desarrollo web',
    nav: {
      servicios: 'Servicios',
      proyectos: 'Proyectos',
      blog: 'Blog',
      contacto: 'Contacto',
      cta: 'Solicitar propuesta',
    },
    hero: {
      eyebrow: 'Desarrollador web freelance en Sevilla',
      h1: 'Diseño web en Sevilla con una estética potente y una base técnica seria.',
      text: 'Creo páginas pensadas para vender mejor tu servicio, transmitir más nivel de marca y cargar rápido desde el primer clic. Todo en una web clara, elegante y lista para crecer contigo.',
      btnPrimary: 'Empezar proyecto',
      btnSecondary: 'Ver trabajos',
    },
    metrics: [
      { value: 'Webs a medida', label: 'Diseño, código y estrategia pensados para convertir' },
      { value: 'SEO técnico', label: 'Base limpia para indexar mejor y cargar rápido' },
      { value: 'Soporte real', label: 'Acompañamiento antes, durante y después del lanzamiento' },
    ],
    heroPanel: {
      intro: 'Trabajo contigo para que tu web no parezca una plantilla más.',
      items: ['Diseño visual más premium', 'Contenido ordenado para vender mejor', 'SEO técnico listo para indexación'],
    },
    services: {
      saberMas: 'Saber más',
      verTodos: 'Ver todos los servicios y precios',
      eyebrow: 'Servicios',
      h2: 'Una web atractiva no basta si no está construida con criterio.',
      p: 'La idea es combinar diseño, estructura y rendimiento para que el resultado tenga presencia y también sirva para captar oportunidades reales.',
      cards: [
        { href: '/diseno-web-sevilla/', title: 'Web corporativa con presencia seria', description: 'Diseño y desarrollo de webs rápidas, elegantes y preparadas para transmitir confianza desde la primera visita.' },
        { href: '/landing-pages/', title: 'Landing pages que convierten', description: 'Páginas enfocadas en captar contactos, vender un servicio o validar una oferta sin ruido innecesario.' },
        { href: '/tiendas-online-sevilla/', title: 'Tiendas online y funnels', description: 'E-commerce y páginas de venta con una estructura clara, rendimiento sólido y foco en la conversión.' },
        { href: '/seo-sevilla/', title: 'Mejoras SEO y rendimiento', description: 'Optimización de estructura, metadatos, velocidad, imágenes e indexación para que Google entienda mejor tu proyecto.' },
      ],
    },
    portfolio: {
      eyebrow: 'Selección de proyectos',
      h2: 'Trabajos reales con enfoques distintos, pero el mismo nivel de detalle.',
      verProyecto: 'Ver web',
      verCaso: 'Ver caso de estudio',
      verTodos: 'Ver todos los proyectos',
    },
    softwares: {
      verMas: 'Ver software a medida',
      eyebrow: 'Softwares',
      h2: 'Herramientas que construyo para digitalizar negocios.',
      p: 'Además de webs a medida, desarrollo soluciones de software propias orientadas a resolver problemas reales de gestión.',
      appointdate: {
        description: 'Sistema integral de gestión de reservas y citas para negocios. Agenda, clientes, facturación y portal de reserva público, todo en uno.',
        cta: 'Saber más',
      },
    },
    projects: [
      { title: 'I.E.S. Margarita Salas', image: '/images/Cap_MargaritaSalas-800.webp', description: 'Sitio informativo para un centro educativo con arquitectura clara, navegación sencilla y foco en la matriculación.', url: 'https://ies-margarita-salas.vercel.app/', caseStudy: '/proyectos/ies-margarita-salas/' },
      { title: 'Licencia de Armas Fácil', image: '/images/Cap_licencia-800.webp', description: 'Plataforma de formación y venta online con una propuesta visual directa y una experiencia pensada para convertir.', url: 'https://licenciadearmasfacil.es/', caseStudy: '/proyectos/licencia-de-armas-facil/' },
      { title: 'FXPro Trading Course', image: '/images/Cap_fxpro-800.webp', description: 'Proyecto comercial para un infoproducto con una estructura clara para presentar valor, autoridad y llamada a la acción.', url: 'https://programafxpro.infinityfreeapp.com/' },
      { title: 'The Shelter', image: '/images/Cap_TheShelter-800.webp', description: 'Plataforma completa para protectora con gestión de animales, solicitudes y panel de administración.', url: 'https://theshelter.es/', caseStudy: '/proyectos/the-shelter/' },
    ],
    proceso: {
      eyebrow: 'Proceso',
      cta: 'Empezar un proyecto',
      h2: 'Menos vueltas, más claridad.',
      steps: [
        { num: '01', title: 'Definimos enfoque', desc: 'Qué quieres vender, a quién y qué sensación debe transmitir la web.' },
        { num: '02', title: 'Diseño y desarrollo', desc: 'Construyo la propuesta visual y técnica en una base rápida y preparada para publicar.' },
        { num: '03', title: 'SEO e indexación', desc: 'Dejo la web con metadatos, sitemap, robots y estructura limpia para Google.' },
        { num: '04', title: 'Lanzamiento', desc: 'Te la entrego lista para subir a tu hosting y con el formulario conectado.' },
      ],
    },
    about: {
      eyebrow: 'Perfil',
      h2: 'Desarrollo web con mirada de negocio y gusto por los detalles visuales.',
      p: 'No busco hacer una web genérica. Busco que cuando alguien entre, note que detrás hay una marca cuidada, una estructura pensada y una persona que sabe lo que hace.',
      stackLabel: 'Tecnologías y enfoque',
    },
    quotes: [
      { quote: 'Trabajar conmigo significa tener a alguien pendiente de que la web no solo se vea bien, sino que funcione para el negocio.', author: 'Enfoque de trabajo' },
      { quote: 'Me gusta entregar una web cuidada, rápida y fácil de mantener, sin depender de soluciones enrevesadas para tareas simples.', author: 'Forma de construir' },
    ],
    contact: {
      eyebrow: 'Contacto',
      ctaForm: 'Ir al formulario de contacto',
      h2: 'Cuéntame qué quieres construir y te respondo con una propuesta real.',
      p: 'Escríbeme por el formulario o directamente por email y te respondo con una propuesta adaptada a tu proyecto, sin compromiso.',
    },
  },
  en: {
    brandSubtitle: 'Entrepreneur | Web development',
    nav: {
      servicios: 'Services',
      proyectos: 'Projects',
      blog: 'Blog',
      contacto: 'Contact',
      cta: 'Request a proposal',
    },
    hero: {
      eyebrow: 'Freelance web developer in Seville',
      h1: 'I build websites with strong aesthetics and a solid technical foundation.',
      text: 'I create pages designed to sell your service better, elevate your brand, and load fast from the first click. All in a clean, elegant website ready to grow with you.',
      btnPrimary: 'Start a project',
      btnSecondary: 'See work',
    },
    metrics: [
      { value: 'Custom websites', label: 'Design, code and strategy built to convert' },
      { value: 'Technical SEO', label: 'Clean foundation for better indexing and fast loading' },
      { value: 'Real support', label: 'Guidance before, during and after launch' },
    ],
    heroPanel: {
      intro: "I work with you so your website doesn't look like just another template.",
      items: ['More premium visual design', 'Structured content to sell better', 'Technical SEO ready for indexing'],
    },
    services: {
      saberMas: 'Learn more',
      verTodos: 'See all services and prices',
      eyebrow: 'Services',
      h2: "An attractive website isn't enough if it's not built with purpose.",
      p: 'The goal is to combine design, structure and performance so the result has a strong presence and also works to capture real opportunities.',
      cards: [
        { href: '/diseno-web-sevilla/', title: 'Corporate website with a serious presence', description: 'Design and development of fast, elegant websites built to convey trust from the very first visit.' },
        { href: '/landing-pages/', title: 'Landing pages that convert', description: 'Pages focused on capturing leads, selling a service or validating an offer without unnecessary noise.' },
        { href: '/tiendas-online-sevilla/', title: 'Online stores and funnels', description: 'E-commerce and sales pages with a clear structure, solid performance and a focus on conversion.' },
        { href: '/seo-sevilla/', title: 'SEO and performance improvements', description: 'Optimization of structure, metadata, speed, images and indexing so Google understands your project better.' },
      ],
    },
    portfolio: {
      eyebrow: 'Selected projects',
      h2: 'Real work with different approaches, but the same level of detail.',
      verProyecto: 'View site',
      verCaso: 'Read case study',
      verTodos: 'See all projects',
    },
    softwares: {
      verMas: 'See custom software',
      eyebrow: 'Software',
      h2: 'Tools I build to help businesses go digital.',
      p: 'Beyond custom websites, I develop my own software solutions designed to solve real management problems.',
      appointdate: {
        description: 'A complete appointment and booking management system for businesses. Schedule, clients, billing and a public booking portal, all in one.',
        cta: 'Learn more',
      },
    },
    projects: [
      { title: 'I.E.S. Margarita Salas', image: '/images/Cap_MargaritaSalas-800.webp', description: 'Informational site for a school with a clear architecture, simple navigation and a focus on enrollment.', url: 'https://ies-margarita-salas.vercel.app/', caseStudy: '/proyectos/ies-margarita-salas/' },
      { title: 'Licencia de Armas Fácil', image: '/images/Cap_licencia-800.webp', description: 'Online training and sales platform with a direct visual proposal and an experience designed to convert.', url: 'https://licenciadearmasfacil.es/', caseStudy: '/proyectos/licencia-de-armas-facil/' },
      { title: 'FXPro Trading Course', image: '/images/Cap_fxpro-800.webp', description: 'Commercial project for a digital product with a clear structure to present value, authority and a call to action.', url: 'https://programafxpro.infinityfreeapp.com/' },
      { title: 'The Shelter', image: '/images/Cap_TheShelter-800.webp', description: 'Full platform for an animal shelter with animal management, applications and an admin panel.', url: 'https://theshelter.es/', caseStudy: '/proyectos/the-shelter/' },
    ],
    proceso: {
      eyebrow: 'Process',
      cta: 'Start a project',
      h2: 'Less back and forth, more clarity.',
      steps: [
        { num: '01', title: 'We define the approach', desc: 'What you want to sell, who to and what feeling the website should convey.' },
        { num: '02', title: 'Design and development', desc: 'I build the visual and technical proposal on a fast, publish-ready foundation.' },
        { num: '03', title: 'SEO and indexing', desc: 'I deliver the site with metadata, sitemap, robots and a clean structure for Google.' },
        { num: '04', title: 'Launch', desc: 'I hand it over ready to upload to your hosting with the contact form connected.' },
      ],
    },
    about: {
      eyebrow: 'Profile',
      h2: 'Web development with a business mindset and an eye for visual detail.',
      p: "I'm not looking to build a generic website. I want people who visit to notice there's a carefully crafted brand, a well-thought-out structure, and someone who knows what they're doing.",
      stackLabel: 'Technologies and approach',
    },
    quotes: [
      { quote: 'Working with me means having someone making sure the website not only looks good, but actually works for the business.', author: 'Work approach' },
      { quote: 'I like delivering a polished, fast and easy-to-maintain website, without relying on convoluted solutions for simple tasks.', author: 'How I build' },
    ],
    contact: {
      eyebrow: 'Contact',
      ctaForm: 'Go to the contact form',
      h2: "Tell me what you want to build and I'll get back to you with a real proposal.",
      p: 'Write to me through the form or directly by email and I will reply with a proposal tailored to your project, with no commitment.',
    },
  },
}

const stack = ['React', 'JavaScript', 'PHP', 'HTML', 'CSS', 'SEO On-Page', 'Vite', 'Responsive Design']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('es')

  const t = translations[lang]

  useEffect(() => {
    document.title = 'Diseño web en Sevilla | Rafael Verdugo, desarrollador web freelance'
  }, [])

  // ── Scroll reveal refs ──────────────────────────────
  const heroCopyRef      = useScrollReveal()
  const heroVisualRef    = useScrollReveal()
  const metricsGridRef   = useStaggerReveal(100)
  const servicesTitleRef = useScrollReveal()
  const servicesGridRef  = useStaggerReveal(120)
  const portfolioTitleRef  = useScrollReveal()
  const projectsGridRef    = useStaggerReveal(130)
  const softwaresTitleRef  = useScrollReveal()
  const softwaresGridRef   = useStaggerReveal(120)
  const processTitleRef    = useScrollReveal()
  const processGridRef     = useStaggerReveal(110)
  const aboutCopyRef     = useScrollReveal()
  const stackPanelRef    = useScrollReveal()
  const quotesRef        = useStaggerReveal(150)
  const contactTitleRef  = useScrollReveal()
  const contactLayoutRef = useScrollReveal()

  // El menú lleva a páginas; la portada se lee haciendo scroll y cada sección enlaza a la suya
  const navItems = [
    { href: '/servicios/', label: t.nav.servicios },
    { href: '/proyectos/', label: t.nav.proyectos },
    { href: '/blog/',      label: t.nav.blog },
    { href: '/contacto/',  label: t.nav.contacto },
  ]

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio" onClick={() => setMenuOpen(false)}>
          <img className="brand-photo" src="/images/Yo.webp" alt="Rafael Verdugo" width="46" height="46" />
          <span className="brand-copy">
            <strong>Rafael Verdugo</strong>
            <small>{t.brandSubtitle}</small>
          </span>
        </a>

        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-right">
          {/* Selector de idioma */}
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            aria-label="Cambiar idioma"
          >
            <span className={lang === 'es' ? 'lang-active' : ''}>ES</span>
            <span className="lang-sep">|</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          </button>

          <a className="nav-cta" href="/contacto/">
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button-primary mobile-menu-cta" href="/contacto/" onClick={() => setMenuOpen(false)}>
            {t.nav.cta}
          </a>
          {/* Lang toggle mobile */}
          <button
            type="button"
            className="lang-toggle lang-toggle-mobile"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          >
            <span className={lang === 'es' ? 'lang-active' : ''}>ES</span>
            <span className="lang-sep">|</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          </button>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="hero-section" id="inicio">
          <div ref={heroCopyRef} className="hero-copy reveal-left">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.h1}</h1>
            <p className="hero-text">{t.hero.text}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="/contacto/">
                {t.hero.btnPrimary}
              </a>
              <a className="button button-secondary" href="/proyectos/">
                {t.hero.btnSecondary}
              </a>
            </div>

            <div ref={metricsGridRef} className="metric-grid stagger-children">
              {t.metrics.map((item) => (
                <article className="metric-card" key={item.value}>
                  <h2>{item.value}</h2>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div ref={heroVisualRef} className="hero-visual reveal-right">
            <div className="hero-image-wrap">
              <img
                src="/images/Yo.webp"
                alt="Rafael Verdugo, desarrollador web freelance en Sevilla"
                className="hero-image"
                width="967"
                height="1290"
                fetchPriority="high"
              />
            </div>

            <div className="hero-panel">
              <p>{t.heroPanel.intro}</p>
              <ul>
                {t.heroPanel.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Servicios ── */}
        <section className="section intro-section" id="servicios">
          <div ref={servicesTitleRef} className="section-heading reveal">
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2>{t.services.h2}</h2>
            <p>{t.services.p}</p>
          </div>

          <div ref={servicesGridRef} className="service-grid stagger-children">
            {t.services.cards.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="card-link" href={service.href}>
                  {t.services.saberMas} →
                </a>
              </article>
            ))}
          </div>

          <p className="section-more">
            <a href="/servicios/">{t.services.verTodos} →</a>
          </p>
        </section>

        {/* ── Portfolio ── */}
        <section className="section portfolio-section" id="proyectos">
          <div ref={portfolioTitleRef} className="section-heading reveal">
            <p className="eyebrow">{t.portfolio.eyebrow}</p>
            <h2>{t.portfolio.h2}</h2>
          </div>

          <div ref={projectsGridRef} className="project-grid stagger-children">
            {t.projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img
                  src={project.image}
                  alt={`Captura de la web ${project.title} diseñada por Rafael Verdugo`}
                  width="800"
                  height="500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    {project.caseStudy ? <a href={project.caseStudy}>{t.portfolio.verCaso}</a> : null}
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {t.portfolio.verProyecto}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <p className="section-more">
          <a href="/proyectos/">{t.portfolio.verTodos} →</a>
        </p>

        {/* ── Softwares ── */}
        <section className="section softwares-section" id="softwares">
          <div ref={softwaresTitleRef} className="section-heading reveal">
            <p className="eyebrow">{t.softwares.eyebrow}</p>
            <h2>{t.softwares.h2}</h2>
            <p>{t.softwares.p}</p>
          </div>

          <div ref={softwaresGridRef} className="softwares-grid stagger-children">
            <article className="software-card">
              <div className="software-card-inner">
                <div className="software-logo-wrap">
                  <img
                    src="/images/AppointDate.webp"
                    alt="Logo de AppointDate, software de gestión de citas"
                    className="software-logo"
                    width="677"
                    height="369"
                    loading="lazy"
                  />
                </div>
                <div className="software-body">
                  <h3>AppointDate</h3>
                  <p>{t.softwares.appointdate.description}</p>
                  <Link to="/AppointDate/" className="software-cta">
                    {t.softwares.appointdate.cta} →
                  </Link>
                </div>
              </div>
            </article>
          </div>
          <p className="section-more">
            <a href="/software-a-medida/">{t.softwares.verMas} →</a>
          </p>
        </section>

        {/* ── Proceso ── */}
        <section className="section process-section" id="proceso">
          <div ref={processTitleRef} className="section-heading reveal">
            <p className="eyebrow">{t.proceso.eyebrow}</p>
            <h2>{t.proceso.h2}</h2>
          </div>

          <div ref={processGridRef} className="process-grid stagger-children">
            {t.proceso.steps.map((step) => (
              <article key={step.num}>
                <span>{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>

          <p className="section-more">
            <a href="/contacto/">{t.proceso.cta} →</a>
          </p>
        </section>

        {/* ── Sobre mí / Stack ── */}
        <section className="section about-strip">
          <div ref={aboutCopyRef} className="about-copy reveal-left">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.h2}</h2>
            <p>{t.about.p}</p>
          </div>

          <div ref={stackPanelRef} className="stack-panel reveal-right">
            <p>{t.about.stackLabel}</p>
            <div className="stack-list">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Citas ── */}
        <section ref={quotesRef} className="section quotes-section stagger-children">
          {t.quotes.map((item) => (
            <blockquote className="quote-card" key={item.author}>
              <p>{item.quote}</p>
              <footer>{item.author}</footer>
            </blockquote>
          ))}
        </section>

        {/* ── Contacto ── */}
        <section className="section contact-section" id="contacto">
          <div ref={contactTitleRef} className="section-heading contact-heading reveal">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.h2}</h2>
            <p>{t.contact.p}</p>
          </div>

          <div ref={contactLayoutRef} className="hero-actions contact-cta-actions reveal">
            <a className="button button-primary" href="/contacto/">
              {t.contact.ctaForm}
            </a>
            <a className="button button-secondary" href="mailto:rafa@rafaelverdugo.com">
              rafa@rafaelverdugo.com
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
