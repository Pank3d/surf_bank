import style from "./section-transaction.module.scss";
import { Title, Table } from "@/shared/ui";

export const SectionTransaction = () => (
  <div className={style.container}>
    <Title className={style.title}>History</Title>
    <Table />
  </div>
);
