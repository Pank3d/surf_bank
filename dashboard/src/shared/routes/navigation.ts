import home from "@/assets/home.svg";
import send from "@/assets/send.svg";
import receive from "@/assets/receive.svg";
import exchange from "@/assets/exchange.svg";
import counterparties from "@/assets/counterparties.svg";
import transactions from "@/assets/transaction.svg";
import support from "@/assets/support.svg";
import faq from "@/assets/faq.svg";
import { internalPath } from "./routes";

export const navigation = [
  {
    text: "Home",
    link: internalPath.home,
    icon: home,
  },
  {
    text: "Send money",
    link: internalPath.sendMoney.base,
    icon: send,
  },
  {
    text: "Receive Money",
    link: internalPath.receiveMoney.base,
    icon: receive,
  },
  {
    text: "Exchange",
    link: internalPath.exchange,
    icon: exchange,
  },
  {
    text: "Counterparties",
    link: internalPath.counterparties.base,
    icon: counterparties,
  },
  {
    text: "Transactions",
    link: internalPath.transactions,
    icon: transactions,
  },
  {
    text: "Support",
    link: internalPath.support,
    icon: support,
  },
  {
    text: "FAQ",
    link: internalPath.faq,
    icon: faq,
  },
] as const;
