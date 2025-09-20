import euro from "@/assets/euro-black.svg";
import dollar from "@/assets/dollar-black.svg";

export const currency = [
  {
    icon: euro,
    title: "EUR",
    active: true,
  },
  {
    icon: dollar,
    title: "USD",
    active: false,
  },
] as const;
