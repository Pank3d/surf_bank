import type { ReactNode } from "react";
import style from "./Section.module.scss";
import clsx from "clsx";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Section = ({ className, children }: Props) => (
  <section className={clsx(style.section, className)}>{children}</section>
);
