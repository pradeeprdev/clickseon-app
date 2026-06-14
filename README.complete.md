# Clickseon — Public Site (clickseon-app)

Marketing/public-facing site built with Next.js.

## Quick summary
- Framework: Next.js
- Purpose: marketing site, public pages, contact form

## Prerequisites
- Node.js 18+
- npm, yarn or pnpm

## Setup & run (local)

```bash
cd clickseon-app
npm install
npm run dev
# open http://localhost:3000
```

## Environment
- This site may not require server secrets for basic static content, but if it posts leads to the API, ensure `NEXT_PUBLIC_API_URL` is set when needed.

## Scripts
- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm start` — start production server (after `build`)

## Project structure
- `app/` — Next.js routes
- `components/` — UI pieces (Navbar, Hero, Footer, ServiceCard, etc.)
- `sections/` — page sections used by landing pages
- `services/` — client code for posting leads or contacting the API

## Deployment
- Recommended: Vercel. Configure environment variables in the deployment if the site calls the API.

## Contributing
- Create feature branches, add accessibility-minded UI, include screenshots in PRs.
