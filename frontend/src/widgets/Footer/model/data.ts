import { internalPaths } from "@/shared/routes/paths";

export const navigationData = [
  {
    title: "Product",
    links: [
      {
        title: "Banking",
        href: internalPaths.banking,
        soon: false,
      },
      {
        title: "Card issuing",
        href: "#",
        soon: false,
      },
      {
        title: "Processing",
        href: internalPaths.comingSoon,
        soon: true,
      },
      {
        title: "OTC trading",
        href: internalPaths.comingSoon,
        soon: true,
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Documentation",
        href: "#",
        soon: false,
      },
      {
        title: "Knowledge  base",
        href: "#",
        soon: false,
      },
      {
        title: "Risk Appetite",
        href: "#",
        soon: false,
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        title: "Pricing",
        href: "#",
        soon: false,
      },
      {
        title: "About us",
        href: internalPaths.aboutUs,
        soon: false,
      },
      {
        title: "Contact us",
        href: internalPaths.letsConnect,
        soon: false,
      },
      {
        title: "FAQs",
        href: internalPaths.faq,
        soon: false,
      },
    ],
  },
];
