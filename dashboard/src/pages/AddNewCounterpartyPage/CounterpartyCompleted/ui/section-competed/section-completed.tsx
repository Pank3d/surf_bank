import style from "./section-completed.module.scss";
import checkFilled from "@/assets/check-fill.svg";
import { Button, Title } from "@/shared/ui";
import { internalPath } from "@/shared/routes/routes";

export const SectionCompleted = () => (
  <div className={style.container}>
    <img className={style.icon} src={checkFilled} alt="" />
    <Title>Success!</Title>
    <p className={style.description}>
      You can now send fiat and digital assets payments to this counterparty.
    </p>
    <Button href={internalPath.home} dark className={style.button}>
      Continue
    </Button>
  </div>
);
