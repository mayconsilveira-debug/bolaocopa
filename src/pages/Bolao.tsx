import { useMemo, useState } from 'react'
import { bolao } from '../data'
import type { WcData } from '../wc-data'
import { totalScore, playerStats } from '../scoring'

function norm(s: string) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()
}

type SortKey = 'pos' | 'name' | 'champion' | 'scorer' | 'player' | 'points'

export default function Bolao({ data }: { data: WcData }) {
  const [open, setOpen] = useState<string | null>(null)
  const [sortKey, setSortKey] = useState<SortKey>('points')
  const [dir, setDir] = useState<1 | -1>(1)

  const topScorer = data.scorers[0]

  // pontua + posição real (por pontos)
  const base = useMemo(() => {
    const list = bolao.participants.map((p) => ({
      p,
      s: totalScore(p, data.standings, data.matches, data.scorers),
      ga: playerStats(p.player, data.scorers),
    }))
    const byPts = [...list].sort((a, b) => b.s.total - a.s.total || a.p.name.localeCompare(b.p.name, 'pt-BR'))
    const pos: Record<string, number> = {}
    byPts.forEach((x, i) => { pos[x.p.name] = i + 1 })
    return list.map((x) => ({ ...x, pos: pos[x.p.name] }))
  }, [data])

  const rows = useMemo(() => {
    const cmp = (a: typeof base[number], b: typeof base[number]) => {
      let r = 0
      if (sortKey === 'points') r = b.s.total - a.s.total
      else if (sortKey === 'pos') r = a.pos - b.pos
      else if (sortKey === 'name') r = a.p.name.localeCompare(b.p.name, 'pt-BR')
      else r = String(a.p[sortKey]).localeCompare(String(b.p[sortKey]), 'pt-BR')
      if (r === 0) r = a.p.name.localeCompare(b.p.name, 'pt-BR')
      return r
    }
    const sorted = [...base].sort(cmp)
    return dir === 1 ? sorted : sorted.reverse()
  }, [base, sortKey, dir])

  const onSort = (k: SortKey) => {
    if (k === sortKey) setDir((d) => (d === 1 ? -1 : 1))
    else { setSortKey(k); setDir(1) }
  }
  const arrow = (k: SortKey) => (sortKey === k ? (dir === 1 ? ' ▾' : ' ▴') : '')

  return (
    <div className="page">
      <div className="page-head">
        <h1>Classificação do Bolão</h1>
        <span className="page-sub">2 pts acerto exato · 1 pt posição trocada · +1 por gol do artilheiro · campeão −2 a +12</span>
      </div>

      <div className="rank2">
        <div className="rank2-head">
          <span className="c-pos" onClick={() => onSort('pos')}>#{arrow('pos')}</span>
          <span className="c-name" onClick={() => onSort('name')}>Participante{arrow('name')}</span>
          <span className="c-champ" onClick={() => onSort('champion')}>Campeão{arrow('champion')}</span>
          <span className="c-scorer" onClick={() => onSort('scorer')}>Artilheiro{arrow('scorer')}</span>
          <span className="c-player" onClick={() => onSort('player')}>Melhor Jogador{arrow('player')}</span>
          <span className="c-pts" onClick={() => onSort('points')}>Pts{arrow('points')}</span>
        </div>

        {rows.map(({ p, s, ga, pos }) => {
          const isOpen = open === p.name
          return (
            <div className={`rank2-row${isOpen ? ' open' : ''}`} key={p.name}>
              <button className="r2-main" onClick={() => setOpen(isOpen ? null : p.name)}>
                <span className={`c-pos${pos <= 3 ? ' top' : ''}`}>{pos}</span>
                <span className="c-name">{p.name}</span>
                <span className="c-champ"><i className={`dot ${s.champ.status}`} /> {p.champion}</span>
                <span className="c-scorer">{p.scorer} <b>{s.goals}g</b></span>
                <span className="c-player">{p.player} <b>{ga.ga}</b></span>
                <span className="c-pts">{s.total}</span>
                <span className="c-caret">{isOpen ? '▾' : '▸'}</span>
              </button>

              {isOpen && (
                <div className="r2-detail">
                  <div className="rd-cols">
                    <div className="rd-card">
                      <div className="rd-t">Fase de Grupos <b>{s.group} pts</b></div>
                      <div className="rd-groups">{GroupsDetail(p, data)}</div>
                    </div>
                    <div className="rd-side">
                      <div className="rd-line">
                        <span className="rd-lbl">País Campeão</span>
                        <span className="rd-val"><i className={`dot ${s.champ.status}`} /> {p.champion}</span>
                        <span className="rd-meta">{s.champ.note}</span>
                        <span className="rd-p">{s.champion > 0 ? `+${s.champion}` : s.champion} pts</span>
                      </div>
                      <div className="rd-line">
                        <span className="rd-lbl">Artilheiro</span>
                        <span className="rd-val">{p.scorer} · {s.goals}g</span>
                        <span className="rd-meta">
                          {topScorer
                            ? <>Líder da Copa: <b>{topScorer.name}</b> ({topScorer.goals}g){norm(p.scorer) === norm(topScorer.last) || norm(p.scorer) === norm(topScorer.name) ? ' — você está acertando!' : ''}</>
                            : 'Sem gols ainda'}
                          {' · +5 se acertar no fim'}
                        </span>
                        <span className="rd-p">+{s.scorer} pts</span>
                      </div>
                      <div className="rd-line">
                        <span className="rd-lbl">Melhor Jogador</span>
                        <span className="rd-val">{p.player}</span>
                        <span className="rd-meta">{ga.goals} gols · {ga.assists} assist. (G+A {ga.ga}) · 10 pts no fim</span>
                        <span className="rd-p">—</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// chips dos 12 grupos: planejado x realizado
function GroupsDetail(p: typeof bolao.participants[number], data: WcData) {
  const by: Record<string, WcData['standings'][number]> = {}
  data.standings.forEach((s) => { by[s.group] = s })

  return p.groupPicks.map((pick) => {
    const st = by[pick.g]
    const r1 = st?.table[0]?.abbr
    const r2 = st?.table[1]?.abbr
    const has = !!(st && st.table.length >= 2)
    let pa = 0; let pb = 0
    if (has) {
      if (pick.a === r1) pa = 2; else if (pick.a === r2) pa = 1
      if (pick.b === r2) pb = 2; else if (pick.b === r1) pb = 1
    }
    const cls = (n: number) => (!has ? 'pend' : n === 2 ? 'ok' : n === 1 ? 'half' : 'miss')
    return (
      <div className="grp-chip" key={pick.g}>
        <div className="gch-g">{pick.g}</div>
        <div className={`gch-pick ${cls(pa)}`}>{pick.a}</div>
        <div className={`gch-pick ${cls(pb)}`}>{pick.b}</div>
        <div className="gch-pts">{has ? pa + pb : '·'}</div>
      </div>
    )
  })
}
