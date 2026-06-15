export type Page = 'home' | 'regras' | 'bolao' | 'grupos'

const items: { id: Page; label: string; n: string }[] = [
  { id: 'home', label: 'Home', n: '01' },
  { id: 'regras', label: 'Regulamento', n: '02' },
  { id: 'bolao', label: 'Classificação do Bolão', n: '03' },
  { id: 'grupos', label: 'Grupos & Jogos', n: '04' },
]

export default function Sidebar({
  page,
  onNav,
  onClose,
}: {
  page: Page
  onNav: (p: Page) => void
  onClose: () => void
}) {
  return (
    <aside className="sidebar">
      <div className="sb-brand">
        <img className="sb-logo" src="/wc-logo.png" alt="Copa 2026" />
        <div className="sb-title">Bolão da <b>Copa</b></div>
        <button className="sb-toggle" onClick={onClose} aria-label="Fechar menu">✕</button>
      </div>
      <nav className="sb-nav">
        {items.map((it) => (
          <button
            key={it.id}
            className={`sb-item${page === it.id ? ' active' : ''}`}
            onClick={() => onNav(it.id)}
          >
            <span className="sb-n">{it.n}</span>
            <span className="sb-label">{it.label}</span>
          </button>
        ))}
      </nav>
      <div className="sb-foot">FIFA World Cup 2026 · Grupo We.com</div>
    </aside>
  )
}
