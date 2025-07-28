import style from "./Header.module.scss";
import { Button } from "@/shared/ui";

export const Header = () => (
  <div className={style.header}>
    <div className={style.logo}>
      <img src="/logo.svg" alt="" />
    </div>
    <nav className={style.navigation}>
      <ul className={style.navigation__list}>
        <li>
          <a className={style.navigation__list_item} href="#">
            Banking
          </a>
        </li>
        <li>
          <a className={style.navigation__list_item} href="#">
            Card issuance
          </a>
        </li>
        <li>
          <a className={style.navigation__list_item} href="#">
            Processing
          </a>
        </li>
        <li>
          <a className={style.navigation__list_item} href="#">
            OTC deals
          </a>
        </li>
        <li>
          <a className={style.navigation__list_item} href="#">
            About Us
          </a>
        </li>
      </ul>
    </nav>
    <div className={style.navigation__buttons}>
      login
      <Button className={style.button}>Open account</Button>
    </div>
  </div>
);
