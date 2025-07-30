import clsx from "clsx";
import style from "./Paragraph.module.scss";

interface Props {
  children: string;
  className?: string;
}

export const Paragraph = ({ children, className }: Props) => (
  <p className={clsx(style.description, className)}>{children}</p>
);
