import style from "./H2.module.scss";
import clsx from "clsx";

interface Props {
  children: string;
  className?: string;
}

export const H2 = ({ children, className }: Props) => (
  <h2 className={clsx(style.title, className)}>{children}</h2>
);
