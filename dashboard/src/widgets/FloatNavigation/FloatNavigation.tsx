import style from "./FloatNavigation.module.scss";

export const FloatNavigation = () => (
  <div className={style.float__navigation}>
    <button className={style.float__button}>Terms & Conditions</button>
    <span className={style.float__ellipse} />
    <button className={style.float__button}>Privacy & Cookies</button>
  </div>
);
