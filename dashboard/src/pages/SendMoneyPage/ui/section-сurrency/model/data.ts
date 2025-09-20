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
    title: "DLT Assets",
    description: "Perform a transaction using DLT Assets",
    active: false,
  },
] as const;
