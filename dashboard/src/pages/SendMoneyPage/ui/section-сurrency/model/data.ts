import fiat from "@/assets/fiat-black.svg";
import bitcoin from "@/assets/bitcoin-black.svg";

export const currency = [
  {
    icon: fiat,
    title: "Fiat",
    description:
      "Perform a transaction using your fiat balances from one of your saved payment options",
    active: true,
  },
  {
    icon: bitcoin,
    title: "Crypto",
    description: "Perform a transaction Cryptocurrency",
    active: false,
  },
] as const;
