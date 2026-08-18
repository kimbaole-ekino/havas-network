import { escapeHtml, renderLink, renderRichText } from "./html";
import type {
  ActionBannerBlock,
  Brand,
  CapabilitiesBlock,
  HealthAgenciesBlock,
  HealthPurposeBlock,
  HeroBlock,
  MediaConfig,
  LogoGridBlock,
  MediaTextBlock,
  NetworkStatsBlock,
  PageBlock,
  SiteHeaderConfig,
  StatementBlock,
  ThemeFor,
  WorkItemConfig,
  WorkGridBlock,
} from "./model";

const brandNames: Record<Brand, string> = {
  creative: "Havas Creative Network",
  cx: "Havas CX",
  health: "Havas Health Network",
};

function brandLogo(brand: Brand): string {
  if (brand === "creative") {
    return `<span class="brand-lockup brand-lockup--creative" aria-hidden="true"><img src="/assets/creative/logo-havas.svg" alt="" /><span><img src="/assets/creative/logo-creative.svg" alt="" /><img src="/assets/creative/logo-network.svg" alt="" /></span></span>`;
  }

  if (brand === "cx") {
    return `<img class="brand-lockup brand-lockup--cx" src="/assets/cx/logo.svg" alt="" />`;
  }

  return `<span class="brand-lockup brand-lockup--health" aria-hidden="true"><img src="/assets/health/logo.svg" alt="" /><img src="/assets/health/logo-lockup.svg" alt="" /></span>`;
}

export function renderSiteHeader(
  brand: Brand,
  config: SiteHeaderConfig,
): string {
  return `<header class="site-header"><a class="site-header__brand" href="/${brand}" aria-label="${escapeHtml(config.homeLabel)}">${brandLogo(brand)}</a></header>`;
}

function renderMedia(media: MediaConfig, lazy = false): string {
  if (media.video) {
    const video = media.video;
    const attributes = [
      video.poster ? `poster="${escapeHtml(video.poster)}"` : "",
      video.autoplay ? "autoplay" : "",
      video.muted ? "muted" : "",
      video.loop ? "loop" : "",
      video.playsinline ? "playsinline" : "",
    ]
      .filter(Boolean)
      .join(" ");
    const fallback = media.image
      ? `<img src="${escapeHtml(media.image.src)}" alt="${escapeHtml(media.image.alt)}" />`
      : "";
    return `<video${attributes ? ` ${attributes}` : ""} preload="metadata"><source src="${escapeHtml(video.src)}"${video.type ? ` type="${escapeHtml(video.type)}"` : ""} />${fallback}</video>`;
  }

  if (media.image) {
    return `<img src="${escapeHtml(media.image.src)}" alt="${escapeHtml(media.image.alt)}"${lazy ? ' loading="lazy"' : ""} />`;
  }

  return "";
}

function renderHero<B extends Brand>(
  brand: B,
  block: HeroBlock<B>,
  header: SiteHeaderConfig,
): string {
  const content =
    block.heading || block.body || block.actions
      ? `<div class="hero__content site-container">${block.eyebrow ? `<p class="eyebrow">${escapeHtml(block.eyebrow)}</p>` : ""}${block.heading ? `<h1>${renderRichText(block.heading)}</h1>` : ""}${block.body ? `<p class="hero__body">${escapeHtml(block.body)}</p>` : ""}${block.actions ? `<div class="button-group">${block.actions.map(renderLink).join("")}</div>` : ""}</div>`
      : block.eyebrow
        ? `<p class="hero__label">${escapeHtml(block.eyebrow)}</p>`
        : "";

  return `<section class="hero hero--${block.variant}"${sectionAttributes(brand, block.theme, block.id)}>${renderSiteHeader(brand, header)}<div class="hero__media">${renderMedia(block.media)}</div>${content}</section>`;
}

function renderStatement<B extends Brand>(
  brand: B,
  block: StatementBlock<B>,
): string {
  const headingTag = block.headingLevel === 1 ? "h1" : "h2";
  return `<section class="statement statement--${block.variant}"${sectionAttributes(brand, block.theme, block.id)}><div class="site-container statement__grid">${block.eyebrow ? `<p class="eyebrow">${escapeHtml(block.eyebrow)}</p>` : ""}<div><${headingTag}>${renderRichText(block.heading)}</${headingTag}>${block.action ? renderLink(block.action) : ""}</div></div></section>`;
}

function renderWorkGrid<B extends Brand>(
  brand: B,
  block: WorkGridBlock<B>,
): string {
  const cards = block.items.map(renderWorkCard).join("");
  return `<section class="work-grid-block"${sectionAttributes(brand, block.theme, block.id)}><div class="site-container block-intro"><h2>${renderRichText(block.heading)}</h2>${block.intro ? `<p>${escapeHtml(block.intro)}</p>` : ""}</div><div class="site-container site-container--wide work-grid">${cards}</div></section>`;
}

function renderWorkCard(item: WorkItemConfig): string {
  return `<article class="work-card work-card--${item.variant ?? "standard"}"><div class="work-card__media">${renderMedia(item.media, true)}</div><h3>${escapeHtml(item.title)}</h3><p>${item.agency ? `<span>${escapeHtml(item.agency)}</span><span aria-hidden="true">—</span>` : ""}${escapeHtml(item.client)}</p></article>`;
}

