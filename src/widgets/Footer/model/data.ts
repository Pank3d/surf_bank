import { internalPaths } from "@/shared/routes/paths";

export const navigationData = [
  {
    title: "Product",
    links: [
      {
        title: "Banking",
        href: "#",
        soon: false,
      },
      {
        title: "Card issuing",
        href: "#",
        soon: false,
      },
      {
        title: "Processing",
        href: "#",
        soon: true,
      },
      {
        title: "OTC trading",
        href: "#",
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
        href: "#",
        soon: false,
      },
      {
        title: "Contact us",
        href: "#",
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
