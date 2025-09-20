import { Section } from "@/shared/ui";
import { Outlet } from "react-router-dom";
import { Steps } from "@/widgets";
import { internalPath } from "@/shared/routes/routes";

export const AddNewCounterpartyLayoutPage = () => (
  <Section title="Add  counterparty">
    <Steps
      steps={[
        {
          title: "Counterparty details",
          link: internalPath.counterparties.counterpartyDetails,
        },
        {
          title: "Account details",
          link: internalPath.counterparties.accountDetails,
        },
        {
          title: "Completed",
          link: internalPath.counterparties.counterpartyCompleted,
        },
      ]}
    />
    <Outlet />
  </Section>
);
