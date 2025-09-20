import style from "./TableRow-mobile.module.scss";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  id: string;
  date: string;
  status: string;
  transfer_amount: string;
  received_amount: string;
  type: string;
  fee: string;
}

export const TableRowMobile = ({
  id,
  date,
  status,
  transfer_amount,
  received_amount,
  type,
  fee,
}: Props) => {
  const [isTableOpen, setIsTableOpen] = useState(false);

  const toggleTable = () => setIsTableOpen(!isTableOpen);

  return (
    <>
      <tr onClick={toggleTable} className={style.row}>
        <td className={style.cell}>
          <span className={style.title}>{id}</span>
          <span className={style.date}>{date}</span>
        </td>
        <td className={style.cell}>
          <div className={style.cell__inner}>
            <span>{status}</span>
            <button className={clsx(style.button, isTableOpen && style.active)}>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.47136 5.47133C5.34634 5.59631 5.1768 5.66652 5.00003 5.66652C4.82325 5.66652 4.65371 5.59631 4.52869 5.47133L0.757359 1.69999C0.693685 1.6385 0.642897 1.56493 0.607958 1.4836C0.573018 1.40226 0.554627 1.31478 0.553858 1.22626C0.553089 1.13774 0.569957 1.04996 0.603478 0.968026C0.636998 0.886095 0.6865 0.81166 0.749095 0.749064C0.81169 0.686469 0.886125 0.636967 0.968056 0.603447C1.04999 0.569926 1.13777 0.553058 1.22629 0.553828C1.31481 0.554597 1.40229 0.572988 1.48363 0.607927C1.56496 0.642866 1.63853 0.693654 1.70003 0.757328L5.00003 4.05733L8.30003 0.757328C8.42576 0.635889 8.59416 0.568693 8.76896 0.570212C8.94376 0.571731 9.11097 0.641843 9.23457 0.765449C9.35818 0.889054 9.42829 1.05626 9.42981 1.23106C9.43133 1.40586 9.36413 1.57426 9.24269 1.69999L5.47136 5.47133Z"
                  fill="initial"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
      {isTableOpen && (
        <>
          <tr className={style.row__details}>
            <td className={style.cell}>
              <span>Transfer amount</span>
              <span>{transfer_amount}</span>
            </td>
            <td className={style.cell}>
              <span>Amount recevied</span>
              <span>{received_amount}</span>
            </td>
          </tr>
          <tr className={style.row__details}>
            <td className={style.cell}>
              <span>Type</span>
              <span>{type}</span>
            </td>
            <td className={style.cell}>
              <span>Fee</span>
              <span>{fee}</span>
            </td>
          </tr>
        </>
      )}
    </>
  );
};
