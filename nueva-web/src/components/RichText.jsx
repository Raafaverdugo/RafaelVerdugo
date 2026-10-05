// Renderiza texto con un marcado mínimo: [enlace](/ruta) y **negrita**.
const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g

export function Inline({ text }) {
  const parts = text.split(TOKEN).filter(Boolean)
  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const external = /^https?:\/\//.test(link[2])
      return (
        <a key={i} href={link[2]} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
          {link[1]}
        </a>
      )
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/)
    if (bold) return <strong key={i}>{bold[1]}</strong>
    return part
  })
}

// Bloques: { h2 }, { h3 }, { p }, { ul: [] }, { ol: [] }, { note }
export default function RichText({ blocks }) {
  return blocks.map((block, i) => {
    if (block.h2) return <h2 key={i}>{block.h2}</h2>
    if (block.h3) return <h3 key={i}>{block.h3}</h3>
    if (block.ul || block.ol) {
      const List = block.ul ? 'ul' : 'ol'
      return (
        <List key={i}>
          {(block.ul || block.ol).map((item, j) => (
            <li key={j}>
              <Inline text={item} />
            </li>
          ))}
        </List>
      )
    }
    if (block.note) {
      return (
        <p key={i} className="prose-note">
          <Inline text={block.note} />
        </p>
      )
    }
    return (
      <p key={i}>
        <Inline text={block.p} />
      </p>
    )
  })
}
