// Tipos + dados de FALLBACK (usados quando /api/wc não responde,
// ex.: rodando sem token). Em produção os dados vêm ao vivo do football-data.org.
export interface Side {
  team: string
  abbr: string
  score: number | null
}
export interface Match {
  id: number
  time: string
  date: string
  utcDate: string
  group: string
  round: string
  stage: string
  winner: string | null
  status: 'live' | 'scheduled' | 'finished'
  home: Side
  away: Side
}
export interface Scorer { name: string; last: string; team: string; goals: number; assists: number }
export interface Row {
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
export interface GroupStanding {
  group: string
  table: Row[]
}
export interface WcData {
  matches: Match[]
  standings: GroupStanding[]
  scorers: Scorer[]
}

export const fallback: WcData = {
  matches: [
    {
      id: 1, time: '13:00', date: '15/06', utcDate: '2026-06-15T16:00:00Z',
      group: 'C', round: 'Rodada 1', stage: 'GROUP_STAGE', winner: null, status: 'finished',
      home: { team: 'Brasil', abbr: 'BRA', score: 1 }, away: { team: 'Marrocos', abbr: 'MAR', score: 1 },
    },
    {
      id: 2, time: '16:00', date: '15/06', utcDate: '2026-06-15T19:00:00Z',
      group: 'G', round: 'Rodada 1', stage: 'GROUP_STAGE', winner: null, status: 'live',
      home: { team: 'Bélgica', abbr: 'BEL', score: 0 }, away: { team: 'Egito', abbr: 'EGY', score: 1 },
    },
    {
      id: 3, time: '19:00', date: '15/06', utcDate: '2026-06-15T22:00:00Z',
      group: 'H', round: 'Rodada 1', stage: 'GROUP_STAGE', winner: null, status: 'scheduled',
      home: { team: 'Arábia Saudita', abbr: 'KSA', score: null }, away: { team: 'Uruguai', abbr: 'URY', score: null },
    },
  ],
  standings: [],
  scorers: [],
}
