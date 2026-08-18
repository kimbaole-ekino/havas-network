import { definePage } from "../blocks/model";

export const creativePage = definePage({
  brand: "creative",
  title: "Havas Creative — Design Token PoC",
  header: { homeLabel: "Havas Creative Network home" },
  blocks: [
    {
      type: "hero",
      theme: "black",
      variant: "cinematic",
      media: {
        image: { src: "/assets/creative/hero.png", alt: "" },
        video: {
          src: "https://havascreative.com/wp-content/uploads/2026/06/sizzle_2_l-1.mp4",
          type: "video/mp4",
          poster: "/assets/creative/hero.png",
          autoplay: true,
          muted: true,
          loop: true,
          playsinline: true,
        },
      },
    },
    {
      type: "statement",
      id: "purpose",
      theme: "black",
      variant: "split",
      eyebrow: "Our Purpose",
      headingLevel: 1,
      heading: [
        { text: "At Havas we believe that " },
        { text: "brand desire unlocks", emphasis: "accent" },
        { text: " exponential growth" },
      ],
      action: {
        label: "How we create desire",
        href: "#capabilities",
      },
    },
    {
      type: "workGrid",
      id: "work",
      theme: "black",
      variant: "editorial",
      heading: "Work that cuts\nthrough and connects",
      intro:
        "We create brand experiences that move from attention to connection — work that people actively engage with, that shows up in culture and drives real impact.",
      items: [
        {
          media: {
            image: {
              src: "/assets/creative/work-silk.png",
              alt: "Silk campaign",
            },
            video: {
              src: "https://havascreative.com/wp-content/uploads/2026/05/Silk-edit-25fps.mp4",
              type: "video/mp4",
              poster: "/assets/creative/work-silk.png",
              autoplay: true,
              muted: true,
              loop: true,
              playsinline: true,
            },
          },
          title: "Making Plant-Based Feel Essential",
          agency: "Havas New York",
          client: "Silk",
          variant: "wide",
        },
        {
          media: {
            image: {
              src: "/assets/creative/work-sofitel.png",
              alt: "Sofitel campaign",
            },
            video: {
              src: "https://havascreative.com/wp-content/uploads/2026/05/Sofitel-edit.mp4",
              type: "video/mp4",
              poster: "/assets/creative/work-sofitel.png",
              autoplay: true,
              muted: true,
              loop: true,
              playsinline: true,
            },
          },
          title: "Sofitel — Brand Rejuvenation — The Encounter",
          agency: "Havas Paris",
          client: "Sofitel",
        },
        {
          media: {
            image: {
              src: "/assets/creative/work-stories.png",
              alt: "Vanish campaign",
            },
            video: {
              src: "https://havascreative.com/wp-content/uploads/2026/05/Vanish-edit-25fps.mp4",
              type: "video/mp4",
              poster: "/assets/creative/work-stories.png",
              autoplay: true,
              muted: true,
              loop: true,
              playsinline: true,
            },
          },
          title: "Reframing Care Through Real Stories",
          agency: "Havas London",
          client: "Vanish",
        },
        {
          media: {
            image: {
              src: "/assets/creative/work-democracy.png",
              alt: "Ink of Democracy campaign",
            },
            video: {
              src: "https://havascreative.com/wp-content/uploads/2026/05/TOI-Edit.mp4",
              type: "video/mp4",
              poster: "/assets/creative/work-democracy.png",
              autoplay: true,
              muted: true,
              loop: true,
              playsinline: true,
            },
          },
          title: "Ink of Democracy",
          agency: "Havas Creative India",
          client: "The Times of India",
          variant: "wide",
        },
        {
          media: {
            image: {
              src: "/assets/creative/work-impact.png",
              alt: "JBL campaign",
            },
            video: {
              src: "https://havascreative.com/wp-content/uploads/2026/06/JBL-edit-25fps.mp4",
              type: "video/mp4",
              poster: "/assets/creative/work-impact.png",
              autoplay: true,
              muted: true,
              loop: true,
              playsinline: true,
            },
          },
          title: "One Integrated Team Delivering Global Impact",
          agency: "Global, led by Havas London",
          client: "JBL (Harman)",
        },
        {
          media: {
            image: {
              src: "/assets/creative/work-parents.png",
              alt: "Progressive campaign",
            },
            video: {
              src: "https://havascreative.com/wp-content/uploads/2026/06/progressive-letting-go-edit_crop.mp4",
              type: "video/mp4",
              poster: "/assets/creative/work-parents.png",
              autoplay: true,
              muted: true,
              loop: true,
              playsinline: true,
            },
          },
          title: "Unbecoming Your Parents",
          agency: "Arnold Worldwide",
          client: "Progressive Insurance",
        },
      ],
    },
    {
      type: "networkStats",
      theme: "white",
      variant: "standard",
      heading: "Our Agencies",
      intro:
        "A global network of agencies connected through our Village model — integrating creativity, media, data and technology to deliver consistent brand experiences at scale.",
      stats: [
        { value: "23K+", label: "Employees" },
        { value: "140+", label: "Countries" },
        { value: "72", label: "Villages" },
        { value: "2,300+", label: "Clients" },
      ],
    },
    {
      type: "capabilities",
      id: "capabilities",
      theme: "gradient",
      variant: "accordion",
      pointerEffect: true,
      heading: "Built to create\nbrand desire",
      intro:
        "All the capabilities you need, connected through our Village model to deliver brand experience across every touchpoint.",
      items: [
        { title: "Transformation" },
        { title: "Attraction" },
        { title: "Connection" },
        { title: "Reputation" },
      ],
    },
    {
      type: "logoGrid",
      theme: "black",
      variant: "awards",
      heading: "Our Awards",
      intro:
        "Our work is recognized across the industry’s most prestigious awards — reflecting creativity that cuts through culture, builds connection and drives meaningful impact.",
      logos: [
        {
          src: "https://havascreative.com/wp-content/uploads/2026/05/Frame-13360.png",
          alt: "Cannes Lions",
        },
        {
          src: "https://havascreative.com/wp-content/uploads/2026/05/Frame-13382-copy.png",
          alt: "The One Show",
        },
        {
          src: "https://havascreative.com/wp-content/uploads/2026/05/Frame-13385.png",
          alt: "D&AD",
        },
        {
          src: "https://havascreative.com/wp-content/uploads/2026/05/Frame-13380-copy.png",
          alt: "Clios",
        },
        {
          src: "https://havascreative.com/wp-content/uploads/2026/05/Frame-13380.png",
          alt: "LIA",
        },
        {
          src: "https://havascreative.com/wp-content/uploads/2026/05/Frame-13360-copy.png",
          alt: "Effie",
        },
        {
          src: "https://havascreative.com/wp-content/uploads/2026/05/Frame-13384-copy.png",
          alt: "The WARC Awards",
        },
        {
          src: "https://havascreative.com/wp-content/uploads/2026/05/Frame-13382.png",
          alt: "Dubai Lynx",
        },
        {
          src: "https://havascreative.com/wp-content/uploads/2026/05/Frame-13384.png",
          alt: "Spikes Asia",
        },
        {
          src: "https://havascreative.com/wp-content/uploads/2026/05/Frame-13509.png",
          alt: "Eurobest",
        },
      ],
    },
    {
      type: "mediaText",
      theme: "white",
      variant: "media-left",
      heading: "The Science of Desire Report",
      body: "Desirable brands drive desirable results. Drawing on global brand data, behavioral science and qualitative research, three interacting drivers consistently emerge as the foundations of brand desire: Attraction, Affinity and Attachment.\n\nThis report explores how to design, measure and build that system for growth.",
      image: {
        src: "https://havascreative.com/wp-content/uploads/2026/06/the-science-of-desire-report-894x596.jpeg",
        alt: "The Science of Desire Report",
      },
      action: {
        label: "Explore the report",
        href: "https://www.havasscienceofdesire.com/",
        variant: "secondary",
      },
    },
    {
      type: "actionBanner",
      id: "careers",
      theme: "gradient",
      variant: "media",
      heading: "Create brands\npeople choose",
      media: [
        {
          src: "https://havascreative.com/wp-content/uploads/2026/06/hcn_home_get-in-touch-scaled.jpg",
          alt: "",
        },
      ],
      actions: [
        {
          label: "Get in touch",
          href: "mailto:HCN_GlobalComms@havas.com",
          variant: "secondary",
        },
        {
          label: "Join the network",
          href: "https://wd3.myworkdaysite.com/en-US/recruiting/havas/CreativeExternalCareerSite?CF_LRV_-_Company_Network_Extended=f74391cf68de0162da0267c4fe10b8b2",
        },
      ],
    },
  ],
  footer: {
    theme: "black",
    officeHeading: "Global Head Office",
    officeLines: [
      "Havas 29-30",
      "Quai de Dion Bouton",
      "92800 Puteaux",
      "France",
    ],
    careersHref:
      "https://wd3.myworkdaysite.com/en-US/recruiting/havas/CreativeExternalCareerSite?CF_LRV_-_Company_Network_Extended=f74391cf68de0162da0267c4fe10b8b2",
    contacts: [
      {
        heading: "New Business",
        name: "Tracey Barber",
        email: "tracey.barber@havas.com",
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
        label: "Science of Desire",
        href: "https://www.havasscienceofdesire.com/",
      },
    ],
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/havas",
      },
      { label: "Facebook", href: "https://www.facebook.com/HavasCreative/" },
      { label: "X", href: "https://x.com/havas" },
      { label: "Instagram", href: "https://www.instagram.com/havas/?hl=en" },
    ],
    policyLinks: [
      {
        label: "Terms of Use",
        href: "https://havascreative.com/terms-of-use/",
      },
      {
        label: "Terms of Use (US and Canada residents)",
        href: "https://havascreative.com/terms-of-use-us-and-canada-residents/",
      },
      {
        label: "Data Protection Policy",
        href: "https://havascreative.com/data-protection-policy/",
      },
      {
        label: "Privacy Policy (US and Canada residents)",
        href: "https://havascreative.com/privacy-policy-us-and-canada-residents/",
      },
      {
        label: "Cookie Notice",
        href: "https://havascreative.com/cookie-notice/",
      },
    ],
    copyright: "© 2026 Havas Creative Network",
  },
});
