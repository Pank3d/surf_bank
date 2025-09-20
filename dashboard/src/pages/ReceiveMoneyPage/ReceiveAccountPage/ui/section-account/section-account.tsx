import { StepsButtons } from "@/widgets";
import { СurrencyCard } from "@/shared/ui";
import { internalPath } from "@/shared/routes/routes";
import euro from "@/assets/euro-black.svg";
import style from "./section-account.module.scss";
import { Link } from "react-router-dom";

export const SectionAccount = () => (
  <>
    <div className={style.cards}>
      <СurrencyCard
        icon={euro}
        title="EUR"
        description="Balance: 11 980.14"
        id="ff87hgj9hg6hk678"
        active
      />
      <div className={style.card}>
        <h6 className={style.title}>If you need one more EUR account</h6>
        <p className={style.description}>
          Please contact
          <Link to="" className={style.link}>
            help@surfbank.io
          </Link>
          or your dedicated Customer Success manager
        </p>
      </div>
    </div>
    <StepsButtons
      back={internalPath.sendMoney.currency}
      to={internalPath.sendMoney.counterparty}
    />
  </>
);
