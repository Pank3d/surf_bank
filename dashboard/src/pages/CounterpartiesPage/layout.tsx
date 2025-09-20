import { Section } from "@/shared/ui";
import { Outlet } from "react-router-dom";

export const CounterpartiesLayoutPage = () => (
  <Section title="Counterparties">
    <Outlet />
  </Section>
);
