import type { LinkConfig, RichText } from "./model";

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
    };
    return entities[character] ?? character;
  });
}

function withLineBreaks(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

export function renderRichText(value: RichText): string {
  if (typeof value === "string") return withLineBreaks(value);

  return value
    .map(({ text, emphasis }) => {
      const content = withLineBreaks(text);
      if (emphasis === "accent") return `<em>${content}</em>`;
      if (emphasis === "strong") return `<strong>${content}</strong>`;
      return content;
    })
    .join("");
}

export function renderLink(link: LinkConfig): string {
  const modifier =
    link.variant === "secondary" ? " button-link--secondary" : "";
  return `<a class="button-link${modifier}" href="${escapeHtml(link.href)}">${escapeHtml(link.label)}<span aria-hidden="true">→</span></a>`;
}
