import etherium from "@/assets/ethereum-fill.svg";
import bitcoin from "@/assets/bitcoin-fill.svg";
import usdt from "@/assets/usdt.svg";
import usdc from "@/assets/dollar.svg";

export const cards = [
  {
    icon: etherium,
    title: "Etherium",
    price: "$2 572.22",
    rate: "4.66",
    convertPrice: "$11 980.14",
  },
  {
    icon: bitcoin,
    title: "Bitcoin",
    price: "$109 125.00",
    rate: "0.11",
    convertPrice: "$12 003.75",
  },
  {
    icon: usdt,
    title: "USDT (TRC20)",
    price: "$1.00",
    rate: "12 000.00",
    convertPrice: "$12 000.00",
  },
  {
    icon: usdc,
    title: "USDC",
    price: "$1.00",
    rate: "8 000.00",
    convertPrice: "$8 000.00",
  },
] as const;
