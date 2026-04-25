# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

The project declares `pnpm@9.12.2` as package manager but the Dockerfile uses `npm`. Either works locally; Docker builds use `npm install --force`.

## Architecture

This is a **static marketing landing page** for the German lucid dreaming book "Kontrolliere Deine Träume" by Merten Dieckmann. It has no backend, no API routes, and no database — just a Next.js App Router site with PostHog analytics.

### Key pages

- `app/page.tsx` — The single home page, composed of sequential section components
- `app/impressum/page.tsx` — German legal disclosure page
- `app/sitemap.ts` / `app/robots.ts` — SEO auto-generation

### Component layout

`app/page.tsx` assembles sections in order:
`HeroSection → BookContentSection → TestimonialSection → FaqSection → AuthorSection → ConversionSection → Footer`

Each section is a standalone component in `components/`. The `components/ui/` subdirectory contains shadcn/ui primitives (Radix UI + Tailwind) — prefer extending these over writing new primitives.

### Styling

Tailwind CSS with a custom `cream` color (`#f5f0d9`) and HSL design tokens defined in `app/globals.css`. Custom fonts (Meethlake Three, Meethlake Two, Adorn Roman) are loaded from `/public/fonts` and referenced in `globals.css`.

The `cn()` helper from `lib/utils.ts` merges Tailwind classes — use it for conditional class logic.

### Analytics

PostHog is initialized in `app/providers.tsx` (EU instance for GDPR compliance) and wrapped around the app in `app/layout.tsx`. The `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` env vars must be set for analytics to work.

### Environment variables

```
NEXT_PUBLIC_POSTHOG_KEY=       # PostHog project key
NEXT_PUBLIC_POSTHOG_HOST=      # https://eu.i.posthog.com
NEXT_PUBLIC_APP_URL=           # Canonical URL, used in metadata baseUrl
```

See `.env.example` for reference.

### Deployment

Docker builds pass env vars as build args:
```dockerfile
ARG NEXT_PUBLIC_POSTHOG_KEY
ARG NEXT_PUBLIC_POSTHOG_HOST
ARG NEXT_PUBLIC_APP_URL
```
Images are unoptimized (`next.config.mjs`) — no Next.js Image Optimization server is required.
