import style from "./Navigation.module.scss";
import logo from "@/assets/logo-black.svg";
import { navigation } from "@/shared/routes";
import { Link } from "react-router-dom";
import sighOut from "@/assets/sign-out.svg";
import { ArrowButton } from "@/shared/ui";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import arrow from "@/assets/arrow.svg";

export const Navigation = () => {
  const pathname = useLocation().pathname;

  const handleSignOut = () => {
    const frontendUrl = import.meta.env.VITE_FRONTEND_URL;
    if (frontendUrl) {
      window.location.href = frontendUrl;
    }
  };

  return (
    <article className={style.navigation}>
      <img src={logo} alt="" />
      <nav>
        <ul className={style.navigation__list}>
          {navigation.map(({ text, link, icon }) => (
            <li key={text}>
              <Link
                className={clsx(
                  style.navigation__list_item,
                  pathname === link && style.active
                )}
                to={link}
              >
                <img src={icon} alt="" />
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={style.button__out} onClick={handleSignOut}>
        <img src={sighOut} alt="" />
        <span>Sign out</span>
        <ArrowButton icon={arrow} />
      </button>
    </article>
  );
};
