import style from "./section-currency.module.scss";
import { СurrencyCard, Button } from "@/shared/ui";
import { currency } from "../model/data";
import { internalPath } from "@/shared/routes/routes";

export const SectionCurrency = () => (
  <div className={style.container}>
    <div className={style.currency}>
      {currency.map(({ icon, title, description, active }) => (
        <СurrencyCard
          active={active}
          icon={icon}
          title={title}
          description={description}
        />
      ))}
    </div>

    <Button
      href={internalPath.sendMoney.currency}
      className={style.button}
      dark
    >
      Continue
    </Button>
  </div>
);
