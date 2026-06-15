import { useEffect, useState } from 'react'
import { fallback, type WcData } from './wc-data'

// Busca jogos + classificação de /api/wc. Cai no fallback estático se a API falhar.
export function useWc() {
  const [data, setData] = useState<WcData>(fallback)
  const [live, setLive] = useState(false)

  useEffect(() => {
    let alive = true
    let tries = 0
    let retry: ReturnType<typeof setTimeout>

    const load = async () => {
      try {
        const r = await fetch('/api/wc')
        if (!r.ok) throw new Error(String(r.status))
        const d: WcData = await r.json()
        if (alive && Array.isArray(d.matches) && d.matches.length) {
          setData(d)
          setLive(true)
          tries = 0
        }
      } catch {
        // falha transitória (rate limit/rede) — tenta de novo, sem derrubar a sessão
        if (alive && tries < 5) {
          tries += 1
          retry = setTimeout(load, 4000)
        }
      }
    }

    load()
    // atualiza a cada 60s (mantém placares ao vivo e recupera a conexão sozinho)
    const interval = setInterval(load, 60000)

    return () => {
      alive = false
      clearTimeout(retry)
      clearInterval(interval)
    }
  }, [])

  return { data, live }
}

// ---- helpers de data/seleção ----
const TZ = 'America/Sao_Paulo'
export function brDay(iso: string): string {
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', timeZone: TZ })
}

// Jogos do dia (hoje). Se não houver, pega o próximo dia com jogos.
export function gamesOfDay(matches: WcData['matches']): { label: string; games: WcData['matches'] } {
  if (!matches.length) return { label: '', games: [] }
  const todayKey = new Date().toLocaleDateString('en-CA', { timeZone: TZ }) // YYYY-MM-DD
  const key = (iso: string) => new Date(iso).toLocaleDateString('en-CA', { timeZone: TZ })

  let day = matches.filter((m) => key(m.utcDate) === todayKey)
  if (day.length) return { label: 'Hoje', games: day }

  const now = Date.now()
  const future = matches.filter((m) => new Date(m.utcDate).getTime() >= now)
  if (!future.length) return { label: '', games: [] }
  const nextKey = key(future[0].utcDate)
  day = matches.filter((m) => key(m.utcDate) === nextKey)
  return { label: day[0]?.date ?? '', games: day }
}

// Jogos do PRÓXIMO dia com partidas (estritamente depois de hoje).
export function nextDayGames(matches: WcData['matches']): { label: string; games: WcData['matches'] } {
  if (!matches.length) return { label: '', games: [] }
  const key = (iso: string) => new Date(iso).toLocaleDateString('en-CA', { timeZone: TZ })
  const todayKey = new Date().toLocaleDateString('en-CA', { timeZone: TZ })

  const futureKeys = matches.map((m) => key(m.utcDate)).filter((k) => k > todayKey).sort()
  if (!futureKeys.length) return { label: '', games: [] }
  const nextKey = futureKeys[0]
  const games = matches.filter((m) => key(m.utcDate) === nextKey)
  return { label: games[0]?.date ?? '', games }
}
