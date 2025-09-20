import style from "./StepsButtons.module.scss";
import { ArrowButton } from "@/shared/ui";
import { Button } from "@/shared/ui";
import arrow from "@/assets/arrow.svg";

interface Props {
  back: string;
  to: string;
}

export const StepsButtons = ({ back, to }: Props) => (
  <div className={style.buttons}>
    <ArrowButton icon={arrow} href={back} className={style.arrow__button} />
    <Button href={to} className={style.button} dark>
      Continue
    </Button>
  </div>
);
