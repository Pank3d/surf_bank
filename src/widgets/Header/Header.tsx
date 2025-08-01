import { useState } from "react";
import style from "./Header.module.scss";
import { Button } from "@/shared/ui";
import clsx from "clsx";
import { useBodyScrollLock } from "@/shared/hooks";
import { Link } from "react-router-dom";
import { internalPaths } from "@/shared/routes/paths";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useBodyScrollLock(menuOpen);

  return (
    <div className={style.header}>
      <nav className={clsx(style.menu__mobile, !menuOpen && style.close)}>
        <ul className={style.menu__mobile_list}>
          <li className={style.menu__mobile_list_item}>Banking</li>
          <li className={style.menu__mobile_list_item}>Card issuance</li>
          <li className={style.menu__mobile_list_item}>Processing</li>
          <li className={style.menu__mobile_list_item}>OTC deals</li>
          <li className={style.menu__mobile_list_item}>About Us</li>
        </ul>
      </nav>
      <div className={style.header__inner}>
        <div className={style.burger__logo}>
          <div
            className={clsx(style.burger, menuOpen && style.active)}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
          </div>
          <Link to={internalPaths.main} className={style.logo}>
            <img src="/logo.svg" alt="" />
          </Link>
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
    </div>
  );
};
