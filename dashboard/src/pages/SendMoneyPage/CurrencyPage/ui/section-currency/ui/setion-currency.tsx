import style from "./section-currency.module.scss";
import { СurrencyCard } from "@/shared/ui";
import { currency } from "../model/data";
import { internalPath } from "@/shared/routes/routes";
import { StepsButtons } from "@/widgets";

export const SectionCurrency = () => (
  <div className={style.container}>
    <div className={style.currency}>
      {currency.map(({ icon, title, active }) => (
        <СurrencyCard active={active} icon={icon} title={title} />
      ))}
    </div>
    <StepsButtons
      back={internalPath.sendMoney.base}
      to={internalPath.sendMoney.account}
    />
  </div>
);
