import style from "./section-complete.module.scss";
import bitcoin from "@/assets/bitcoin.svg";
import { ArrowButton, Button } from "@/shared/ui";
import arrow from "@/assets/arrow.svg";
import etherium from "@/assets/ethereum.svg";
import checkDone from "@/assets/check-fill.svg";

interface Props {
  onClick: () => void;
}

export const SectionComplete = ({ onClick }: Props) => (
  <div className={style.container}>
    <div className={style.currencies}>
      <div className={style.currency}>
        <div className={style.info}>
          <img className={style.icon} src={etherium} alt="" />
          <h4 className={style.title}>ETH</h4>
        </div>
        <p className={style.id}>f8g7h8j90hk7g8d9f0hjhg789</p>
      </div>
      <ArrowButton className={style.arrow__button} icon={arrow} />
      <div className={style.currency}>
        <div className={style.info}>
          <img className={style.icon} src={bitcoin} alt="" />
          <h4 className={style.title}>BTC</h4>
        </div>
        <p className={style.id}>f8g7h8j90hk7g8d9f0hjhg789</p>
      </div>
    </div>
    <div className={style.card}>
      <img className={style.icon} src={checkDone} alt="" />
      <span className={style.description}>Exchange amount</span>
      <h3 className={style.title}>150.00 ETH</h3>
    </div>
    <Button onClick={onClick} className={style.button} dark>
      Continue
    </Button>
  </div>
);
