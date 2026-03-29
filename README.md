# Ikara Club UI

Front-end for [Ikara.Club](https://ikara.club)—a marketing and product experience positioned as digital architecture for human practice: boutique partnerships with elite coaches and studios in yoga, mindfulness, meditation, and high-end fitness.

## Stack

- **Framework:** [Next.js](https://nextjs.org/) 15 (Pages Router), React 18, TypeScript
- **Styling:** Tailwind CSS, `tailwindcss-animate`, custom layout tokens in global CSS
- **UI:** Radix UI primitives and shadcn-style components (`src/components/ui/`)
- **Motion:** Framer Motion, scroll-driven sections on the home page
- **Theming:** `next-themes` with a shared `ThemeProvider`
- **Payments (dependencies):** Stripe client packages are included for flows that need them; wire keys when those features are enabled
- **Tooling:** ESLint (Next.js config), optional `@softgenai/element-tagger` in dev for Turbopack (see `next.config.mjs`)

## Prerequisites

- Node.js 18+ (20+ recommended for Next.js 15)
- npm

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Dev uses Turbopack (`next dev --turbopack`).

### Other scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Development server       |
| `npm run build` | Production build        |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint               |

## Project layout

| Path | Purpose |
| ---- | ------- |
| `src/pages/` | Routes and `_app` / `_document` |
| `src/components/` | Layout, SEO, hero, navigation, footer, and UI primitives |
| `src/contexts/` | React context (e.g. theme) |
| `src/hooks/` | Shared hooks |
| `src/lib/` | Utilities (`cn`, etc.) |
| `src/styles/globals.css` | Global styles and design tokens |
| `public/` | Static assets (images, favicon, OG image) |

## Routes (overview)

| Path | Page |
| ---- | ---- |
| `/` | Home—hero, alignment narrative, capabilities |
| `/method` | Method |
| `/alignment` | Alignment |
| `/tiers` | Tiers |
| `/case-studies` | Case studies |
| `/schedule` | Schedule |
| `/signup` | Signup |
| `/dashboard` | Dashboard |
| `/why-templates-fail` | Why templates fail |
| `/api/hello` | Sample API route |

## Deployment

The repo includes `vercel.json` for [Vercel](https://vercel.com/) deployments. A typical flow is: connect the GitHub repo, use the default Next.js settings, and deploy from `main`.

For local process management during development, `ecosystem.config.js` provides a minimal PM2 config that runs `npm run dev`.

## License

Private project (`"private": true` in `package.json`). All rights reserved unless otherwise stated by the owners.
