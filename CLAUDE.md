# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workspace structure

This workspace contains one sub-project with its own git repo:

- **`mcc-landing/`** — Next.js 16 landing page for MultiChannelConsult (MCC)

Root-level image/video files (`*.png`, `MCC-Animation.mp4`) are assets for the landing page.

---

## mcc-landing

A single-page marketing site for MultiChannelConsult built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

### Commands

```bash
cd mcc-landing
npm run dev      # dev server (Next.js with Turbopack)
npm run build    # production build
npm run lint     # ESLint
```

### Architecture

- **App Router** with a single route: `src/app/page.tsx` assembles all section components in order.
- **All copy/content** lives in `src/lib/content.ts` — edit text there, not inside components.
- **Components** in `src/components/` are purely presentational; each maps to one page section (Hero, Challenge, Services, etc.).
- **Environment variables** for runtime config:
  - `NEXT_PUBLIC_CONTACT_EMAIL` — defaults to `info@multichannelconsult.de`
  - `NEXT_PUBLIC_BOOKING_URL` — defaults to empty string

### Important: Next.js 16 breaking changes

Next.js 16 has breaking changes vs. earlier versions. Before writing or modifying any Next.js-specific code (routing, data fetching, server components, image optimization), read the relevant guide in `node_modules/next/dist/docs/`. Do not assume Next.js 13–15 conventions apply.

- React Compiler is enabled (`reactCompiler: true` in `next.config.ts`) — avoid manual `useMemo`/`useCallback` unless the compiler cannot infer it.
- Tailwind CSS v4 (PostCSS-based, no `tailwind.config.*` file).
