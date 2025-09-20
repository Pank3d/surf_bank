import { Section } from "@/shared/ui";
import { Outlet } from "react-router-dom";
import { internalPath } from "@/shared/routes/routes";
import { Steps } from "@/widgets";

export const SendMoneyLayoutPage = () => (
  <Section title="Send Money">
    <Steps
      steps={[
        {
          title: "Choose Method",
          link: internalPath.sendMoney.base,
        },
        {
          title: "Currency",
          link: internalPath.sendMoney.currency,
        },
        {
          title: "Account",
          link: internalPath.sendMoney.account,
        },
        {
          title: "Counterparty",
          link: internalPath.sendMoney.counterparty,
        },
        {
          title: "Completed",
          link: internalPath.sendMoney.completed,
        },
      ]}
    />
    <Outlet />
  </Section>
);
