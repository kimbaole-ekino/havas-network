import "@ekinotech/design-tokens-havas-network/creative-black-desktop.css";
import "@ekinotech/design-tokens-havas-network/creative-black-mobile.css";
import "@ekinotech/design-tokens-havas-network/creative-gradient-desktop.css";
import "@ekinotech/design-tokens-havas-network/creative-gradient-mobile.css";
import "@ekinotech/design-tokens-havas-network/creative-white-desktop.css";
import "@ekinotech/design-tokens-havas-network/creative-white-mobile.css";
import "@ekinotech/design-tokens-havas-network/cx-black-desktop.css";
import "@ekinotech/design-tokens-havas-network/cx-black-mobile.css";
import "@ekinotech/design-tokens-havas-network/cx-white-desktop.css";
import "@ekinotech/design-tokens-havas-network/cx-white-mobile.css";
import "@ekinotech/design-tokens-havas-network/health-off-white-desktop.css";
import "@ekinotech/design-tokens-havas-network/health-off-white-mobile.css";
import "@ekinotech/design-tokens-havas-network/health-red-desktop.css";
import "@ekinotech/design-tokens-havas-network/health-red-mobile.css";
import "@ekinotech/design-tokens-havas-network/health-white-desktop.css";
import "@ekinotech/design-tokens-havas-network/health-white-mobile.css";
import "./styles/main.scss";

import { creativePage } from "./pages/creative";
import { cxPage } from "./pages/cx";
import { healthPage } from "./pages/health";

const app = document.querySelector<HTMLDivElement>("#app") ?? failMissingApp();

const pages: Partial<Record<string, () => string>> = {
  "/creative": creativePage,
  "/cx": cxPage,
  "/health": healthPage,
};

function failMissingApp(): never {
  throw new Error("The #app mount point is missing.");
}

function indexPage(): string {
  return `<main class="index-page"><div><p>Havas Network</p><h1>One token package.<br />Three distinct brands.</h1><nav aria-label="Brand landing pages"><a href="/creative">Havas Creative <span>→</span></a><a href="/cx">Havas CX <span>→</span></a><a href="/health">Havas Health <span>→</span></a></nav></div></main>`;
}

function render(): void {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const page = pages[path];
  app.innerHTML = page ? page() : indexPage();
  document.body.dataset.brand = path.slice(1) || "index";
  document.title = page
    ? `Havas ${path === "/cx" ? "CX" : path.slice(1).replace(/^./, (character) => character.toUpperCase())} — Design Token PoC`
    : "Havas Network — Design Token PoC";
  applyViewportSchemes();
  bindMenu();
}

function applyViewportSchemes(): void {
  const viewport = window.matchMedia("(max-width: 840px)").matches
    ? "mobile"
    : "desktop";
  document
    .querySelectorAll<HTMLElement>("[data-token-theme]")
    .forEach((element) => {
      element.dataset.colorScheme = `${element.dataset.tokenTheme}-${viewport}`;
    });
}

function bindMenu(): void {
  const button = document.querySelector<HTMLButtonElement>(".menu-toggle");
  const menu = document.querySelector<HTMLElement>(".site-menu");
  if (!button || !menu) return;
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("site-menu--open", !expanded);
  });
}

window
  .matchMedia("(max-width: 840px)")
  .addEventListener("change", applyViewportSchemes);
render();
