import style from "./section-table.module.scss";
import { Table } from "@/shared/ui";
import { Title } from "@/shared/ui";

export const SectionTable = () => (
  <div className={style.container}>
    <Title>History</Title>
    <Table />
  </div>
);
