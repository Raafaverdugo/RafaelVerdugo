import { useCallback, useEffect, useRef, useState } from 'react'

// Carrusel de proyectos de la portada: scroll horizontal nativo con snap (funciona
// con el dedo, la rueda y el teclado), la tarjeta centrada destacada y las de los
// lados atenuadas. Avanza solo cada pocos segundos hasta que el usuario lo toca.
const AUTOPLAY_MS = 5500

export default function ProjectCarousel({ projects, labels, startIndex = 0 }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState(startIndex)
  const [autoplay, setAutoplay] = useState(true)
  const pausedRef = useRef(false)

  const goTo = useCallback((index) => {
    const track = trackRef.current
    if (!track) return
    const total = track.children.length
    const target = track.children[(index + total) % total]
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollTo({
      left: target.offsetLeft - (track.clientWidth - target.clientWidth) / 2,
      behavior: reduce ? 'auto' : 'smooth',
    })
  }, [])

  // Tarjeta activa = la que está más centrada en el carril
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let frame = 0
    let settleTimer = 0
    let nearest = startIndex
    let nearestDist = 0
    const update = () => {
      frame = 0
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0
      const center = track.scrollLeft + track.clientWidth / 2
      let best = 0
      let bestDist = Infinity
      Array.from(track.children).forEach((card, i) => {
        const delta = card.offsetLeft + card.clientWidth / 2 - center
        const dist = Math.abs(delta)
        // Posición relativa al centro en "tarjetas" (−1 izquierda, 0 centro, 1 derecha):
        // el CSS la usa para girar e inclinar cada tarjeta en 3D mientras se desliza
        const o = Math.max(-2, Math.min(2, delta / (card.clientWidth + gap)))
        card.style.setProperty('--o', o.toFixed(3))
        card.style.setProperty('--abs', Math.abs(o).toFixed(3))
        card.style.zIndex = String(10 - Math.round(Math.abs(o) * 4))
        if (dist < bestDist) {
          bestDist = dist
          best = i
        }
      })
      nearest = best
      nearestDist = bestDist
      setActive(best)
    }
    // Cuando el scroll se detiene, si alguna tarjeta ha quedado a medio camino
    // (trackpad, inercia, scroll-snap que no termina de encajar), la centramos
    const settle = () => {
      settleTimer = 0
      update()
      if (nearestDist > 2) goTo(nearest)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
      clearTimeout(settleTimer)
      settleTimer = setTimeout(settle, 160)
    }
    // Empieza en la tarjeta central para que haya proyectos a ambos lados
    const first = track.children[startIndex]
    if (first) track.scrollLeft = first.offsetLeft - (track.clientWidth - first.clientWidth) / 2
    update()
    track.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      track.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
      clearTimeout(settleTimer)
    }
  }, [startIndex, goTo])

  // Avance automático: solo si se ve en pantalla, sin hover/foco y sin "reducir movimiento"
  useEffect(() => {
    if (!autoplay) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const track = trackRef.current
    let visible = false
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    }, { threshold: 0.4 })
    io.observe(track)
    const id = setInterval(() => {
      if (visible && !pausedRef.current && !document.hidden) goTo(active + 1)
    }, AUTOPLAY_MS)
    return () => {
      clearInterval(id)
      io.disconnect()
    }
  }, [autoplay, active, goTo])

  const stopAutoplay = () => setAutoplay(false)

  return (
    <div
      className="project-carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label={labels.region}
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
      onFocus={() => { pausedRef.current = true }}
      onBlur={() => { pausedRef.current = false }}
      onPointerDown={stopAutoplay}
      onWheel={stopAutoplay}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); stopAutoplay(); goTo(active + 1) }
        if (e.key === 'ArrowLeft') { e.preventDefault(); stopAutoplay(); goTo(active - 1) }
      }}
    >
      <div className="carousel-track" ref={trackRef}>
        {projects.map((project, i) => (
          <article
            className={`project-card carousel-slide${i === active ? ' is-active' : ''}`}
            key={project.title}
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} / ${projects.length}: ${project.title}`}
            onClick={() => { if (i !== active) { stopAutoplay(); goTo(i) } }}
          >
            <div className="carousel-media">
              <img
                src={project.image}
                alt={`Captura de la web ${project.title} diseñada por Rafael Verdugo`}
                width="800"
                height="500"
                loading={Math.abs(i - startIndex) <= 1 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.caseStudy ? (
                  <a href={project.caseStudy} tabIndex={i === active ? 0 : -1}>{labels.verCaso}</a>
                ) : null}
                <a href={project.url} target="_blank" rel="noreferrer" tabIndex={i === active ? 0 : -1}>
                  {labels.verProyecto}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          aria-label={labels.prev}
          onClick={() => { stopAutoplay(); goTo(active - 1) }}
        >
          <span aria-hidden="true">←</span>
        </button>
        <div className="carousel-dots">
          {projects.map((project, i) => (
            <button
              type="button"
              key={project.title}
              className={`carousel-dot${i === active ? ' is-active' : ''}`}
              aria-label={`${labels.goTo} ${project.title}`}
              aria-current={i === active ? 'true' : undefined}
              onClick={() => { stopAutoplay(); goTo(i) }}
            />
          ))}
        </div>
        <button
          type="button"
          className="carousel-arrow"
          aria-label={labels.next}
          onClick={() => { stopAutoplay(); goTo(active + 1) }}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
