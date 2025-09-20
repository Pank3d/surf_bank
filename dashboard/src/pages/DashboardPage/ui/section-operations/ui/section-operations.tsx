import style from "./section-operations.module.scss";
import { buttons } from "../model/data";

export const SectionOperations = () => (
  <div className={style.container}>
    <div className={style.info}>
      <h4 className={style.price}>$3 600 000.00</h4>
      <span className={style.company}>Surf Bank LLC</span>
    </div>
    <div className={style.buttons}>
      {buttons.map(({ icon, text, fn }, index) => (
        <button className={style.button} key={index} onClick={fn}>
          <span className={style.icon}>
            <img src={icon} alt="" />
          </span>
          <span>{text}</span>
        </button>
      ))}
    </div>
  </div>
);
