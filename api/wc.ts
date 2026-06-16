// Função serverless (Vercel) — proxy para football-data.org.
// Token no ambiente (FOOTBALL_DATA_TOKEN). Endpoint do front: GET /api/wc
// Autossuficiente (sem imports relativos) para evitar erro de resolução na Vercel.

interface FDTeam { name?: string; shortName?: string; tla?: string }
interface FDMatch {
  id: number
  utcDate: string
  status: string
  matchday?: number
  stage?: string
  group?: string | null
  homeTeam: FDTeam
  awayTeam: FDTeam
  score?: { winner?: string | null; fullTime?: { home: number | null; away: number | null } }
}
interface FDScorer {
  player?: { name?: string }
  team?: { tla?: string; name?: string }
  goals?: number | null
  assists?: number | null
}
interface FDRow {
  position: number
  team: FDTeam
  playedGames: number
  won: number
  draw: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
}
interface FDTable { group?: string | null; type: string; table: FDRow[] }

export interface OutSide { team: string; abbr: string; score: number | null }
export interface OutMatch {
  id: number
  time: string
  date: string
  utcDate: string
  group: string
  round: string
  stage: string
  winner: string | null
  status: 'live' | 'scheduled' | 'finished'
  home: OutSide
  away: OutSide
}
export interface OutScorer { name: string; last: string; team: string; goals: number; assists: number }
export interface OutRow {
  position: number
  team: string
  abbr: string
  played: number
  won: number
  draw: number
  lost: number
  gf: number
  ga: number
  gd: number
  points: number
}
export interface OutGroup { group: string; table: OutRow[] }
export interface WcData { matches: OutMatch[]; standings: OutGroup[]; scorers: OutScorer[] }

// tla -> nome em português (Copa 2026, 48 seleções)
const PT: Record<string, string> = {
  ALG: 'Argélia', ARG: 'Argentina', AUS: 'Austrália', AUT: 'Áustria', BEL: 'Bélgica',
  BIH: 'Bósnia', BRA: 'Brasil', CAN: 'Canadá', CIV: 'Costa do Marfim', COD: 'Congo',
  COL: 'Colômbia', CPV: 'Cabo Verde', CRO: 'Croácia', CUW: 'Curaçao', CZE: 'Rep. Tcheca',
  ECU: 'Equador', EGY: 'Egito', ENG: 'Inglaterra', ESP: 'Espanha', FRA: 'França',
  GER: 'Alemanha', GHA: 'Gana', HAI: 'Haiti', IRN: 'Irã', IRQ: 'Iraque', JOR: 'Jordânia',
  JPN: 'Japão', KOR: 'Coréia do Sul', KSA: 'Arábia Saudita', MAR: 'Marrocos', MEX: 'México',
  NED: 'Holanda', NOR: 'Noruega', NZL: 'Nova Zelândia', PAN: 'Panamá', PAR: 'Paraguai',
  POR: 'Portugal', QAT: 'Catar', RSA: 'África do Sul', SCO: 'Escócia', SEN: 'Senegal',
  SUI: 'Suíça', SWE: 'Suécia', TUN: 'Tunísia', TUR: 'Turquia', URY: 'Uruguai',
  USA: 'Estados Unidos', UZB: 'Uzbequistão',
}

function name(t: FDTeam): string {
  const tla = t.tla || ''
  return PT[tla] || t.shortName || t.name || tla || '—'
}
function ab(t: FDTeam): string {
  return t.tla || (t.shortName || t.name || '').slice(0, 3).toUpperCase()
}
function mapStatus(s: string): 'live' | 'scheduled' | 'finished' {
  if (s === 'IN_PLAY' || s === 'PAUSED') return 'live'
  if (s === 'FINISHED') return 'finished'
  return 'scheduled'
}
function timeBR(utc: string): string {
  return new Date(utc).toLocaleTimeString('pt-BR', {
    hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo',
  })
}
function dateBR(utc: string): string {
  return new Date(utc).toLocaleDateString('pt-BR', {
    day: '2-digit', month: '2-digit', timeZone: 'America/Sao_Paulo',
  })
}

async function api<T>(path: string, token: string): Promise<T> {
  const r = await fetch(`https://api.football-data.org/v4/competitions/WC/${path}`, {
    headers: { 'X-Auth-Token': token },
  })
  if (!r.ok) throw new Error(`football-data ${path} respondeu ${r.status}`)
  return r.json() as Promise<T>
}

export async function fetchData(token: string): Promise<WcData> {
  const [m, s, sc] = await Promise.all([
    api<{ matches: FDMatch[] }>('matches', token),
    api<{ standings: FDTable[] }>('standings', token),
    api<{ scorers: FDScorer[] }>('scorers?limit=100', token).catch(() => ({ scorers: [] })),
  ])

  const matches: OutMatch[] = (m.matches || [])
    .map((x) => {
      const w = x.score?.winner
      const winner = w === 'HOME_TEAM' ? ab(x.homeTeam) : w === 'AWAY_TEAM' ? ab(x.awayTeam) : null
      return {
        id: x.id,
        time: timeBR(x.utcDate),
        date: dateBR(x.utcDate),
        utcDate: x.utcDate,
        group: (x.group || '').replace('GROUP_', '') || (x.stage || ''),
        round: x.matchday ? `Rodada ${x.matchday}` : (x.stage || ''),
        stage: x.stage || '',
        winner,
        status: mapStatus(x.status),
        home: { team: name(x.homeTeam), abbr: ab(x.homeTeam), score: x.score?.fullTime?.home ?? null },
        away: { team: name(x.awayTeam), abbr: ab(x.awayTeam), score: x.score?.fullTime?.away ?? null },
      }
    })
    .sort((a, b) => a.utcDate.localeCompare(b.utcDate))

  const standings: OutGroup[] = (s.standings || [])
    .filter((t) => t.type === 'TOTAL' && /^Group [A-L]$/.test(t.group || ''))
    .map((t) => ({
      group: (t.group || '').replace('Group ', '').replace('GROUP_', ''),
      table: t.table.map((r) => ({
        position: r.position,
        team: name(r.team),
        abbr: ab(r.team),
        played: r.playedGames,
        won: r.won,
        draw: r.draw,
        lost: r.lost,
        gf: r.goalsFor,
        ga: r.goalsAgainst,
        gd: r.goalDifference,
        points: r.points,
      })),
    }))

  const scorers: OutScorer[] = (sc.scorers || [])
    .filter((x) => x.player?.name)
    .map((x) => {
      const nm = x.player!.name as string
      return { name: nm, last: nm.split(' ').slice(-1)[0], team: x.team?.tla ?? '', goals: x.goals ?? 0, assists: x.assists ?? 0 }
    })

  return { matches, standings, scorers }
}

// ---- handler serverless (Vercel) ----
export default async function handler(_req: any, res: any) {
  const token = process.env.FOOTBALL_DATA_TOKEN
  if (!token) {
    res.status(500).json({ error: 'FOOTBALL_DATA_TOKEN ausente no ambiente' })
    return
  }
  try {
    const data = await fetchData(token)
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120')
    res.status(200).json(data)
  } catch (e) {
    res.status(502).json({ error: 'Falha ao consultar football-data', detail: String(e) })
  }
}
