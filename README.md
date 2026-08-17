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

- Vite renders semantic HTML from small TypeScript page modules. No UI framework or router is used.
- SCSS owns responsive composition. JavaScript only switches desktop/mobile token contexts and controls the small menu.
- All 16 package CSS exports are imported once in `src/main.ts`. Each section declares its brand and background context, such as `creative-black` or `health-off-white`; TypeScript adds the current `desktop` or `mobile` suffix.
- Baikal fonts come from the supplied production source. Page images and logo vectors are stable local copies of the supplied Figma assets.
