const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

// Formato fijo (sin Intl) para que el pre-renderizado y el navegador coincidan
export function formatDate(iso) {
  const [year, month, day] = iso.split('-').map(Number)
  return `${day} de ${MONTHS[month - 1]} de ${year}`
}
