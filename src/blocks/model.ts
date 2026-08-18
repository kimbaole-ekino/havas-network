export type Brand = "creative" | "cx" | "health";

export interface ThemeByBrand {
  creative: "black" | "white" | "gradient";
  cx: "black" | "white";
  health: "red" | "white" | "off-white";
}

export type ThemeFor<B extends Brand> = ThemeByBrand[B];

export interface LinkConfig {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface TextSegment {
  text: string;
  emphasis?: "accent" | "strong";
}

export type RichText = string | readonly TextSegment[];

export interface ImageConfig {
  src: string;
  alt: string;
}

export interface VideoConfig {
  src: string;
  type?: string;
  poster?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsinline?: boolean;
}

export interface MediaConfig {
  image?: ImageConfig;
  video?: VideoConfig;
}

export interface SiteHeaderConfig {
  homeLabel: string;
}

export interface SiteFooterConfig<B extends Brand> {
  theme: ThemeFor<B>;
  officeHeading: string;
  officeLines: readonly string[];
  careersHref: string;
  contacts: readonly FooterContactConfig[];
  relatedLinks: readonly LinkConfig[];
  socialLinks: readonly LinkConfig[];
  policyLinks: readonly LinkConfig[];
  copyright: string;
}

export interface FooterContactConfig {
  heading: string;
  name: string;
  email: string;
}

interface ThemedBlock<B extends Brand> {
  theme: ThemeFor<B>;
  id?: string;
}

export interface HeroBlock<B extends Brand> extends ThemedBlock<B> {
  type: "hero";
  variant: "cinematic" | "statement" | "editorial";
  media: MediaConfig;
  eyebrow?: string;
  heading?: RichText;
  body?: string;
  actions?: readonly LinkConfig[];
}

export interface StatementBlock<B extends Brand> extends ThemedBlock<B> {
  type: "statement";
  variant: "split" | "centered";
  eyebrow?: string;
  headingLevel?: 1 | 2;
  heading: RichText;
  action?: LinkConfig;
}

export interface WorkItemConfig {
  media: MediaConfig;
  title: string;
  agency?: string;
  client: string;
  variant?: "standard" | "wide";
}

export interface WorkGridBlock<B extends Brand> extends ThemedBlock<B> {
  type: "workGrid";
  variant: "editorial";
  heading: RichText;
  intro?: string;
  items: readonly WorkItemConfig[];
}

export interface StatConfig {
  value: string;
  label: string;
}

export interface NetworkStatsBlock<B extends Brand> extends ThemedBlock<B> {
  type: "networkStats";
  variant: "standard";
  heading: RichText;
  intro: string;
  stats: readonly StatConfig[];
}

export interface CapabilityConfig {
  title: string;
  body?: string;
}

export interface CapabilitiesBlock<B extends Brand> extends ThemedBlock<B> {
  type: "capabilities";
  variant: "accordion" | "list";
  heading: RichText;
  intro: string;
  items: readonly CapabilityConfig[];
  pointerEffect?: boolean;
}

export interface LogoGridBlock<B extends Brand> extends ThemedBlock<B> {
  type: "logoGrid";
  variant: "awards";
  heading: RichText;
  intro: string;
  logos: readonly ImageConfig[];
}

export interface MediaTextBlock<B extends Brand> extends ThemedBlock<B> {
  type: "mediaText";
  variant: "media-left" | "media-right" | "notched-media-left";
  eyebrow?: string;
  heading: RichText;
  body: string;
  image: ImageConfig;
  action?: LinkConfig;
}

export interface ActionBannerBlock<B extends Brand> extends ThemedBlock<B> {
  type: "actionBanner";
  variant: "centered" | "media";
  heading: RichText;
  media?: readonly ImageConfig[];
  actions: readonly LinkConfig[];
}

export interface HealthPurposeBlock extends ThemedBlock<"health"> {
  type: "healthPurpose";
  variant: "angular";
  heading: RichText;
  body: string;
}

export interface HealthAgenciesBlock extends ThemedBlock<"health"> {
  type: "healthAgencies";
  variant: "angular";
  heading: RichText;
  intro: string;
  stats: readonly StatConfig[];
}

type CommonBlock<B extends Brand> =
  | HeroBlock<B>
  | StatementBlock<B>
  | WorkGridBlock<B>
  | NetworkStatsBlock<B>
  | CapabilitiesBlock<B>
  | LogoGridBlock<B>
  | MediaTextBlock<B>
  | ActionBannerBlock<B>;

export type PageBlock<B extends Brand> =
  | CommonBlock<B>
  | (B extends "health" ? HealthPurposeBlock | HealthAgenciesBlock : never);

export interface PageDefinition<B extends Brand> {
  brand: B;
  title: string;
  header: SiteHeaderConfig;
  blocks: readonly PageBlock<B>[];
  footer: SiteFooterConfig<B>;
}

export function definePage<B extends Brand>(
  definition: PageDefinition<B>,
): PageDefinition<B> {
  return definition;
}
