import { useState } from "react";
import style from "./Header.module.scss";
import { Button } from "@/shared/ui";
import clsx from "clsx";
import { useBodyScrollLock } from "@/shared/hooks";
import { Link } from "react-router-dom";
import { internalPaths } from "@/shared/routes/paths";
import { useHeaderData } from "@/shared/api";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data } = useHeaderData();

  useBodyScrollLock(menuOpen);

  return (
    <div className={style.header}>
      <nav className={clsx(style.menu__mobile, !menuOpen && style.close)}>
        <ul className={style.menu__mobile_list}>
          <li className={style.menu__mobile_list_item}>
            <Link to={internalPaths.banking}>Banking</Link>
          </li>
          <li className={style.menu__mobile_list_item}>Card issuance</li>
          <li className={style.menu__mobile_list_item}>
            <Link to={internalPaths.comingSoon}>Processing</Link>
          </li>
          <li className={style.menu__mobile_list_item}>
            <Link to={internalPaths.comingSoon}>OTC deals</Link>
          </li>
          <li className={style.menu__mobile_list_item}>
            <Link to={internalPaths.aboutUs}>About Us</Link>
          </li>
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
              <Link
                className={style.navigation__list_item}
                to={internalPaths.banking}
              >
                Banking
              </Link>
            </li>
            <li>
              <Link
                className={style.navigation__list_item}
                to={internalPaths.comingSoon}
              >
                Card issuance
              </Link>
            </li>
            <li>
              <Link
                className={style.navigation__list_item}
                to={internalPaths.comingSoon}
              >
                Processing
              </Link>
            </li>
            <li>
              <Link
                className={style.navigation__list_item}
                to={internalPaths.comingSoon}
              >
                OTC deals
              </Link>
            </li>
            <li>
              <Link
                className={style.navigation__list_item}
                to={internalPaths.aboutUs}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className={style.navigation__buttons}>
          <Link className={style.link} to={internalPaths.login}>
            Log in
          </Link>
          <Button className={style.button} href={data?.button_link}>
            Open account
          </Button>
        </div>
      </div>
    </div>
  );
};
