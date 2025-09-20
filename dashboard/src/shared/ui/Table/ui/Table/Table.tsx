import style from "./Table.module.scss";
import { tableData } from "../../model/data";
import { TableRow } from "../TableRow/TableRow";
import { TableRowMobile } from "../TableRow/TableRow-mobile";

export const Table = () => (
  <>
    <table className={style.table}>
      <thead className={style.head}>
        <tr className={style.row}>
          <th className={style.cell}>ID</th>
          <th className={style.cell}>Date</th>
          <th className={style.cell}>Transfer amount</th>
          <th className={style.cell}>Amount recevied</th>
          <th className={style.cell}>Type</th>
          <th className={style.cell}>Fee</th>
          <th className={style.cell}>Status</th>
        </tr>
      </thead>
      <tbody className={style.body}>
        {tableData.map(
          (
            {
              id,
              date,
              transfer_amount,
              received_amount,
              type,
              fee,
              status,
              sender,
              receiver,
            },
            index
          ) => (
            <TableRow
              key={index}
              id={id}
              date={date}
              transfer_amount={transfer_amount}
              received_amount={received_amount}
              type={type}
              fee={fee}
              status={status}
              sender={sender}
              receiver={receiver}
            />
          )
        )}
      </tbody>
    </table>

    <table className={style.table__mobile}>
      <tbody className={style.body}>
        {tableData.map(
          (
            { id, date, transfer_amount, received_amount, type, fee, status },
            index
          ) => (
            <TableRowMobile
              key={index}
              id={id}
              date={date}
              transfer_amount={transfer_amount}
              received_amount={received_amount}
              type={type}
              fee={fee}
              status={status}
            />
          )
        )}
      </tbody>
    </table>
  </>
);
