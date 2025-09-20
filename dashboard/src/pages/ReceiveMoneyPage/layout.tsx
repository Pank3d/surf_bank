import { Section } from "@/shared/ui";
import { Outlet } from "react-router-dom";
import { internalPath } from "@/shared/routes/routes";
import { Steps } from "@/widgets";

export const ReceiveMoneyLayoutPage = () => (
  <Section title="Receive Money">
    <Steps
      steps={[
        {
          title: "Choose Method",
          link: internalPath.receiveMoney.base,
        },
        {
          title: "Currency",
          link: internalPath.receiveMoney.currency,
        },
        {
          title: "Account",
          link: internalPath.receiveMoney.account,
        },
        {
          title: "Counterparty",
          link: internalPath.receiveMoney.counterparty,
        },
        {
          title: "Completed",
          link: internalPath.receiveMoney.completed,
        },
      ]}
    />
    <Outlet />
  </Section>
);
