import style from "./CurrencySelect.module.scss";
import { Input } from "@/shared/ui";
import arrow from "@/assets/arrow-currency.svg";

interface Props {
  icon: string;
  currency: string;
  placeholder: string;
  description?: {
    leftText: string;
    rightText: string;
  };
}

export const CurrencySelect = ({
  icon,
  currency,
  placeholder,
  description,
}: Props) => (
  <div className={style.container}>
    <div className={style.selector}>
      <div className={style.select}>
        <img src={icon} alt="" />
        <span className={style.currency}>{currency}</span>
        <img src={arrow} alt="" />
      </div>
      <Input className={style.input} placeholder={placeholder} />
    </div>
    <div className={style.description}>
      <span>{description?.leftText}</span>
      <span>{description?.rightText}</span>
    </div>
  </div>
);
