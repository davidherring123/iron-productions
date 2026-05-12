# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # run ESLint
```

There is no test runner configured yet.

## Architecture

This is a **Next.js 16 App Router** project using TypeScript, Tailwind CSS v4, and React 19.

**Routing** lives entirely inside `app/`. Each folder becomes a route segment. `layout.tsx` wraps all pages; `page.tsx` is the leaf UI. Add new routes by creating `app/<segment>/page.tsx`.

**Styling** uses Tailwind CSS v4 configured via `@import "tailwindcss"` in `app/globals.css`. Theme tokens (`--font-sans`, `--font-mono`, `--color-background`, `--color-foreground`) are declared there under `@theme inline` and consumed as Tailwind utilities. Dark mode is handled via `prefers-color-scheme` CSS media query, not a class toggle.

**Fonts** are loaded with `next/font/google` in `app/layout.tsx` (Geist Sans + Geist Mono) and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`).

**Path alias**: `@/*` maps to the repo root (e.g. `@/app/...`, `@/components/...`).

**TypeScript** is strict mode with `moduleResolution: bundler`.

**ESLint** extends `eslint-config-next` (core-web-vitals + typescript rules). Run with `npm run lint`.
