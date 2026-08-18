import { escapeHtml } from "./html";
import {
  brandLogo,
  brandNames,
  renderBlock,
  sectionAttributes,
} from "./blocks";
import type { Brand, PageDefinition } from "./model";

function renderFooterLink(link: { label: string; href: string }): string {
  return `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`;
}

function renderFooter<B extends Brand>(page: PageDefinition<B>): string {
  const footer = page.footer;
  const contacts = footer.contacts
    .map(
      (contact) =>
        `<div class="site-footer__contact"><h3>${escapeHtml(contact.heading)}</h3><p>${escapeHtml(contact.name)}</p><a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></div>`,
    )
    .join("");
  return `<footer class="site-footer"${sectionAttributes(page.brand, footer.theme)}><div class="site-footer__top"><a class="site-footer__brand" href="/${page.brand}" aria-label="${escapeHtml(brandNames[page.brand])} home">${brandLogo(page.brand)}</a><a class="back-to-top" href="#top" aria-label="Back to top">↑</a></div><div class="site-footer__columns"><section><h2>${escapeHtml(footer.officeHeading)}</h2><p>${footer.officeLines.map(escapeHtml).join("<br />")}</p></section><section><h2>Careers</h2><p>Want to join us?</p><a href="${escapeHtml(footer.careersHref)}">View Jobs ↗</a><p>#LifeatHavas</p></section><section><h2>Contact</h2>${contacts}</section></div><div class="site-footer__links"><nav aria-label="Related links">${footer.relatedLinks.map(renderFooterLink).join("")}</nav><nav aria-label="Social links">${footer.socialLinks.map(renderFooterLink).join("")}</nav></div><div class="site-footer__bottom"><nav aria-label="Legal links">${footer.policyLinks.map(renderFooterLink).join("")}</nav><p>${escapeHtml(footer.copyright)}</p></div></footer>`;
}

export function renderPage<B extends Brand>(page: PageDefinition<B>): string {
  const blocks = page.blocks
    .map((block) => renderBlock(page.brand, block, page.header))
    .join("");
  return `<main class="page-shell" data-brand="${page.brand}" id="top"><div class="site-canvas">${blocks}${renderFooter(page)}</div></main>`;
}
