import PageLayout, { Breadcrumbs } from '../components/PageLayout.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function ContactPage() {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Contacto' }]} />

      <header className="content-hero">
        <p className="eyebrow">Contacto</p>
        <h1>Cuéntame qué quieres construir y te respondo con una propuesta real.</h1>
        <p className="content-lead">
          Escríbeme por el formulario o directamente a rafa@rafaelverdugo.com. Te respondo con una propuesta clara: qué
          haría, en cuánto tiempo y cuánto costaría, sin compromiso.
        </p>
      </header>

      <section className="contact-page-form">
        <ContactForm />
      </section>

      <section className="content-section prose">
        <h2>Qué pasa después de escribirme</h2>
        <ol>
          <li>
            <strong>Leo tu mensaje</strong> y, si necesito algún detalle más, te lo pregunto por email o lo vemos en una
            llamada corta.
          </li>
          <li>
            <strong>Te envío una propuesta cerrada</strong> con lo que incluye, el plazo y el precio. Puedes ver mis precios de
            partida en <a href="/blog/cuanto-cuesta-una-pagina-web-en-sevilla/">cuánto cuesta una página web</a>.
          </li>
          <li>
            <strong>Si te encaja, empezamos.</strong> Si no, al menos te llevas una idea clara de lo que necesitas.
          </li>
        </ol>
      </section>
    </PageLayout>
  )
}
