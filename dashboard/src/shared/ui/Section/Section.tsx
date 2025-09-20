import type { ReactNode } from "react";
import clsx from "clsx";
import style from "./Section.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
  title: string;
}

export const Section = ({ children, className, title }: Props) => (
  <section className={clsx(style.section, className)}>
    <h1 className={style.title}>{title}</h1>
    {children}
  </section>
);
