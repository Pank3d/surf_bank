import type { ReactNode } from "react";
import style from "./Button.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  className?: string;
  arrow?: boolean;
  href?: string;
}

export const Button = ({ children, className, arrow, href }: Props) => {
  if (href) {
    return (
      <Link className={clsx(style.button, className)} to={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={clsx(style.button, className)}>
      {children}
      {arrow && (
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9922 0.830688C11.0584 0.831282 11.1237 0.845589 11.1846 0.871704C11.2456 0.897908 11.3015 0.935279 11.3477 0.983032L11.3535 0.989868L17.0107 6.64612C17.1044 6.7398 17.1571 6.86717 17.1572 6.99963C17.1572 7.13206 17.1043 7.25942 17.0107 7.35315L11.3594 13.0045C11.2651 13.0955 11.1388 13.1463 11.0078 13.1451C10.877 13.144 10.7518 13.0911 10.6592 12.9987C10.5665 12.906 10.5138 12.7801 10.5127 12.649C10.5118 12.5508 10.5393 12.4551 10.5918 12.3737L10.6523 12.2975L15.4502 7.49963H1C0.867392 7.49963 0.740253 7.44692 0.646484 7.35315C0.552823 7.2594 0.5 7.13216 0.5 6.99963C0.500091 6.86715 0.552797 6.73981 0.646484 6.64612C0.740236 6.55246 0.867473 6.49963 1 6.49963H15.4502L14.5967 5.64612L10.6465 1.6969V1.69592L10.6406 1.69006L10.5762 1.61487C10.5574 1.58767 10.5414 1.55847 10.5283 1.52795C10.5021 1.46697 10.4879 1.40096 10.4873 1.33459C10.4868 1.26836 10.5003 1.20255 10.5254 1.14124C10.5505 1.07998 10.587 1.02401 10.6338 0.977173C10.6807 0.930225 10.7374 0.892938 10.7988 0.867798C10.8602 0.842774 10.926 0.830113 10.9922 0.830688Z"
            fill="white"
            stroke="white"
          />
        </svg>
      )}
    </button>
  );
};
