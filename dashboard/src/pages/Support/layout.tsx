import { Section } from "@/shared/ui";
import { Outlet } from "react-router-dom";

export const SupportLayoutPage = () => (
  <Section title="Support">
    <Outlet />
  </Section>
);
