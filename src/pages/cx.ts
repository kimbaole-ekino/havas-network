import { definePage } from "../blocks/model";

export const cxPage = definePage({
  brand: "cx",
  title: "Havas CX — Design Token PoC",
  header: { homeLabel: "Havas CX home" },
  blocks: [
    {
      type: "hero",
      theme: "black",
      variant: "statement",
      media: {
        image: {
          src: "/assets/cx/hero.png",
          alt: "Colourful light beams around a person",
        },
        video: {
          src: "https://havascx.com/wp-content/uploads/2026/05/Havas-Creative-BKG.mp4",
          type: "video/mp4",
          poster: "/assets/cx/hero.png",
          autoplay: true,
          muted: true,
          loop: true,
          playsinline: true,
        },
      },
      heading: [
        { text: "Turning\nbrand promises\ninto " },
        { text: "desirable", emphasis: "accent" },
        { text: "\nexperiences" },
      ],
    },
    {
      type: "statement",
      theme: "black",
      variant: "centered",
      heading: [
        {
          text: "We lead with empathy, grounding everything we create in real human needs, to design ",
        },
        { text: "desirable experiences", emphasis: "accent" },
        {
          text: " that forge stronger connections between people and brands.",
        },
      ],
      action: { label: "Who we are", href: "#network" },
    },
    {
      type: "workGrid",
      theme: "black",
      variant: "editorial",
      heading: "Work that turns moments into momentum",
      items: [
        {
          media: {
            image: {
              src: "/assets/cx/work-airline.png",
              alt: "American Airlines loyalty programme",
            },
            video: {
              src: "https://havascx.com/wp-content/uploads/2026/06/AA-edit.mp4",
              type: "video/mp4",
              poster: "/assets/cx/work-airline.png",
              autoplay: true,
              muted: true,
              loop: true,
              playsinline: true,
            },
          },
          title:
            "Transforming the way customers engage with the world’s first airline loyalty program",
          client: "American Airlines",
          variant: "wide",
        },
        {
          media: {
            image: {
              src: "/assets/cx/work-skin.jpg",
              alt: "La Roche-Posay dermatological care",
            },
            video: {
              src: "https://havascx.com/wp-content/uploads/2026/05/LRP-Sizzle-Reel-edit.mp4",
              type: "video/mp4",
              poster: "/assets/cx/work-skin.jpg",
              autoplay: true,
              muted: true,
              loop: true,
              playsinline: true,
            },
          },
          title: "Using CX to give access to life-changing dermatological care",
          client: "La Roche Posay",
        },
        {
          media: {
            image: {
              src: "/assets/cx/work-teacher.jpg",
              alt: "Teacher using a phone in rural India",
            },
            video: {
              src: "https://havascx.com/wp-content/uploads/2026/06/Bharti_Clip_hold.mp4",
              type: "video/mp4",
              poster: "/assets/cx/work-teacher.jpg",
              autoplay: true,
              muted: true,
              loop: true,
              playsinline: true,
            },
          },
          title:
            "Bridging opportunities for teachers in rural India: The TeacherApp",
          client: "Bharti Airtel Foundation",
        },
        {
          media: {
            image: {
              src: "/assets/cx/work-starbucks.jpg",
              alt: "Starbucks loyalty experience",
            },
            video: {
              src: "https://havascx.com/wp-content/uploads/2026/05/Starbucks-edit-6sec.mp4",
              type: "video/mp4",
              poster: "/assets/cx/work-starbucks.jpg",
              autoplay: true,
              muted: true,
              loop: true,
              playsinline: true,
            },
          },
          title: "Transforming loyalty at Starbucks",
          client: "Starbucks",
          variant: "wide",
        },
      ],
    },
    {
      type: "networkStats",
      id: "network",
      theme: "white",
      variant: "standard",
      heading: "Havas\nExperience\nNetwork",
      intro:
        "We’re a connected network of CX talent across global markets and disciplines, working as one to create experiences that cultivate desire consistently and at scale. Organized under a common structure and mission, we bring together the brightest minds from across our countries, combining rich insights, user-centric technology and experience-led design to transform business performance.",
      stats: [
        { value: "2.3K+", label: "People" },
        { value: "19", label: "Countries" },
        { value: "1", label: "Community" },
      ],
    },
    {
      type: "capabilities",
      theme: "black",
      variant: 'list',
      heading: "What we do",
      intro:
        "Our work brings customer experiences to life by turning ideas and insights into action that people feel, use and remember.",
      items: [
        { title: "Customer experience strategy" },
        { title: "Digital product & service design" },
        { title: "Journey mapping & orchestration" },
        { title: "CRM, loyalty & marketing technology" },
        { title: "Data-led transformation & change management" },
        { title: "AI & emerging technology" },
      ],
    },
    {
      type: "logoGrid",
      theme: "black",
      variant: "awards",
      heading: "Our Awards",
      intro:
        "Celebrating the industry's highest distinctions, our awards reflect a deep dedication to crafting experiences that reflect our unwavering commitment to people-first innovation.",
      logos: [
        {
          src: "https://havascx.com/wp-content/uploads/2026/06/logo-cannes-lions.png",
          alt: "Cannes Lions",
        },
        {
          src: "https://havascx.com/wp-content/uploads/2026/06/the-one-show.png",
          alt: "The One Show",
        },
        {
          src: "https://havascx.com/wp-content/uploads/2026/06/Frame-13380.png",
          alt: "LIA",
        },
        {
          src: "https://havascx.com/wp-content/uploads/2026/06/logo-effie.png",
          alt: "Effie",
        },
        {
          src: "https://havascx.com/wp-content/uploads/2026/06/CLIOS.png",
          alt: "Clios",
        },
        {
          src: "https://havascx.com/wp-content/uploads/2026/06/EPICA.png",
          alt: "Epica",
        },
        {
          src: "https://havascx.com/wp-content/uploads/2026/06/eurobest.png",
          alt: "Eurobest",
        },
        {
          src: "https://havascx.com/wp-content/uploads/2026/06/reddot-award.png",
          alt: "Red Dot Award",
        },
        {
          src: "https://havascx.com/wp-content/uploads/2026/06/logo-the-webby-awards.png",
          alt: "The Webby Awards",
        },
        {
          src: "https://havascx.com/wp-content/uploads/2026/06/Frame-13511.png",
          alt: "Selected award",
        },
      ],
    },
    {
      type: "mediaText",
      theme: "white",
      variant: "media-left",
      heading: "Desirable Experience Index",
      body: "Our latest global CX report shows there’s a widening gap between what brands promise and what customers actually experience. An astounding 91% of brands fall short. Get the report to see how your brand stacks up and how you can close the gap.",
      image: {
        src: "https://havascx.com/wp-content/uploads/2026/06/image-90.png",
        alt: "Colourful X symbol for the Desirable Experience Index",
      },
      action: {
        label: "Explore the Desirable Experience Index",
        href: "https://www.havasxindex.com/",
        variant: "secondary",
      },
    },
    {
      type: "actionBanner",
      id: "careers",
      theme: "black",
      variant: "centered",
      heading: "Join us in helping shape the\nfuture of experience",
      actions: [
        {
          label: "Work with us",
          href: "https://wd3.myworkdaysite.com/en-US/recruiting/havas/GroupExternalCareerSite",
          variant: "secondary",
        },
        {
          label: "Get in touch",
          href: "https://havascx.com/#",
        },
      ],
    },
  ],
  footer: {
    theme: "black",
    officeHeading: "Global Havas CX Network Headquarters",
    officeLines: ["200 Hudson Street", "New York, NY 10013"],
    careersHref:
      "https://wd3.myworkdaysite.com/en-US/recruiting/havas/GroupExternalCareerSite",
    contacts: [
      {
        heading: "New Business",
        name: "Patrick Thistlethwaite",
        email: "patrick.thistlethwaite@havas.com",
      },
      {
        heading: "Press & General Inquiries",
        name: "Harriet Flory",
        email: "HCN_GlobalComms@havas.com",
      },
    ],
    relatedLinks: [
      { label: "Havas.com", href: "https://www.havas.com/" },
      {
        label: "Desirable Experience Index",
        href: "https://www.havasxindex.com/",
      },
    ],
    socialLinks: [
      { label: "X", href: "https://x.com/havascx" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/havascx",
      },
    ],
    policyLinks: [
      {
        label: "Terms and Conditions of Use",
        href: "https://havascx.com/terms-and-conditions-of-use/",
      },
      {
        label: "Data Protection Policy",
        href: "https://havascx.com/data-protection-policy/",
      },
      {
        label: "Privacy Policy (US and Canada residents)",
        href: "https://havascx.com/privacy-policy-us-and-canada-residents/",
      },
      {
        label: "Cookie Notice",
        href: "https://havascx.com/cookie-policy/",
      },
    ],
    copyright: "© 2026 Havas CX",
  },
});
