export type Brand = "creative" | "cx" | "health";

const brandNames: Record<Brand, string> = {
  creative: "Havas Creative Network",
  cx: "Havas CX",
  health: "Havas Health Network",
};

const brandLogos: Record<Brand, string> = {
  creative: `
    <span class="brand-lockup brand-lockup--creative" aria-hidden="true">
      <img src="/assets/creative/logo-havas.svg" alt="" />
      <span>
        <img src="/assets/creative/logo-creative.svg" alt="" />
        <img src="/assets/creative/logo-network.svg" alt="" />
      </span>
    </span>`,
  cx: `<img class="brand-lockup brand-lockup--cx" src="/assets/cx/logo.svg" alt="" />`,
  health: `
    <span class="brand-lockup brand-lockup--health" aria-hidden="true">
      <img src="/assets/health/logo.svg" alt="" />
      <img src="/assets/health/logo-lockup.svg" alt="" />
    </span>`,
};

export function siteHeader(brand: Brand): string {
  return `
    <header class="site-header site-header--${brand}">
      <a class="site-header__brand" href="/${brand}" aria-label="${brandNames[brand]} home">
        ${brandLogos[brand]}
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu">
        <img src="/assets/${brand}/menu.svg" alt="" />
        <span class="sr-only">Open menu</span>
      </button>
      <nav class="site-menu" id="site-menu" aria-label="PoC pages">
        <a href="/creative">Creative</a>
        <a href="/cx">CX</a>
        <a href="/health">Health</a>
      </nav>
    </header>`;
}

export function buttonLink(
  label: string,
  href = "#",
  secondary = false,
): string {
  return `<a class="button-link${secondary ? " button-link--secondary" : ""}" href="${href}">${label}<span aria-hidden="true">→</span></a>`;
}

export interface WorkItem {
  image: string;
  title: string;
  agency: string;
  client: string;
  wide?: boolean;
}

export function workCard(item: WorkItem): string {
  return `
    <article class="work-card${item.wide ? " work-card--wide" : ""}">
      <div class="work-card__media"><img src="${item.image}" alt="" loading="lazy" /></div>
      <h3>${item.title}</h3>
      <p><span>${item.agency}</span><span aria-hidden="true">—</span>${item.client}</p>
    </article>`;
}

export function stats(items: ReadonlyArray<readonly [string, string]>): string {
  return `<dl class="stats">${items
    .map(([value, label]) => `<div><dt>${value}</dt><dd>${label}</dd></div>`)
    .join("")}</dl>`;
}

export function footer(brand: Brand, office: string, contact: string): string {
  return `
    <footer class="site-footer" data-token-theme="${brand === "health" ? "health-white" : `${brand}-black`}">
      <div class="site-footer__top">
        <a class="site-footer__brand" href="/${brand}" aria-label="${brandNames[brand]} home">${brandLogos[brand]}</a>
        <a class="back-to-top" href="#top" aria-label="Back to top">↑</a>
      </div>
      <div class="site-footer__columns">
        <section><h2>Global Head Office</h2><p>${office}</p></section>
        <section><h2>Careers</h2><p>Want to join us?</p><a href="#careers">View jobs ↗</a></section>
        <section><h2>Contact</h2><p>New Business</p><a href="mailto:${contact}">${contact}</a></section>
      </div>
      <div class="site-footer__bottom">
        <nav aria-label="Havas network pages"><a href="/creative">Creative</a><a href="/cx">CX</a><a href="/health">Health</a></nav>
        <p>© 2026 ${brandNames[brand]}</p>
      </div>
    </footer>`;
}

export function stickyContact(label: string, email: string): string {
  return `<a class="sticky-contact" href="mailto:${email}"><span aria-hidden="true">•••</span>${label}</a>`;
}
