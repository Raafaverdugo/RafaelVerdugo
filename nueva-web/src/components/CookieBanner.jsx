import { useSyncExternalStore } from 'react'
import { readConsent, setConsent, subscribeConsent } from './consent.js'

// Analytics arranca con el consentimiento denegado (ver index.html) y solo
// guarda cookies si el visitante acepta aquí.
export default function CookieBanner() {
  // En el pre-renderizado no hay localStorage: se oculta y aparece tras hidratar si hace falta
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => 'server')
  if (consent !== 'unset') return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <p>
        Uso cookies de Google Analytics para saber cuántas personas visitan la web y qué páginas les resultan útiles. Solo
        se activan si aceptas. <a href="/cookies/">Más información</a>
      </p>
      <div className="cookie-actions">
        <button type="button" className="button button-secondary" onClick={() => setConsent('denied')}>
          Rechazar
        </button>
        <button type="button" className="button button-primary" onClick={() => setConsent('granted')}>
          Aceptar
        </button>
      </div>
    </div>
  )
}
