import { buttonLink, footer, siteHeader, stats } from "../components";

export function healthPage(): string {
  return `
    <main class="brand-page health" id="top">
      <section class="health-hero" data-token-theme="health-white">
        ${siteHeader("health")}
        <img src="/assets/health/hero.png" alt="Havas Health colleagues in a workshop" />
        <div class="health-hero__copy"><h1>Built for what’s<br />next in health</h1><p>We help health brands create meaningful firsts, through creativity, media and technology.</p>${buttonLink("Our purpose", "#purpose")}</div>
      </section>

      <section class="health-purpose" id="purpose" data-token-theme="health-red"><div class="container"><h2>We believe <strong>growth is powered by desire,</strong> and desire is created by the brands willing to be first</h2><p>Putting everything we know into helping brands create new pathways to healthier lives. Our network brings together connected health, wellness and communications expertise.</p></div></section>

      <section class="health-who section" data-token-theme="health-off-white"><div class="container health-feature-row"><div class="notched-image"><img src="/assets/health/who-we-are.png" alt="Portrait seen through a colourful translucent layer" loading="lazy" /></div><div><h2>Who we are</h2><p>We are one connected health network, bringing together deep category expertise and powerful creative thinking. We work with clients around the world to make a meaningful difference to people’s lives.</p>${buttonLink("Learn more", "#", true)}</div></div></section>

      <section class="health-agencies section" data-token-theme="health-off-white"><div class="container angular-panel"><div class="section-intro"><h2>Our Agencies</h2><p>Our agencies span every specialist discipline in healthcare communications. Together, we help brands move with confidence from the first idea to real-world impact.</p></div>${stats(
        [
          ["6.5K+", "Experts"],
          ["200+", "Offices"],
          ["60+", "Countries"],
        ],
      )}</div></section>

      <section class="health-editorial section" data-token-theme="health-off-white"><div class="container"><h2>Feature report</h2><article class="health-story"><img src="/assets/health/report.png" alt="Superhuman report artwork" loading="lazy" /><div><h3>Superaging: The desire of a longer, better life</h3><p>Longevity is reshaping how people think about health, ageing and possibility.</p>${buttonLink("Download the report", "#", true)}</div></article><article class="health-story health-story--reverse" id="careers"><img src="/assets/health/careers.png" alt="Colleagues working together" loading="lazy" /><div><h3>Create the next first with us</h3><p>Build a career where curiosity, creativity and health expertise come together to change lives.</p>${buttonLink("View careers", "#", true)}</div></article></div></section>

      <section class="health-cta" data-token-theme="health-red"><div class="container"><h2>Join the network creating<br />what’s next in health</h2>${buttonLink("View careers", "#", true)}</div></section>
      ${footer("health", "200 Madison Avenue, New York, NY 10016", "healthnetwork@havas.com")}
    </main>`;
}
