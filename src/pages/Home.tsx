import { useMemo, useState } from 'react'
import { bolao } from '../data'
import type { Vote } from '../data'
import type { WcData } from '../wc-data'
import { totalScore } from '../scoring'

type SortKey = 'pos' | 'name' | 'champion' | 'scorer' | 'player' | 'points'

function VoteColumn({ title, items, max }: { title: string; items: Vote[]; max: number }) {
  return (
    <div className="votecard">
      <h3>{title}<small>{items.length} opções</small></h3>
      {items.slice(0, max).map((v, i) => (
        <div className={`bar${i === 0 ? ' lead' : ''}`} key={v.name}>
          <div className="bar-row">
            <span className="who">{v.name}</span>
            <span className="val">{v.votes} · {v.pct}%</span>
          </div>
          <div className="track"><div className="fill" style={{ width: `${v.pct}%` }} /></div>
        </div>
      ))}
    </div>
  )
}

function Ranking({ data }: { data: WcData }) {
  const [sortKey, setSortKey] = useState<SortKey>('points')
  const [dir, setDir] = useState<1 | -1>(1) // 1 = decrescente (padrão), -1 = crescente

  // pontos + posição real (sempre por pontos)
  const base = useMemo(() => {
    const withPts = bolao.participants.map((p) => ({
      ...p,
      points: totalScore(p, data.standings, data.matches, data.scorers).total,
    }))
    const byPts = [...withPts].sort(
      (a, b) => b.points - a.points || a.name.localeCompare(b.name, 'pt-BR'),
    )
    const pos: Record<string, number> = {}
    byPts.forEach((p, i) => { pos[p.name] = i + 1 })
    return withPts.map((p) => ({ ...p, pos: pos[p.name] }))
  }, [data])

  const rows = useMemo(() => {
    const cmp = (a: typeof base[number], b: typeof base[number]) => {
      let r = 0
      if (sortKey === 'points') r = b.points - a.points
      else if (sortKey === 'pos') r = a.pos - b.pos
      else r = String(a[sortKey]).localeCompare(String(b[sortKey]), 'pt-BR')
      if (r === 0) r = a.name.localeCompare(b.name, 'pt-BR') // desempate estável
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
    <section className="home-block">
      <div className="home-sec">
        <span className="bar" />
        <h2>Ranking dos Participantes</h2>
        <span className="cnt">2 pts acerto exato · 1 pt posição trocada · +1 por gol do artilheiro · campeão −2 a +12</span>
      </div>
      <div className="ptable-wrap">
        <table className="ptable sortable">
          <thead>
            <tr>
              <th className="rk-pos-h" onClick={() => onSort('pos')}>#{arrow('pos')}</th>
              <th onClick={() => onSort('name')}>Participante{arrow('name')}</th>
              <th className="col-player" onClick={() => onSort('champion')}>Campeão{arrow('champion')}</th>
              <th className="col-player" onClick={() => onSort('scorer')}>Artilheiro{arrow('scorer')}</th>
              <th className="col-player" onClick={() => onSort('player')}>Melhor Jogador{arrow('player')}</th>
              <th className="rk-pts-h" onClick={() => onSort('points')}>Pontos{arrow('points')}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.name}>
                <td className={`rk-pos${p.pos <= 3 ? ' top' : ''}`}>{p.pos}</td>
                <td className="pname">{p.name}</td>
                <td className="col-player">{p.champion}</td>
                <td className="col-player">{p.scorer}</td>
                <td className="col-player">{p.player}</td>
                <td className="rk-pts">{p.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function Insights({ data }: { data: WcData }) {
  const rows = data.standings.flatMap((s) => s.table)
  const campaign = [...rows].sort((a, b) => b.points - a.points || b.gd - a.gd || b.gf - a.gf)[0]
  const attack = [...rows].sort((a, b) => b.gf - a.gf || b.gd - a.gd)[0]
  const top = data.scorers[0]
  const finished = data.matches.filter(
    (m) => m.status === 'finished' && m.home.score != null && m.away.score != null,
  )
  const goleada = [...finished].sort(
    (a, b) => Math.abs(b.home.score! - b.away.score!) - Math.abs(a.home.score! - a.away.score!),
  )[0]
  const live = rows.length > 0

  return (
    <section className="home-block">
      <div className="home-sec">
        <span className="bar" />
        <h2>Insights da Copa</h2>
        <span className="cnt">{live ? 'Ao vivo · com base nos jogos' : 'Aguardando dados ao vivo'}</span>
      </div>
      <div className="stats insights">
        <div className="stat">
          <div className="label">Provável craque</div>
          <div className="name">{top ? `${top.name}${top.team ? ` (${top.team})` : ''}` : '—'}</div>
          <div className="sub">{top ? <><b>{top.goals}</b> gols{top.assists ? ` · ${top.assists} assist.` : ''} · líder</> : 'Sem gols ainda'}</div>
        </div>
        <div className="stat">
          <div className="label">Favorito pela campanha</div>
          <div className="name">{campaign ? campaign.team : '—'}</div>
          <div className="sub">{campaign ? <><b>{campaign.points}</b> pts · {campaign.gd > 0 ? `+${campaign.gd}` : campaign.gd} saldo</> : 'Aguardando'}</div>
        </div>
        <div className="stat">
          <div className="label">Melhor ataque</div>
          <div className="name">{attack ? attack.team : '—'}</div>
          <div className="sub">{attack ? <><b>{attack.gf}</b> gols marcados</> : 'Aguardando'}</div>
        </div>
        <div className="stat">
          <div className="label">Maior goleada</div>
          <div className="name">{goleada ? `${goleada.home.abbr} ${goleada.home.score}×${goleada.away.score} ${goleada.away.abbr}` : '—'}</div>
          <div className="sub">{goleada ? `${goleada.round}${goleada.group ? ` · Grupo ${goleada.group}` : ''}` : 'Nenhum jogo ainda'}</div>
        </div>
      </div>
    </section>
  )
}

export default function Home({ data }: { data: WcData }) {
  const champ = bolao.champions[0]
  const scorer = bolao.scorers[0]
  const player = bolao.players[0]

  return (
    <div className="page">
      <div className="page-head">
        <span className="page-sub">Panorama dos palpites · {bolao.meta.participants} participantes</span>
      </div>

      {/* Destaques */}
      <section className="home-block">
        <div className="stats">
          <div className="stat"><div className="label">Participantes</div><div className="big">{bolao.meta.participants}</div><div className="sub">Palpites confirmados</div></div>
          <div className="stat"><div className="label">Favorito ao título</div><div className="big">{champ.pct}%</div><div className="sub"><b>{champ.name}</b> · {champ.votes} votos</div></div>
          <div className="stat"><div className="label">Artilheiro mais votado</div><div className="name">{scorer.name}</div><div className="sub"><b>{scorer.votes}</b> votos · {scorer.pct}%</div></div>
          <div className="stat"><div className="label">Melhor jogador</div><div className="name">{player.name}</div><div className="sub"><b>{player.votes}</b> votos · {player.pct}%</div></div>
        </div>
      </section>

      {/* Insights da Copa (ao vivo) */}
      <Insights data={data} />

      {/* Distribuição */}
      <section className="home-block">
        <div className="home-sec"><span className="bar" /><h2>Distribuição de Palpites</h2></div>
        <div className="cols3">
          <VoteColumn title="País Campeão" items={bolao.champions} max={6} />
          <VoteColumn title="Artilheiro" items={bolao.scorers} max={6} />
          <VoteColumn title="Melhor Jogador" items={bolao.players} max={6} />
        </div>
      </section>

      {/* Consenso por grupo */}
      <section className="home-block">
        <div className="home-sec"><span className="bar" /><h2>Consenso por Grupo</h2><span className="cnt">2 mais votados</span></div>
        <div className="cgroups">
          {bolao.groups.map((g) => (
            <div className="cgroup" key={g.group}>
              <div className="cg-id"><span className="tag">{g.group}</span> Grupo {g.group}</div>
              {g.teams.slice(0, 4).map((t, i) => (
                <div className={`cg-team ${i < 2 ? 'q' : 'out'}`} key={t.name}>
                  <span className="tn">{t.name}</span><span className="pct">{t.pct}%</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Ranking data={data} />
    </div>
  )
}
