import { Button } from "@/shared/ui";
import style from "./ButtonColorize.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const ButtonColorize = ({
  children,
  className,
  href,
  onClick,
}: Props) => {
  if (href) {
    return (
      <Link to={href} className={clsx(style.button, className)}>
        {children}
        <ArrowColorize />
      </Link>
    );
  }

  return (
    <Button className={clsx(style.button, className)} onClick={onClick}>
      {children}
      <ArrowColorize />
    </Button>
  );
};

const ArrowColorize = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9922 5.83069C14.0584 5.83128 14.1237 5.84559 14.1846 5.8717C14.2456 5.89791 14.3015 5.93528 14.3477 5.98303L14.3535 5.98987L20.0107 11.6461C20.1044 11.7398 20.1571 11.8672 20.1572 11.9996C20.1572 12.1321 20.1043 12.2594 20.0107 12.3531L14.3594 18.0045C14.2651 18.0955 14.1388 18.1463 14.0078 18.1451C13.877 18.144 13.7518 18.0911 13.6592 17.9987C13.5665 17.906 13.5138 17.7801 13.5127 17.649C13.5118 17.5508 13.5393 17.4551 13.5918 17.3737L13.6523 17.2975L18.4502 12.4996H4C3.86739 12.4996 3.74025 12.4469 3.64648 12.3531C3.55282 12.2594 3.5 12.1322 3.5 11.9996C3.50009 11.8671 3.5528 11.7398 3.64648 11.6461C3.74024 11.5525 3.86747 11.4996 4 11.4996H18.4502L17.5967 10.6461L13.6465 6.6969V6.69592L13.6406 6.69006L13.5762 6.61487C13.5574 6.58767 13.5414 6.55847 13.5283 6.52795C13.5021 6.46697 13.4879 6.40096 13.4873 6.33459C13.4868 6.26836 13.5003 6.20255 13.5254 6.14124C13.5505 6.07998 13.587 6.02401 13.6338 5.97717C13.6807 5.93023 13.7374 5.89294 13.7988 5.8678C13.8602 5.84277 13.926 5.83011 13.9922 5.83069Z"
      fill="white"
      stroke="url(#paint0_linear_108_263)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_108_263"
        x1="3"
        y1="11.9877"
        x2="20.6568"
        y2="11.9877"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DCF353" />
        <stop offset="0.5" stopColor="#A4DDFC" />
        <stop offset="1" stopColor="#AB86FF" />
      </linearGradient>
    </defs>
  </svg>
);
