# Shaun Han Portfolio (Next.js)

This portfolio has been migrated from Vite React SPA to **Next.js App Router** for better crawlability and data extraction.

## Stack

- Next.js 14 (App Router)
- React 18
- lucide-react
- Global CSS (`app/globals.css`)

## Project Structure

- `app/layout.jsx`: Root layout + metadata
- `app/page.jsx`: Homepage route
- `app/globals.css`: Global styles
- `src/components/PortfolioPage.jsx`: Main portfolio UI (client component)
- `public/logos/*`: Partner logos/assets

## Run

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

## Why Next.js

Compared with React SPA, Next.js improves:

- HTML-first rendering for search bots
- SEO metadata support
- Better compatibility with content crawlers
- Cleaner path to SSG/SSR per page

## Notes

If you previously deployed with GitHub Pages + Vite `dist`, prefer deploying this Next.js project to **Vercel** for full SSR/SEO benefits.
