import "@ekinotech/design-tokens-havas-network/creative-black.css";
import "@ekinotech/design-tokens-havas-network/creative-gradient.css";
import "@ekinotech/design-tokens-havas-network/creative-white.css";
import "@ekinotech/design-tokens-havas-network/cx-black.css";
import "@ekinotech/design-tokens-havas-network/cx-white.css";
import "@ekinotech/design-tokens-havas-network/health-off-white.css";
import "@ekinotech/design-tokens-havas-network/health-red.css";
import "@ekinotech/design-tokens-havas-network/health-white.css";
import "./styles/main.scss";

import { bindBlockInteractions } from "./blocks/interactions";
import type { Brand, PageDefinition } from "./blocks/model";
import { renderPage } from "./blocks/page-shell";
import { creativePage } from "./pages/creative";
import { cxPage } from "./pages/cx";
import { healthPage } from "./pages/health";

const app = document.querySelector<HTMLDivElement>("#app") ?? failMissingApp();

const pages: Partial<Record<string, PageDefinition<Brand>>> = {
  "/creative": creativePage,
  "/cx": cxPage,
  "/health": healthPage,
};

function failMissingApp(): never {
  throw new Error("The #app mount point is missing.");
}

function indexPage(): string {
  return `<main class="index-page"><div><p>Havas Network</p><h1>One token package.<br />Three distinct brands.</h1><nav aria-label="Brand landing pages"><a href="/creative">Havas Creative <span>→</span></a><a href="/cx">Havas CX <span>→</span></a></nav></div></main>`;
}

function render(): void {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const page = pages[path];
  app.innerHTML = page ? renderPage(page) : indexPage();
  document.body.dataset.brand = page?.brand ?? "index";
  document.title = page?.title ?? "Havas Network — Design Token PoC";
  bindBlockInteractions();
}

render();
