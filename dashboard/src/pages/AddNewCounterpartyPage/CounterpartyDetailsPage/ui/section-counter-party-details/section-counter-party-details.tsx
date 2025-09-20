import { internalPath } from "@/shared/routes/routes";
import style from "./section-counter-party-details.module.scss";
import { Title, Input, Button } from "@/shared/ui";

export const SectionCounterpartyDetails = () => (
  <form className={style.form} action="">
    <div className={style.container}>
      <Title>Counterparty information</Title>
      <div className={style.form__info}>
        <Input className={style.input} placeholder="Profile type*" />
        <Input
          className={style.input}
          placeholder="Full name / Business name*"
        />
        <Input className={style.input} placeholder="Counterparty email" />
        <Input className={style.input} placeholder="Line of business*" />
        <Input className={style.input} placeholder="Counterparty website" />
      </div>
    </div>
    <div className={style.container}>
      <Title>Counterparty address</Title>
      <div className={style.address__info}>
        <Input className={style.input} placeholder="Country*" />
        <Input className={style.input} placeholder="Street*" />
        <Input className={style.input} placeholder="State*" />
        <Input className={style.input} placeholder="City*" />
        <Input className={style.input} placeholder="Postcode*" />
      </div>
    </div>
    <Button
      href={internalPath.counterparties.accountDetails}
      className={style.button}
      dark
      arrowVisible
    >
      Continue
    </Button>
  </form>
);