function renderStatsList(items: NetworkStatsBlock<Brand>["stats"]): string {
  return `<dl class="stats-list">${items.map((item) => `<div><dt>${escapeHtml(item.value)}</dt><dd>${escapeHtml(item.label)}</dd></div>`).join("")}</dl>`;
}

function renderNetworkStats<B extends Brand>(
  brand: B,
  block: NetworkStatsBlock<B>,
): string {
  return `<section class="network-stats"${sectionAttributes(brand, block.theme, block.id)}><div class="site-container"><div class="block-intro"><h2>${renderRichText(block.heading)}</h2><p>${escapeHtml(block.intro)}</p></div>${renderStatsList(block.stats)}</div></section>`;
}

function renderCapabilities<B extends Brand>(
  brand: B,
  block: CapabilitiesBlock<B>,
): string {
  const items =
    block.variant === "accordion"
      ? block.items
          .map((item, index) =>
            item.body
              ? `<details${index === 0 ? " open" : ""}><summary>${escapeHtml(item.title)}</summary><p>${escapeHtml(item.body)}</p></details>`
              : `<p>${escapeHtml(item.title)}</p>`,
          )
          .join("")
      : block.items.map((item) => `<p>${escapeHtml(item.title)}</p>`).join("");
  const pointerAttribute = block.pointerEffect
    ? ' data-gradient-pointer="true"'
    : "";
  return `<section class="capabilities capabilities--${block.variant}"${sectionAttributes(brand, block.theme, block.id)}${pointerAttribute}><div class="capabilities__orb" aria-hidden="true"></div><div class="site-container"><div class="block-intro"><h2>${renderRichText(block.heading)}</h2><p>${escapeHtml(block.intro)}</p></div><div class="capabilities__items">${items}</div></div></section>`;
}

function renderLogoGrid<B extends Brand>(
  brand: B,
  block: LogoGridBlock<B>,
): string {
  return `<section class="logo-grid-block"${sectionAttributes(brand, block.theme, block.id)}><div class="site-container"><div class="block-intro"><h2>${renderRichText(block.heading)}</h2><p>${escapeHtml(block.intro)}</p></div><div class="logo-grid" aria-label="Selected awards">${block.logos.map((logo) => `<img src="${escapeHtml(logo.src)}" alt="${escapeHtml(logo.alt)}" loading="lazy" />`).join("")}</div></div></section>`;
}

function renderMediaText<B extends Brand>(
  brand: B,
  block: MediaTextBlock<B>,
): string {
  return `<section class="media-text media-text--${block.variant}"${sectionAttributes(brand, block.theme, block.id)}><div class="site-container media-text__grid"><div class="media-text__media"><img src="${escapeHtml(block.image.src)}" alt="${escapeHtml(block.image.alt)}" loading="lazy" /></div><div class="media-text__copy">${block.eyebrow ? `<p class="eyebrow">${escapeHtml(block.eyebrow)}</p>` : ""}<h2>${renderRichText(block.heading)}</h2><p>${renderRichText(block.body)}</p>${block.action ? renderLink(block.action) : ""}</div></div></section>`;
}

function renderActionBanner<B extends Brand>(
  brand: B,
  block: ActionBannerBlock<B>,
): string {
  const media = block.media
    ? `<div class="action-banner__media">${block.media.map((image) => `<img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy" />`).join("")}</div>`
    : "";
  return `<section class="action-banner action-banner--${block.variant}"${sectionAttributes(brand, block.theme, block.id)}>${media}<div class="site-container action-banner__content"><h2>${renderRichText(block.heading)}</h2><div class="button-group">${block.actions.map(renderLink).join("")}</div></div></section>`;
}

function renderHealthPurpose(block: HealthPurposeBlock): string {
  return `<section class="health-purpose"${sectionAttributes("health", block.theme, block.id)}><div class="site-container"><h2>${renderRichText(block.heading)}</h2><p>${escapeHtml(block.body)}</p></div></section>`;
}

function renderHealthAgencies(block: HealthAgenciesBlock): string {
  return `<section class="health-agencies"${sectionAttributes("health", block.theme, block.id)}><div class="site-container health-agencies__panel"><div class="block-intro"><h2>${renderRichText(block.heading)}</h2><p>${escapeHtml(block.intro)}</p></div>${renderStatsList(block.stats)}</div></section>`;
}

function sectionAttributes<B extends Brand>(
  brand: B,
  theme: ThemeFor<B>,
  id?: string,
): string {
  return `${id ? ` id="${escapeHtml(id)}"` : ""} data-theme="${theme}" data-color-scheme="${brand}-${theme}"`;
}

export function renderBlock<B extends Brand>(
  brand: B,
  block: PageBlock<B>,
  header: SiteHeaderConfig,
): string {
  switch (block.type) {
    case "hero":
      return renderHero(brand, block, header);
    case "statement":
      return renderStatement(brand, block);
    case "workGrid":
      return renderWorkGrid(brand, block);
    case "networkStats":
      return renderNetworkStats(brand, block);
    case "capabilities":
      return renderCapabilities(brand, block);
    case "logoGrid":
      return renderLogoGrid(brand, block);
    case "mediaText":
      return renderMediaText(brand, block);
    case "actionBanner":
      return renderActionBanner(brand, block);
    case "healthPurpose":
      return renderHealthPurpose(block);
    case "healthAgencies":
      return renderHealthAgencies(block);
  }
}

export { brandLogo, brandNames, sectionAttributes };
