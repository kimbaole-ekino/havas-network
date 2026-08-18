# Havas Network design-token PoC

Three responsive landing pages show how one published package, `@ekinotech/design-tokens-havas-network`, supports distinct Havas brand experiences.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, then use one of these routes:

- `/creative` — Havas Creative
- `/cx` — Havas CX
- `/health` — Havas Health
- `/` — simple route index

## Checks

```sh
npm run format:check
npm run typecheck
npm run build
```

## Implementation notes

- Vite renders semantic HTML from typed block definitions. No UI framework or router is used.
- Files in `src/pages/` contain content, brand, theme, and meaningful block variants. Shared renderers in `src/blocks/` own the HTML structure.
- SCSS owns component layout, typography, and responsive behavior. The only page interaction is the pointer effect on the Creative gradient capabilities block.
- The responsive package exports are imported once in `src/main.ts`. Each section uses a stable brand-theme context, such as `creative-gradient` or `health-off-white`; viewport names are not part of the theme.
- Every page is contained by a centered `site-canvas` with a maximum width of 1440px. Inner layout uses the grid values supplied by the token package.
- Baikal fonts and fallback posters are local. The landing pages use current public production media URLs for videos, content images, and award logos.
- Creative and CX content comes from their live sites. Health staging was accessible during implementation, so Health also uses its current staging content and media.
