// Função serverless (Vercel) — proxy para football-data.org.
// Token no ambiente (FOOTBALL_DATA_TOKEN). Endpoint do front: GET /api/wc
import { fetchData } from './_wc'

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
