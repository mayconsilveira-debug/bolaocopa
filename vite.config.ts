import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fetchData } from './api/_wc'

// Plugin que replica /api/matches durante `npm run dev`
// (o Vite não roda funções serverless; em produção a Vercel usa api/matches.ts).
function devMatchesApi(token: string): Plugin {
  return {
    name: 'dev-api-matches',
    configureServer(server) {
      const handler = async (req: any, res: any, next: any) => {
        if (!req.url || !req.url.startsWith('/api/wc')) return next()
        res.setHeader('Content-Type', 'application/json')
        if (!token) {
          res.statusCode = 500
          res.end(JSON.stringify({ error: 'FOOTBALL_DATA_TOKEN ausente no .env' }))
          return
        }
        try {
          const data = await fetchData(token)
          res.end(JSON.stringify(data))
        } catch (e: any) {
          res.statusCode = 502
          res.end(JSON.stringify({ error: String(e), cause: e?.cause?.code }))
        }
      }
      server.middlewares.use(handler)
      // garante prioridade sobre o middleware de transform do Vite
      const stack = (server.middlewares as any).stack
      stack.unshift(stack.pop())
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const token = env.FOOTBALL_DATA_TOKEN || process.env.FOOTBALL_DATA_TOKEN || ''
  return {
    plugins: [react(), devMatchesApi(token)],
  }
})
