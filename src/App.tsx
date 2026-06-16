import { useState } from 'react'
import Sidebar, { type Page } from './components/Sidebar'
import Intro from './components/Intro'
import LiveStrip from './components/LiveStrip'
import Home from './pages/Home'
import Regras from './pages/Regras'
import Bolao from './pages/Bolao'
import Grupos from './pages/Grupos'
import { useWc } from './useWc'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [menuOpen, setMenuOpen] = useState(true)
  const { data, live } = useWc()

  const nav = (p: Page) => setPage(p)

  return (
    <>
    {!menuOpen && <Intro />}
    <div className={`layout${menuOpen ? '' : ' collapsed'}`}>
      {menuOpen && <Sidebar page={page} onNav={nav} onClose={() => setMenuOpen(false)} />}
      <main className="main">
        <div className="main-inner">
          <button
            className="menu-open"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className="bars" />
            Menu
          </button>

          {(page === 'home' || page === 'grupos') && (
            <>
              <LiveStrip data={data} onNav={nav} />
              {!live && <div className="demo-flag">Dados de demonstração — sem conexão com a API</div>}
            </>
          )}
          {page === 'home' && <Home data={data} />}
          {page === 'regras' && <Regras />}
          {page === 'bolao' && <Bolao data={data} />}
          {page === 'grupos' && <Grupos data={data} />}

          <footer className="credits">
            Desenvolvido por Gustavo D'avila, Adriano Martinez e Mámá
          </footer>
        </div>
      </main>
    </div>
    </>
  )
}
