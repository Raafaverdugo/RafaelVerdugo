import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  CalendarDays,
  Users,
  FileText,
  Clock,
  Zap,
  Globe,
  Info,
  Lock,
} from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './AppointDate.css'

// ── Favicon dinámico ──────────────────────────────────────────────────────────
function useDynamicFavicon(href) {
  useEffect(() => {
    const existing = document.querySelector("link[rel~='icon']")
    const original = existing ? existing.href : '/favicon.svg'
    let link = existing

    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }
    link.href = href

    return () => {
      link.href = original
    }
  }, [href])
}

// ── Funcionalidades ───────────────────────────────────────────────────────────
const features = [
  {
    Icon: CalendarDays,
    title: 'Gestión de citas',
    desc: 'Crea, edita y cancela citas con facilidad. Control total del calendario desde un panel intuitivo.',
  },
  {
    Icon: Users,
    title: 'Gestión de clientes',
    desc: 'Ficha completa de cada cliente: historial, notas, preferencias y datos de contacto siempre a mano.',
  },
  {
    Icon: FileText,
    title: 'Facturación automática',
    desc: 'Genera facturas y tickets automáticamente al cerrar una cita. Sin trabajo extra, sin errores.',
  },
  {
    Icon: Clock,
    title: 'Agenda de empleados',
    desc: 'Gestiona los horarios y turnos de cada trabajador. Asignación de citas por empleado disponible.',
  },
  {
    Icon: Zap,
    title: 'Disponibilidad automática',
    desc: 'El sistema calcula los huecos libres en tiempo real. Adiós a los solapamientos y dobles reservas.',
  },
  {
    Icon: Globe,
    title: 'Portal de reserva público',
    desc: 'Tus clientes reservan online 24/7 desde cualquier dispositivo sin necesidad de llamar.',
  },
]

// ── Precios ───────────────────────────────────────────────────────────────────
const pricingPlans = {
  pack: {
    key: 'pack',
    shortLabel: 'Pack completo',
    label: 'Pack (Sistema + Web Informativa)',
    mensual: { setup: 449, monthly: 69, badge: '2 mensualidades gratis' },
    anual:   { total: 999 },
  },
  sistema: {
    key: 'sistema',
    shortLabel: 'Solo Sistema',
    label: 'Solo Sistema',
    mensual: { setup: 350, monthly: 50 },
    anual:   { total: 849 },
  },
  web: {
    key: 'web',
    shortLabel: 'Solo Web',
    label: 'Solo Web',
    mensual: { setup: 200, monthly: 40 },
    anual:   { total: 549 },
  },
}

function getPlanLabel(service, cycle) {
  const plan = pricingPlans[service]
  return `${plan.label} — ${cycle === 'mensual' ? 'Mensual' : 'Anual'}`
}

