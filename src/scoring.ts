import type { Participant } from './data'
import type { GroupStanding, Match, Scorer } from './wc-data'

// ---------- util ----------
function norm(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()
}

// ---------- I. fase de grupos (regulamento) ----------
// posição exata = 2 pts | time certo, posição trocada = 1 pt
export function groupBreakdown(p: Participant, standings: GroupStanding[]) {
  const by: Record<string, GroupStanding> = {}
  standings.forEach((s) => { by[s.group] = s })

  let pts = 0
  const detail = p.groupPicks.map((pick) => {
    const st = by[pick.g]
    const r1 = st?.table[0]?.abbr
    const r2 = st?.table[1]?.abbr
    let pa = 0
    let pb = 0
    if (st && st.table.length >= 2) {
      if (pick.a === r1) pa = 2; else if (pick.a === r2) pa = 1
      if (pick.b === r2) pb = 2; else if (pick.b === r1) pb = 1
    }
    pts += pa + pb
    return { group: pick.g, a: pick.a, b: pick.b, pa, pb, hasData: !!(st && st.table.length >= 2) }
  })
  return { points: pts, detail }
}

export function groupPoints(p: Participant, standings: GroupStanding[]): number {
  return groupBreakdown(p, standings).points
}

// ---------- II. artilheiro (5 pts no fim + 1 por gol do escolhido) ----------
function findPlayer(name: string, scorers: Scorer[]): Scorer | undefined {
  if (!name) return undefined
  const full = norm(name)
  const last = norm(name.split(' ').slice(-1)[0])
  return scorers.find((s) => norm(s.name) === full || norm(s.last) === last)
}

export function scorerGoals(p: Participant, scorers: Scorer[]): number {
  return findPlayer(p.scorer, scorers)?.goals ?? 0
}

// estatística do melhor jogador escolhido: gols + assistências (indicador de craque)
export function playerStats(name: string, scorers: Scorer[]): { goals: number; assists: number; ga: number } {
  const hit = findPlayer(name, scorers)
  const goals = hit?.goals ?? 0
  const assists = hit?.assists ?? 0
  return { goals, assists, ga: goals + assists }
}

// ---------- país campeão (por fase alcançada; não acumulativo) ----------
const PHASE_PTS: Record<string, number> = {
  LAST_32: 1, LAST_16: 2, QUARTER_FINALS: 4, SEMI_FINALS: 6, FINAL: 8,
}
const PHASE_LABEL: Record<string, string> = {
  GROUP_STAGE: 'fase de grupos', LAST_32: '16 avos', LAST_16: 'oitavas',
  QUARTER_FINALS: 'quartas', SEMI_FINALS: 'semifinal', FINAL: 'final',
}

export interface ChampStatus {
  team: string
  abbr: string
  status: 'vivo' | 'eliminado' | 'campeao' | 'pendente'
  phase: string
  note: string // descrição amigável de como o país está indo
  points: number
}

function ordinal(n: number): string {
  return `${n}º`
}

export function championStatus(p: Participant, matches: Match[], standings: GroupStanding[]): ChampStatus {
  const target = norm(p.champion)
  let abbr = ''
  for (const m of matches) {
    if (norm(m.home.team) === target) { abbr = m.home.abbr; break }
    if (norm(m.away.team) === target) { abbr = m.away.abbr; break }
  }
  const base: ChampStatus = { team: p.champion, abbr, status: 'pendente', phase: '', note: 'Aguardando', points: 0 }
  if (!abbr) return base

  const mine = matches.filter((m) => m.home.abbr === abbr || m.away.abbr === abbr)
  const ko = mine.filter((m) => m.stage !== 'GROUP_STAGE' && m.stage !== '')
  const finished = mine.filter((m) => m.status === 'finished')

  // venceu a final?
  const final = ko.find((m) => m.stage === 'FINAL' && m.status === 'finished')
  if (final && final.winner === abbr) {
    return { ...base, status: 'campeao', phase: 'campeão', note: 'Campeão! 🏆', points: 12 }
  }

  // perdeu algum mata-mata?
  const lost = ko
    .filter((m) => m.status === 'finished' && m.winner && m.winner !== abbr)
    .sort((a, b) => (PHASE_PTS[b.stage] ?? 0) - (PHASE_PTS[a.stage] ?? 0))[0]
  if (lost) {
    const pts = lost.stage === 'FINAL' ? 8 : (PHASE_PTS[lost.stage] ?? 0)
    const ph = PHASE_LABEL[lost.stage] ?? lost.stage
    return { ...base, status: 'eliminado', phase: ph, note: `Eliminada nas ${ph}`, points: pts }
  }

  // classificada ao mata-mata e ainda viva
  if (ko.length) {
    const reached = ko.sort((a, b) => (PHASE_PTS[b.stage] ?? 0) - (PHASE_PTS[a.stage] ?? 0))[0]
    return { ...base, status: 'vivo', phase: 'classificado', note: `Classificada · ${PHASE_LABEL[reached.stage] ?? reached.stage}`, points: 0 }
  }

  // fase de grupos: posição atual no grupo
  let pos = 0
  let grp = ''
  for (const s of standings) {
    const idx = s.table.findIndex((r) => r.abbr === abbr)
    if (idx >= 0) { pos = idx + 1; grp = s.group; break }
  }
  const groupGames = finished.filter((m) => m.stage === 'GROUP_STAGE')

  // já jogou os 3 da fase de grupos e não ficou no top 2 -> eliminada
  if (groupGames.length >= 3 && pos > 2) {
    return { ...base, status: 'eliminado', phase: 'fase de grupos', note: 'Eliminada na fase de grupos', points: -2 }
  }

  if (pos) {
    const zona = pos <= 2 ? ' · zona de classificação' : ' · fora do top 2'
    return { ...base, status: 'vivo', phase: 'grupos', note: `${ordinal(pos)} do Grupo ${grp}${zona}`, points: 0 }
  }
  return { ...base, status: 'vivo', note: 'Fase de grupos', points: 0 }
}

// ---------- total por participante ----------
export interface Score {
  group: number
  scorer: number // gols do artilheiro escolhido (1 pt cada)
  champion: number
  total: number
  champ: ChampStatus
  goals: number
}

export function totalScore(p: Participant, standings: GroupStanding[], matches: Match[], scorers: Scorer[]): Score {
  const group = groupPoints(p, standings)
  const goals = scorerGoals(p, scorers)
  const champ = championStatus(p, matches, standings)
  return {
    group,
    scorer: goals, // +1 por gol; o +5 (acertar o artilheiro) entra no fim da Copa
    champion: champ.points,
    goals,
    champ,
    total: group + goals + champ.points,
  }
}
