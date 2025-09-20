import type { ReactNode } from "react";
import style from "./Button.module.scss";
import clsx from "clsx";
import arrow from "@/assets/arrow-white.svg";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  onClick?: () => void;
  href?: string;
  arrowVisible?: boolean;
}

export const Button = ({
  children,
  className,
  dark,
  onClick,
  href,
  arrowVisible,
}: Props) => {
  if (href) {
    return (
      <Link to={href}>
        <button className={clsx(style.button, className, dark && style.dark)}>
          {children}
          {arrowVisible && <img src={arrow} alt="" />}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={clsx(style.button, className, dark && style.dark)}
    >
      {children}
      {arrowVisible && <img src={arrow} alt="" />}
    </button>
  );
};
