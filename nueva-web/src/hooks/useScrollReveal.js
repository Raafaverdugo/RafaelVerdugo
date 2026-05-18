import { useEffect, useRef } from 'react'

/**
 * useScrollReveal
 * Aplica la clase `is-visible` al elemento cuando entra en el viewport.
 *
 * @param {Object} options
 * @param {number}  options.threshold   - Fracción visible antes de disparar (0–1). Default: 0.12
 * @param {string}  options.rootMargin  - Margen del observer. Default: '0px 0px -60px 0px'
 * @param {boolean} options.once        - Si true, solo lanza la animación una vez. Default: true
 */
export function useScrollReveal({ threshold = 0.12, rootMargin = '0px 0px -60px 0px', once = true } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          if (once) observer.unobserve(el)
        } else if (!once) {
          el.classList.remove('is-visible')
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}

/**
 * useStaggerReveal
 * Observa un contenedor y aplica `is-visible` a cada hijo con un delay escalonado.
 *
 * @param {number} delayStep - Milisegundos entre cada hijo. Default: 100
 * @param {Object} observerOptions
 */
export function useStaggerReveal(delayStep = 100, observerOptions = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = Array.from(container.children)
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * delayStep}ms`
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => child.classList.add('is-visible'))
          observer.unobserve(container)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px', ...observerOptions },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [delayStep])

  return ref
}
