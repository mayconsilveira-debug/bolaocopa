# Bolão da Copa 2026

Dashboard do bolão da Copa do Mundo 2026 — Vite + React + TypeScript, design system Lamborghini (preto/amarelo).
Jogos ao vivo, classificação, artilheiros e ranking dos participantes via [football-data.org](https://www.football-data.org).

## Rodar localmente

```bash
npm install
cp .env.example .env      # cole seu token em FOOTBALL_DATA_TOKEN
npm run dev
```

Abre em `http://localhost:5173`. A rota `/api/wc` é servida pelo plugin de dev (lê o `.env`).

## Token da API

1. Registre em https://www.football-data.org/client/register (plano free).
2. Coloque o token recebido em `FOOTBALL_DATA_TOKEN` (no `.env` local e nas variáveis do host).
3. Plano free: competição `WC`, limite ~10 req/min (o app já tem cache de 60s + retry).

## Deploy na Vercel

1. **Importar:** vercel.com → *Add New → Project* → importe o repositório `bolaocopa`.
2. **Framework:** Vercel detecta **Vite** automaticamente (build `npm run build`, saída `dist`).
   A pasta `api/` vira função serverless (`/api/wc`) sem configuração extra.
3. **Variável de ambiente:** *Settings → Environment Variables* → adicione:
   - **Name:** `FOOTBALL_DATA_TOKEN`
   - **Value:** seu token da football-data
   - **Environments:** Production, Preview e Development
4. **Deploy / Redeploy.** Pronto — os placares vêm ao vivo.

> Importante: o `.env` **não** vai pro Git (está no `.gitignore`). O token precisa ser configurado no painel da Vercel.

## Estrutura

- `src/pages/` — Home, Regulamento, Classificação do Bolão, Grupos & Jogos
- `src/scoring.ts` — pontuação ao vivo (grupos + artilheiro + país campeão)
- `src/data.ts` — palpites dos 71 participantes (gerado da planilha)
- `api/wc.ts` + `api/_wc.ts` — função serverless que consulta a football-data
