import type { WcData } from '../wc-data'
import { gamesOfDay, nextDayGames } from '../useWc'
import type { Page } from './Sidebar'

function Side({ team, abbr, score }: { team: string; abbr: string; score: number | null }) {
  return (
    <div className="lb-side">
      <span className="lb-abbr">{abbr}</span>
      <span className="lb-name">{team}</span>
      <span className="lb-score">{score ?? '-'}</span>
    </div>
  )
}

function GameCard({ m }: { m: WcData['matches'][number] }) {
  return (
    <div className="lb-card">
      <div className="lb-top">
        <span className="lb-time">{m.time}</span>
        {m.status === 'live' && <span className="lb-badge live">Ao Vivo</span>}
        {m.status === 'finished' && <span className="lb-badge fim">Fim</span>}
        {m.status === 'scheduled' && <span className="lb-watch">›</span>}
      </div>
      <Side {...m.home} />
      <Side {...m.away} />
      <div className="lb-foot">{m.round}{m.group ? ` · Grupo ${m.group}` : ''}</div>
    </div>
  )
}

export default function LiveStrip({ data, onNav }: { data: WcData; onNav: (p: Page) => void }) {
  const day = gamesOfDay(data.matches)
  const next = nextDayGames(data.matches)

  return (
    <div className="livestrip">
      <div className="ls-label">Jogos {day.label || 'do dia'}</div>
      <div className="lb-rail">
        {day.games.map((m) => <GameCard m={m} key={m.id} />)}
        {!day.games.length && <div className="lb-empty">Sem jogos hoje</div>}

        {/* Quadrado: jogos do dia seguinte */}
        <div className="lb-card lb-next">
          <div className="lb-next-h">Próximos Jogos{next.label ? ` · ${next.label}` : ''}</div>
          {next.games.map((m) => (
            <div className="lb-next-row" key={m.id}>
              <span className="t">{m.home.abbr} × {m.away.abbr}</span>
              <span className="h">{m.time}</span>
            </div>
          ))}
          {!next.games.length && <div className="lb-next-row">—</div>}
        </div>

        {/* Quadrado: leva para Grupos & Resultados */}
        <button className="lb-card lb-link" onClick={() => onNav('grupos')}>
          <div className="lb-link-t">Resultados &<br />Classificação</div>
          <div className="lb-link-sub">por grupo</div>
          <div className="lb-link-arrow">→</div>
        </button>
      </div>
    </div>
  )
}
