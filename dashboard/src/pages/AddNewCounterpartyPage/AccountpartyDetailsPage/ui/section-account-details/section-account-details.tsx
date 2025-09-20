import { internalPath } from "@/shared/routes/routes";
import style from "./section-account-details.module.scss";
import { Title, Input, Select } from "@/shared/ui";
import { StepsButtons } from "@/widgets";

export const SectionAccountDetails = () => (
  <form className={style.form} action="">
    <Select
      className={style.select}
      label="Your counterparty's bank location (If sending to a digital asset
 wallet, choose digital assets) *"
      placeholder="Select a type"
    />
    <div className={style.container}>
      <Title>Bank details</Title>
      <div className={style.form__info}>
        <Select
          className={style.select}
          label="Currency"
          placeholder="Select a currency"
        />
        <Select
          className={style.select}
          label="Sending method"
          placeholder="Select a method"
        />
        <Input className={style.input} placeholder="IBAN/Account number" />
        <Input className={style.input} placeholder="Bank name" />
        <Select className={style.select} placeholder="Digital Assets" />
      </div>
    </div>
    <div className={style.container}>
      <Title>DLT address</Title>
      <div className={style.address__info}>
        <Select label="Currency" placeholder="Select a currency" />
        <Select placeholder="Wallet" />
        <Select label="Wallet Type" placeholder="Select a currency" />
      </div>
    </div>
    <StepsButtons
      back={internalPath.counterparties.counterpartyDetails}
      to={internalPath.counterparties.counterpartyCompleted}
    />
  </form>
);
