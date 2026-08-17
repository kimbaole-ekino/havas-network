import {
  buttonLink,
  footer,
  siteHeader,
  stats,
  stickyContact,
  workCard,
} from "../components";

const work = [
  {
    image: "/assets/creative/work-silk.png",
    title: "Making Plant-Based Feel Essential",
    agency: "Havas New York",
    client: "Silk",
    wide: true,
  },
  {
    image: "/assets/creative/work-sofitel.png",
    title: "Sofitel — Brand Rejuvenation — The Encounter",
    agency: "Havas Paris",
    client: "Sofitel",
  },
  {
    image: "/assets/creative/work-stories.png",
    title: "Reframing Care Through Real Stories",
    agency: "Havas London",
    client: "Vanish",
  },
  {
    image: "/assets/creative/work-democracy.png",
    title: "Ink of Democracy",
    agency: "Havas Creative India",
    client: "The Times of India",
    wide: true,
  },
  {
    image: "/assets/creative/work-impact.png",
    title: "One Integrated Team Delivering Global Impact",
    agency: "Havas Village",
    client: "JLR",
  },
  {
    image: "/assets/creative/work-parents.png",
    title: "Unbecoming Your Parents",
    agency: "Arnold",
    client: "Progressive",
  },
];

export function creativePage(): string {
  return `
    <main class="brand-page creative" id="top">
      <section class="creative-hero" data-token-theme="creative-black">
        ${siteHeader("creative")}
        <div class="creative-hero__media" aria-hidden="true"></div>
        <p class="creative-hero__eyebrow">Global Creative Network</p>
        ${stickyContact("Let’s connect", "HCN_GlobalComms@havas.com")}
      </section>

      <section class="creative-purpose section" data-token-theme="creative-black">
        <div class="container purpose-grid">
          <p class="eyebrow">Our Purpose</p>
          <div>
            <h1>At Havas we believe that <em>brand desire unlocks</em> exponential growth</h1>
            ${buttonLink("How we create desire", "#capabilities")}
          </div>
        </div>
      </section>

      <section class="work-section section" data-token-theme="creative-black" id="work">
        <div class="container section-intro">
          <h2>Work that cuts<br />through and connects</h2>
          <p>We create brand experiences that move from attention to connection — work that people actively engage with, that shows up in culture and drives real impact.</p>
        </div>
        <div class="work-grid container-wide">${work.map(workCard).join("")}</div>
      </section>

      <section class="network-section section" data-token-theme="creative-white">
        <div class="container section-intro">
          <h2>Our Agencies</h2>
          <p>A global network of agencies connected through our Village model — integrating creativity, media, data and technology to deliver connected brand experiences at scale.</p>
        </div>
        <div class="container">${stats([
          ["23K+", "Employees"],
          ["140+", "Countries"],
          ["72", "Villages"],
          ["2,300+", "Clients"],
        ])}</div>
      </section>

      <section class="capabilities section" id="capabilities" data-token-theme="creative-gradient">
        <div class="container section-intro"><h2>Built to create<br />brand desire</h2><p>All the capabilities you need, connected through our Village model to deliver brand experience across every touchpoint.</p></div>
        <div class="container accordion-list"><details open><summary>Transformation</summary><p>Strategy, innovation and consulting built around human desire.</p></details><details><summary>Attraction</summary><p>Creative ideas that earn attention in culture.</p></details><details><summary>Conversion</summary><p>Connected commerce and experience design.</p></details><details><summary>Reputation</summary><p>Meaningful influence and lasting brand trust.</p></details></div>
      </section>

      <section class="awards section" data-token-theme="creative-black">
        <div class="container section-intro"><h2>Our Awards</h2><p>Our work is recognised across the industry’s most prestigious awards — reflecting creativity that cuts through culture, builds connection and drives meaningful impact.</p></div>
        <div class="container awards-row" aria-label="Selected awards"><span>CANNES LIONS</span><span>D&amp;AD</span><span>One Show</span><span>CLIO</span><span>EFFIE</span><span>LIA</span></div>
      </section>

      <section class="feature feature--creative section" data-token-theme="creative-white">
        <div class="container feature-grid"><img src="/assets/creative/report.png" alt="Colourful Science of Desire exhibition" loading="lazy" /><div><p class="eyebrow">Featured Report</p><h2>The Science of Desire Report</h2><p>Discover brand desire through neuroscience, behavioural economics and cultural insight.</p>${buttonLink("Explore the report", "#", true)}</div></div>
      </section>

      <section class="creative-cta" id="careers" data-token-theme="creative-gradient"><div class="container"><h2>Create brands<br />people choose</h2><div>${buttonLink("Get in touch", "mailto:HCN_GlobalComms@havas.com", true)}${buttonLink("Join the network", "#")}</div></div></section>
      ${footer("creative", "Havas, 20/22 rue Marbeuf, 75008 Paris, France", "HCN_GlobalComms@havas.com")}
    </main>`;
}
