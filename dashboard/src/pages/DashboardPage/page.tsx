import { Section } from "@/shared/ui";
import {
  SectionNotifications,
  SectionOperations,
  SectionFinancial,
  SectionTable,
} from "./ui";

export const DashboardPage = () => (
  <Section title="Dashboard">
    <SectionNotifications />
    <SectionOperations />
    <SectionFinancial />
    <SectionTable />
  </Section>
);
