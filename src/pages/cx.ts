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
    image: "/assets/cx/work-airline.png",
    title:
      "Transforming the way customers engage with the world’s first airline loyalty program",
    agency: "Havas CX",
    client: "American Airlines",
    wide: true,
  },
  {
    image: "/assets/cx/work-skin.jpg",
    title: "Using CX to give access to life-changing dermatological care",
    agency: "Havas CX London",
    client: "La Roche-Posay",
  },
  {
    image: "/assets/cx/work-teacher.jpg",
    title: "Bridging opportunities for teachers in rural India",
    agency: "Havas CX India",
    client: "The TeacherApp",
  },
  {
    image: "/assets/cx/work-starbucks.jpg",
    title: "Transforming loyalty at Starbucks",
    agency: "Havas CX Helia",
    client: "Starbucks",
    wide: true,
  },
];

export function cxPage(): string {
  return `
    <main class="brand-page cx" id="top">
      <section class="cx-hero" data-token-theme="cx-black">
        ${siteHeader("cx")}
        <div class="cx-hero__beam" aria-hidden="true"></div>
        <div class="container cx-hero__content"><h1>Turning<br />brand promises<br />into <em>desirable</em><br />experiences</h1></div>
        ${stickyContact("Get in touch", "patrick.thistlethwaite@havas.com")}
      </section>

      <section class="cx-statement section" data-token-theme="cx-black"><div class="container"><p>We lead with empathy, grounding everything we create in real human needs, to design <em>desirable experiences</em> that forge stronger connections between people and brands.</p>${buttonLink("Who we are", "#network")}</div></section>

      <section class="work-section section" data-token-theme="cx-black"><div class="container section-intro"><h2>Work that turns moments into momentum</h2></div><div class="work-grid container-wide">${work.map(workCard).join("")}</div></section>

      <section class="network-section section" id="network" data-token-theme="cx-white"><div class="container section-intro"><h2>Havas<br />Experience<br />Network</h2><p>We’re a connected network of CX teams across global markets and disciplines, working as one to create experiences that build trust, solve real human needs and deliver sustainable business growth.</p></div><div class="container">${stats(
        [
          ["2.3K+", "People"],
          ["19", "Countries"],
          ["1", "Community"],
        ],
      )}</div></section>

      <section class="capabilities section" data-token-theme="cx-black"><div class="container section-intro"><h2>What we do</h2><p>Our work brings customer experiences to life by turning ideas and insights into action that people feel, use and remember.</p></div><div class="container capability-lines"><p>Customer experience strategy</p><p>Digital product &amp; service design</p><p>Journey mapping &amp; orchestration</p><p>CRM, loyalty &amp; marketing technology</p><p>Data-led transformation &amp; change management</p><p>AI &amp; emerging technology</p></div></section>

      <section class="awards section" data-token-theme="cx-black"><div class="container section-intro"><h2>Our Awards</h2><p>Celebrating the industry’s highest distinction, our awards reflect a deep dedication to crafting experiences that connect our unwavering commitment to people-first innovation.</p></div><div class="container awards-row"><span>CANNES LIONS</span><span>D&amp;AD</span><span>LIA</span><span>EFFIE</span><span>CLIO</span><span>EPICA</span></div></section>

      <section class="feature feature--cx section" data-token-theme="cx-white"><div class="container feature-grid"><img src="/assets/cx/index.png" alt="Colourful X symbol for the Desirable Experience Index" loading="lazy" /><div><h2>Desirable Experience Index</h2><p>Our latest global CX report shows there is a widening gap between what brands promise and what customers actually experience.</p>${buttonLink("Explore the Desirable Experience Index", "#", true)}</div></div></section>

      <section class="cx-cta" id="careers" data-token-theme="cx-black"><div class="container"><h2>Join us in helping shape the<br />future of experience</h2><div>${buttonLink("Work with us", "#", true)}${buttonLink("Get in touch", "mailto:patrick.thistlethwaite@havas.com")}</div></div></section>
      ${footer("cx", "200 Hudson Street, New York, NY 10013", "patrick.thistlethwaite@havas.com")}
    </main>`;
}
