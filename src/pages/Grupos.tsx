import type { WcData, Match, GroupStanding } from '../wc-data'

function MatchLine({ m }: { m: Match }) {
  const done = m.status === 'finished'
  const live = m.status === 'live'
  return (
    <div className={`gm${live ? ' live' : ''}`}>
      <span className="gm-meta">{done || live ? (live ? 'AO VIVO' : 'FIM') : `${m.date} ${m.time}`}</span>
      <span className="gm-t">{m.home.abbr}</span>
      <span className="gm-sc">{m.home.score ?? '-'} × {m.away.score ?? '-'}</span>
      <span className="gm-t r">{m.away.abbr}</span>
    </div>
  )
}

function GroupCard({ g, matches }: { g: GroupStanding; matches: Match[] }) {
  const gms = matches.filter((m) => m.group === g.group)
  const played = gms.filter((m) => m.status !== 'scheduled')
  const next = gms.filter((m) => m.status === 'scheduled')
  const isBrazil = g.table.some((r) => r.abbr === 'BRA' || r.team === 'Brasil')

  return (
    <div className={`group-card${isBrazil ? ' brazil' : ''}`}>
      <div className="gc-head">
        <span className="gc-tag">{g.group}</span>
        <h3>Grupo {g.group}</h3>
        {isBrazil && <span className="gc-flag">🇧🇷</span>}
      </div>

      <table className="gc-table">
        <thead>
          <tr><th></th><th className="l">Seleção</th><th>P</th><th>J</th><th>SG</th></tr>
        </thead>
        <tbody>
          {g.table.map((r, i) => (
            <tr key={r.abbr} className={i < 2 ? 'q' : ''}>
              <td className="pos">{r.position}</td>
              <td className="l">{r.team}</td>
              <td className="pts">{r.points}</td>
              <td>{r.played}</td>
              <td>{r.gd > 0 ? `+${r.gd}` : r.gd}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {played.length > 0 && (
        <div className="gc-block">
          <div className="gc-bt">Resultados</div>
          {played.map((m) => <MatchLine m={m} key={m.id} />)}
        </div>
      )}
      {next.length > 0 && (
        <div className="gc-block">
          <div className="gc-bt">Próximos</div>
          {next.map((m) => <MatchLine m={m} key={m.id} />)}
        </div>
      )}
    </div>
  )
}

export default function Grupos({ data }: { data: WcData }) {
  // Todos os grupos A–L vindos dos jogos; usa a tabela de classificação quando existir.
  const letters = Array.from(
    new Set(data.matches.map((m) => m.group).filter((g) => /^[A-L]$/.test(g))),
  ).sort()
  const byGroup: Record<string, GroupStanding> = {}
  data.standings.forEach((s) => { byGroup[s.group] = s })
  const groups: GroupStanding[] = (letters.length ? letters : data.standings.map((s) => s.group))
    .map((l) => byGroup[l] ?? { group: l, table: [] })

  return (
    <div className="page">
      <div className="page-head">
        <h1>Grupos & Jogos</h1>
        <span className="page-sub">Classificação, resultados e próximos jogos</span>
      </div>
      {!groups.length && <div className="building"><p>Sem dados de grupos no momento.</p></div>}
      <div className="groups-grid">
        {groups.map((g) => <GroupCard g={g} matches={data.matches} key={g.group} />)}
      </div>
    </div>
  )
}
