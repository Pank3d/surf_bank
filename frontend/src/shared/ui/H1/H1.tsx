import type { ReactNode } from "react";
import style from "./H1.module.scss";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: Props) => (
  <h1 className={clsx(style.h1, className)}>{children}</h1>
);
