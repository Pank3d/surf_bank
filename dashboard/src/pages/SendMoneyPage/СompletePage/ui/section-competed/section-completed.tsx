import style from "./section-completed.module.scss";
import checkFilled from "@/assets/check-fill.svg";
import { Button, Title } from "@/shared/ui";
import { internalPath } from "@/shared/routes/routes";

export const SectionCompleted = () => (
  <div className={style.container}>
    <img className={style.icon} src={checkFilled} alt="" />
    <Title>Success!</Title>
    <Button href={internalPath.home} dark className={style.button}>
      Continue
    </Button>
  </div>
);
