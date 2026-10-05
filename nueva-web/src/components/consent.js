// Estado del consentimiento de cookies (localStorage + Consent Mode de Google Analytics)
const KEY = 'cookie-consent'
const listeners = new Set()

export function readConsent() {
  try {
    return localStorage.getItem(KEY) || 'unset'
  } catch {
    return 'unset'
  }
}

export function subscribeConsent(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function setConsent(value) {
  try {
    if (value === 'unset') localStorage.removeItem(KEY)
    else localStorage.setItem(KEY, value)
  } catch {
    // Sin almacenamiento disponible: la elección solo dura esta visita
  }
  if (value !== 'unset' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', { analytics_storage: value === 'granted' ? 'granted' : 'denied' })
  }
  listeners.forEach((listener) => listener())
}
