import type { ReactNode } from "react";
import style from "./Button.module.scss";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className }: Props) => (
  <button className={clsx(style.button, className)}>{children}</button>
);
