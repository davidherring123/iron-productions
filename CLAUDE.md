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

## Section Background Rotation

All sections rotate through **Cream → Dark → White** in order. The Hero is a special split section (cream left / dark right) but counts as **Cream** in the rotation. The Header (fixed nav) starts transparent and fades to Cream on scroll.

Current sequence:

| #  | Section          | Background                         | Token          |
|----|------------------|------------------------------------|----------------|
| 1  | Header           | Cream (on scroll, transparent atop)| `bg-background`|
| 2  | Hero             | Cream (split w/ Dark)              | `bg-background`|
| 3  | OurWork          | Dark                               | `bg-foreground`|
| 4  | BuiltForYou      | White                              | `bg-white`     |
| 5  | Pricing          | Cream                              | `bg-background`|
| 6  | RetainerMinimum  | White (special — skipped in cycle) | `bg-white`     |
| 7  | HowItWorks       | Dark                               | `bg-foreground`|
| 8  | About            | White                              | `bg-white`     |
| 9  | CTABanner        | Dark (special — skipped in cycle)  | `bg-foreground`|
| 10 | Contact          | Cream                              | `bg-background`|
| 11 | Footer           | Dark                               | `bg-foreground`|

RetainerMinimum is a special mini-section inserted between Pricing and HowItWorks. It uses White but is **excluded from the rotation cycle** — HowItWorks stays Dark as if it directly follows Pricing (Cream → Dark).

CTABanner is a special full-bleed dark section inserted between About and Contact. It is **excluded from the rotation cycle** — Contact stays Cream as if it directly follows About (White → Cream).

When adding or removing a section, shift every subsequent section's background one step in the cycle to maintain the pattern. Update text/element colors to match (light text on Dark, dark text on White/Cream).

## Section Vertical Rhythm

All `<section>` elements use **`py-24`**. The `<footer>` is intentionally tighter (`py-16`) because it's terminal content, not a section.

## Tokens & Shared Primitives

Single-source-of-truth modules — prefer these over inline values:

- **`lib/constants.ts`** — `COLORS`, `COMPANY` (brand strings), `LAYOUT` (scroll threshold, logo dimensions), `ICONS` (SVG stroke color/width/size), and all content arrays (`STATS`, `PAIN_POINTS`, `PRICING_TIERS`, `HOW_IT_WORKS_STEPS`, `CONTACT_PACKAGES`).
- **`lib/animations.ts`** — `fadeUp`, `stagger`, `headerSlideIn`, `EASE_HEADER_IN`, `defaultViewport`, `tightViewport`.
- **`app/globals.css`** — color tokens declared under `@theme inline` (`--color-background`, `--color-foreground`, `--color-muted`, `--color-divider`, `--color-gold`, `--color-icon-bg`). Consume via Tailwind utilities (`bg-foreground`, `text-gold`, `bg-icon-bg`). Never hardcode hex.
- **`components/ui/`** — shared primitives: `SectionEyebrow` (gold accent bar + uppercase label), `Button` (variants: `primary` / `accent`; sizes: `sm` / `md` / `lg`; optional `fullWidth`), `FormField` (labeled input/select/textarea with paired `htmlFor`/`id`), `PainPointIcons` (icon-name → SVG map).
