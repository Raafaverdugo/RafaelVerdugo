import { useSyncExternalStore } from 'react'

const subscribeNoop = () => () => {}
const getSearch = () => window.location.search
const getServerSearch = () => ''

// Formulario de contacto (php/send.php redirige de vuelta a /contacto/?success=1 o ?error=1)
export default function ContactForm() {
  // Pre-renderizado sin window: en el servidor la query es vacía y React la actualiza tras hidratar
  const search = useSyncExternalStore(subscribeNoop, getSearch, getServerSearch)
  const params = new URLSearchParams(search)
  const success = params.get('success') === '1'
  const error = params.get('error') === '1'

  return (
    <>
      {success ? (
        <div className="form-alert success" role="status">
          Tu mensaje se ha enviado correctamente. Te respondo lo antes posible.
        </div>
      ) : null}
      {error ? (
        <div className="form-alert error" role="alert">
          Hubo un problema al enviar el formulario. Prueba de nuevo o escríbeme a rafa@rafaelverdugo.com.
        </div>
      ) : null}

      <div className="contact-layout">
        <form className="contact-form" action="/php/send.php" method="post">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" autoComplete="name" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="tu@email.com" autoComplete="email" required />

          <label htmlFor="mensaje">Proyecto</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="6"
            placeholder="Cuéntame qué necesitas, qué estilo buscas y si ya tienes dominio u hosting."
            required
          />

          <input className="hidden-field" type="text" name="company" tabIndex="-1" autoComplete="off" />

          <label className="privacy-check">
            <input type="checkbox" name="privacidad" required />
            <span>
              He leído y acepto la{' '}
              <a href="/privacidad/" target="_blank" rel="noreferrer">
                política de privacidad
              </a>
              .
            </span>
          </label>

          <button className="button button-primary" type="submit">
            Enviar mensaje
          </button>
        </form>

        <aside className="contact-card">
          <p className="contact-kicker">Contacto directo</p>
          <a href="mailto:rafa@rafaelverdugo.com">rafa@rafaelverdugo.com</a>
          <p>
            <a href="tel:+34621000706">621 000 706</a> · llamadas y{' '}
            <a href="https://wa.me/34621000706" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </p>
          <p>Sevilla y alrededores · Trabajo con clientes de toda España</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/rafael-verdugo-dur%C3%A1n-b25a3831b/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/rafael_verdugo17" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://github.com/Raafaverdugo" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </aside>
      </div>
    </>
  )
}
