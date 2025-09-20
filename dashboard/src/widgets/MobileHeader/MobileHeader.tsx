import style from "./MobileHeader.module.scss";
import logo from "@/assets/logo-black.svg";
import { navigation } from "@/shared/routes";
import { useState } from "react";
import { Link } from "react-router-dom";
import sighOut from "@/assets/sign-out.svg";
import clsx from "clsx";

export const MobileHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleSignOut = () => {
    const frontendUrl = import.meta.env.VITE_FRONTEND_URL;
    if (frontendUrl) {
      window.location.href = frontendUrl;
    }
  };

  return (
    <header className={style.header}>
      <img src={logo} alt="" />
      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={clsx(style.burger, isOpenMenu && style.burger__open)}
      >
        <span />
      </button>
      <nav className={clsx(style.navigation, isOpenMenu && style.open)}>
        <ul className={style.navigation__list}>
          {navigation.map(({ text, link, icon }) => (
            <li onClick={() => setIsOpenMenu(false)} key={text}>
              <Link className={style.navigation__item} to={link}>
                <img src={icon} alt="" />
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <button className={style.button__out} onClick={handleSignOut}>
          <img src={sighOut} alt="" />
          <span>Sign out</span>
        </button>
      </nav>
    </header>
  );
};
