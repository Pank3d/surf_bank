import style from "./ArrowButton.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  href?: string;
  icon: string;
  onClick?: () => void;
}

export const ArrowButton = ({ className, href, icon, onClick }: Props) => {
  if (href) {
    return (
      <Link to={href}>
        <button className={clsx(style.button, className)}>
          <img src={icon} alt="" />
        </button>
      </Link>
    );
  }

  return (
    <button className={clsx(style.button, className)} onClick={onClick}>
      <img src={icon} alt="" />
    </button>
  );
};
