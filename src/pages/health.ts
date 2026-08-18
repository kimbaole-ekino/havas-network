import { definePage } from "../blocks/model";

export const healthPage = definePage({
  brand: "health",
  title: "Havas Health — Design Token PoC",
  header: { homeLabel: "Havas Health Network home" },
  blocks: [
    {
      type: "hero",
      theme: "white",
      variant: "editorial",
      media: {
        image: {
          src: "/assets/health/hero.png",
          alt: "Havas Health colleagues in a workshop",
        },
        video: {
          src: "https://havashealthstg.wpenginepowered.com/wp-content/uploads/2026/06/hero-homepage.mp4",
          type: "video/mp4",
          poster: "/assets/health/hero.png",
          autoplay: true,
          muted: true,
          loop: true,
          playsinline: true,
        },
      },
      heading: "Built for what’s\nnext in health",
      body: "We help health brands create desire, shape culture, and drive growth through creativity, technology, innovation, and the power of being first.",
      actions: [{ label: "Our purpose", href: "#purpose" }],
    },
    {
      type: "healthPurpose",
      id: "purpose",
      theme: "red",
      variant: "angular",
      heading: [
        { text: "We believe " },
        { text: "growth is powered by desire,", emphasis: "strong" },
        { text: " and desire is created by the brands willing to be first." },
      ],
      body: "Healthcare is entering a new era shaped by AI, scientific breakthroughs, and evolving consumer expectations. Rooted in a legacy of industry firsts—from the first global health network to breakthroughs in vaccines, gene therapy, GLP-1s, and AI-enabled health experiences—we help brands navigate that transformation to create brand desire and drive growth.",
    },
    {
      type: "mediaText",
      theme: "off-white",
      variant: "notched-media-left",
      heading: "Who we are",
      body: "Havas Health Network unites Havas Life, Havas Lynx, Jacques, and consumer health capabilities from across Havas in one connected global network. Bringing together strategy, creative, media, medical, communications, and technology, we help brands create connected experiences, navigate complexity, and drive business impact.",
      image: {
        src: "https://havashealthstg.wpenginepowered.com/wp-content/uploads/2026/06/hcn_whoweare_hero.jpg",
        alt: "Who We Are Hero Banner",
      },
      action: {
        label: "Learn more",
        href: "https://havashealthstg.wpenginepowered.com/who-we-are/",
        variant: "secondary",
      },
    },
    {
      type: "healthAgencies",
      theme: "off-white",
      variant: "angular",
      heading: "Our Agencies",
      intro:
        "Our agencies span every aspect of modern healthcare communications — from strategy and creative to medical, media, technology, data, and patient experience — helping clients move faster, innovate boldly, and create their next first.",
      stats: [
        { value: "6.5K+", label: "Experts" },
        { value: "200+", label: "Offices" },
        { value: "60+", label: "Countries" },
      ],
    },
    {
      type: "mediaText",
      theme: "off-white",
      variant: "media-left",
      eyebrow: "Feature report",
      heading: "Superaging: The desire of a longer, better life",
      body: "Superaging explores how longevity, technology, optimization, and consumer behavior are reshaping the future of health — and the opportunity for brands to lead in the emerging longevity economy.",
      image: {
        src: "https://havashealthstg.wpenginepowered.com/wp-content/uploads/2026/06/image-99.jpg",
        alt: "Superaging: The desire of a longer, better life",
      },
      action: {
        label: "Download the report",
        href: "https://superhuman.havashealth.com/",
        variant: "secondary",
      },
    },
    {
      type: "mediaText",
      id: "careers",
      theme: "off-white",
      variant: "media-right",
      heading: "Create the next first with us",
      body: "We’re building a culture driven by creativity, curiosity, ambition, and collaboration. At Havas Health, you’ll work across disciplines, technologies, and ideas to help shape what’s next for healthcare, brands, and people around the world.",
      image: {
        src: "https://havashealthstg.wpenginepowered.com/wp-content/uploads/2026/06/Image.jpg",
        alt: "Create the next first with us",
      },
      action: {
        label: "View Careers",
        href: "https://havashealthstg.wpenginepowered.com/careers/",
        variant: "secondary",
      },
    },
    {
      type: "actionBanner",
      theme: "red",
      variant: "centered",
      heading: "Join the network creating\nwhat’s next in health",
      actions: [
        {
          label: "View Careers",
          href: "https://wd3.myworkdaysite.com/recruiting/havas/HealthYouExternalCareerSite",
          variant: "secondary",
        },
      ],
    },
  ],
  footer: {
    theme: "white",
    officeHeading: "Global Head Office",
    officeLines: [
      "Havas Health Network",
      "200 Madison Avenue",
      "New York, NY 10016",
    ],
    careersHref:
      "https://wd3.myworkdaysite.com/recruiting/havas/HealthYouExternalCareerSite",
    contacts: [
      {
        heading: "New Business",
        name: "Ben Tauber",
        email: "ben.tauber@havas.com",
      },
      {
        heading: "Press & General Inquiries",
        name: "Harriet Flory",
        email: "havashealth.comms@havas.com",
      },
    ],
    relatedLinks: [{ label: "Havas.com", href: "https://www.havas.com/" }],
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/havashealth/posts",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/havashealthnetwork/",
      },
    ],
    policyLinks: [
      {
        label: "Terms and Conditions of Use",
        href: "https://havashealthstg.wpenginepowered.com/terms-and-conditions/",
      },
      {
        label: "Privacy Policy",
        href: "https://havashealthstg.wpenginepowered.com/privacy-policy/",
      },
      {
        label: "Cookie Notice",
        href: "https://havashealthstg.wpenginepowered.com/cookie-notice/",
      },
    ],
    copyright: "© 2026 Havas Health Network",
  },
});