// ── Componente principal ──────────────────────────────────────────────────────
export default function AppointDate() {
  useDynamicFavicon('/images/AppointDateRecortada.png')

  // Evita que mantenga el scroll de la página anterior
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [service, setService] = useState('pack')
  const [cycle,   setCycle]   = useState('mensual')
  const [formData, setFormData] = useState({
    nombre:   '',
    email:    '',
    telefono: '',
    mensaje:  '',
    plan:     getPlanLabel('pack', 'mensual'),
  })
  const [sending,   setSending]   = useState(false)
  const [sent,      setSent]      = useState(false)
  const [formError, setFormError] = useState(false)

  const formRef = useRef(null)

  // Animaciones
  const heroRef       = useScrollReveal()
  const featTitleRef  = useScrollReveal()
  const featGridRef   = useStaggerReveal(110)
  const priceTitleRef = useScrollReveal()
  const priceCardRef  = useScrollReveal()
  const formTitleRef  = useScrollReveal()
  const formWrapRef   = useScrollReveal()

  const currentPlan  = pricingPlans[service]
  const currentPrice = currentPlan[cycle]

  function handleServiceChange(val) {
    setService(val)
    setFormData((prev) => ({ ...prev, plan: getPlanLabel(val, cycle) }))
  }

  function handleCycleChange(val) {
    setCycle(val)
    setFormData((prev) => ({ ...prev, plan: getPlanLabel(service, val) }))
  }

  function scrollToForm() {
    setFormData((prev) => ({ ...prev, plan: getPlanLabel(service, cycle) }))
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  function handleInput(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setFormError(false)
    try {
      const res = await fetch('/php/send_appointdate.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
      if (res.ok) {
        setSent(true)
      } else {
        setFormError(true)
      }
    } catch {
      setFormError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="ad-shell">

      {/* ── Back bar ── */}
      <div className="ad-back-bar">
        <Link to="/" className="ad-back-btn">
          <span className="ad-back-arrow">←</span> Volver a rafaelverdugo.com
        </Link>
      </div>

      <main>

        {/* ── Hero ── */}
        <section className="ad-hero" id="ad-inicio">
          <div ref={heroRef} className="ad-hero-inner reveal">
            <span className="ad-eyebrow">Software de gestión</span>
            <h1 className="ad-hero-title">
              Tu negocio merece una gestión más inteligente.
            </h1>
            <p className="ad-hero-text">
              <strong>AppointDate</strong> es un sistema integral de gestión de reservas y citas
              diseñado para negocios que quieren trabajar sin fricción. Desde la primera cita hasta
              la factura final, todo automatizado en un solo lugar.
            </p>
            <div className="ad-hero-actions">
              <a className="ad-btn ad-btn-primary" href="#ad-precios">Ver precios</a>
              <a className="ad-btn ad-btn-secondary" href="#ad-funcionalidades">Conocer funcionalidades</a>
            </div>
          </div>
        </section>

        {/* ── Funcionalidades ── */}
        <section className="ad-section" id="ad-funcionalidades">
          <div ref={featTitleRef} className="ad-section-heading reveal">
            <span className="ad-eyebrow">Funcionalidades</span>
            <h2>Todo lo que necesita tu negocio, sin complicaciones.</h2>
            <p>
              AppointDate cubre el ciclo completo de gestión: desde que el cliente reserva
              hasta que la factura está generada. Sin apps de terceros, sin hojas de cálculo.
            </p>
          </div>

          <div ref={featGridRef} className="ad-features-grid stagger-children">
            {features.map(({ Icon, title, desc }) => (
              <article className="ad-feature-card" key={title}>
                <div className="ad-feature-icon-wrap">
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Precios ── */}
        <section className="ad-section ad-pricing-section" id="ad-precios">
          <div ref={priceTitleRef} className="ad-section-heading reveal">
            <span className="ad-eyebrow">Precios</span>
            <h2>Elige el plan que encaja con tu negocio.</h2>
            <p>Sin permanencias ocultas. Sin letra pequeña. Transparencia total.</p>
          </div>

          <div className="ad-pricing-center">
            <div ref={priceCardRef} className="ad-price-card reveal">

              {/* Tabs de servicio */}
              <div className="ad-service-tabs">
                {Object.values(pricingPlans).map((plan) => (
                  <button
                    key={plan.key}
                    type="button"
                    className={`ad-service-tab${service === plan.key ? ' is-active' : ''}`}
                    onClick={() => handleServiceChange(plan.key)}
                  >
                    {plan.shortLabel}
                  </button>
                ))}
              </div>

              {/* Toggle Mensual / Anual */}
              <div className="ad-cycle-wrap">
                <div className="ad-cycle-toggle">
                  <button
                    type="button"
                    className={`ad-cycle-btn${cycle === 'mensual' ? ' is-active' : ''}`}
                    onClick={() => handleCycleChange('mensual')}
                  >
                    Mensual
                  </button>
                  <button
                    type="button"
                    className={`ad-cycle-btn${cycle === 'anual' ? ' is-active' : ''}`}
                    onClick={() => handleCycleChange('anual')}
                  >
                    Anual
                  </button>
                </div>
                {cycle === 'anual' && (
                  <span className="ad-save-pill">Ahorra hasta 30%</span>
                )}
              </div>

              {/* Precio */}
              <div className="ad-price-display">
                <p className="ad-desde-label">desde</p>
                {cycle === 'mensual' ? (
                  <div className="ad-price-monthly">
                    <div className="ad-price-row">
                      <span className="ad-price-amount">{currentPrice.setup}€</span>
                      <span className="ad-price-suffix">instalación</span>
                    </div>
                    <div className="ad-price-divider">+</div>
                    <div className="ad-price-row">
                      <span className="ad-price-amount">{currentPrice.monthly}€</span>
                      <span className="ad-price-suffix">/ mes</span>
                    </div>
                    {currentPrice.badge && (
                      <div className="ad-free-badge">
                        {currentPrice.badge} — solo en este plan
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="ad-price-annual">
                    <div className="ad-price-row">
                      <span className="ad-price-amount">{currentPrice.total}€</span>
                      <span className="ad-price-suffix">pago único</span>
                    </div>
                    <p className="ad-anual-note">Sin cuota mensual. Pago único, listo.</p>
                  </div>
                )}
              </div>

              {/* Plan seleccionado */}
              <p className="ad-selected-plan">
                <span className="ad-selected-dot" />
                {currentPlan.label} — {cycle === 'mensual' ? 'Mensual' : 'Anual'}
              </p>

              {/* Notas de precios */}
              <div className="ad-price-notes">
                <p>
                  <Info size={14} strokeWidth={2} className="ad-note-icon" />
                  <span>Los precios son <strong>orientativos</strong>. Cada proyecto se estudia de forma individual.</span>
                </p>
                {cycle === 'mensual' && (
                  <p>
                    <Lock size={14} strokeWidth={2} className="ad-note-icon" />
                    <span>La permanencia mínima es de <strong>1 año</strong>.</span>
                  </p>
                )}
              </div>

              <button type="button" className="ad-btn ad-btn-primary ad-cta-btn" onClick={scrollToForm}>
                Me interesa este plan
              </button>
            </div>

            <p className="ad-pricing-alt">
              ¿Esto no encaja contigo?{' '}
              <a href="https://rafaelverdugo.com/#contacto" target="_blank" rel="noreferrer">
                Contáctame
              </a>
            </p>
          </div>
        </section>

        {/* ── Formulario de interés ── */}
        <section className="ad-section ad-form-section" id="ad-contacto" ref={formRef}>
          <div ref={formTitleRef} className="ad-section-heading reveal">
            <span className="ad-eyebrow">Interés</span>
            <h2>Cuéntame un poco más sobre tu negocio.</h2>
            <p>
              Este formulario no es una compra, es para que pueda contactarte con
              información personalizada. Sin compromiso.
            </p>
          </div>

          <div ref={formWrapRef} className="ad-form-layout reveal">
            <form className="ad-contact-form" onSubmit={handleSubmit}>
              {sent && (
                <div className="form-alert success">
                  ¡Mensaje recibido! Te contactaré en breve con toda la información.
                </div>
              )}
              {formError && (
                <div className="form-alert error">
                  Hubo un problema al enviar. Inténtalo de nuevo o escríbeme directamente.
                </div>
              )}

              <label htmlFor="ad-nombre">Nombre</label>
              <input
                id="ad-nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleInput}
              />

              <label htmlFor="ad-email">
                Email <span className="ad-required">*</span>
              </label>
              <input
                id="ad-email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleInput}
                required
              />

              <label htmlFor="ad-telefono">
                Teléfono{' '}
                <span className="ad-optional">(opcional — para contacto directo)</span>
              </label>
              <input
                id="ad-telefono"
                name="telefono"
                type="tel"
                placeholder="+34 600 000 000"
                value={formData.telefono}
                onChange={handleInput}
              />

              <label htmlFor="ad-plan">Plan de interés</label>
              <input
                id="ad-plan"
                name="plan"
                type="text"
                value={formData.plan}
                onChange={handleInput}
                readOnly
                className="ad-plan-field"
              />

              <label htmlFor="ad-mensaje">Mensaje</label>
              <textarea
                id="ad-mensaje"
                name="mensaje"
                rows="5"
                placeholder="Cuéntame a qué tipo de negocio va dirigido, si tienes alguna pregunta o qué necesitas saber antes de decidirte."
                value={formData.mensaje}
                onChange={handleInput}
              />

              {/* Honeypot */}
              <input
                className="hidden-field"
                type="text"
                name="company"
                tabIndex="-1"
                autoComplete="off"
              />

              <button className="ad-btn ad-btn-primary" type="submit" disabled={sending}>
                {sending ? 'Enviando…' : 'Enviar mensaje'}
              </button>
            </form>

            <aside className="ad-form-aside">
              <p className="ad-form-aside-title">Contacto directo</p>
              <a href="mailto:appointdatesoftware@gmail.com">appointdatesoftware@gmail.com</a>
              <p>Sevilla, España</p>
              <div className="ad-social-links">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TikTok</a>
              </div>
            </aside>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="ad-footer">
        <p>
          © {new Date().getFullYear()} AppointDate · Desarrollado por{' '}
          <a href="https://rafaelverdugo.com" target="_blank" rel="noreferrer">Rafael Verdugo</a>
        </p>
      </footer>

    </div>
  )
}
