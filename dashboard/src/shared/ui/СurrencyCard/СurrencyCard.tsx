import style from "./СurrencyCard.module.scss";
import check from "@/assets/check-green.svg";
import clsx from "clsx";

interface Props {
  icon: string;
  title: string;
  description?: string;
  active: boolean;
  id?: string;
}

export const СurrencyCard = ({
  icon,
  title,
  description,
  active,
  id,
}: Props) => (
  <div className={clsx(style.card, active && style.active)}>
    <img className={style.icon} src={icon} alt="" />
    {id ? (
      <div className={style.account}>
        <h6 className={style.title}>{title}</h6>
        <span className={style.id}>ID: {id}</span>
      </div>
    ) : (
      <h6 className={style.title}>{title}</h6>
    )}

    {description && <p className={style.description}>{description}</p>}
    {active && <img src={check} className={style.check} alt="" />}
  </div>
);
