import style from "./Input.module.scss";
import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  placeholder: string;
  className?: string;
}

export const Input = ({ placeholder, className, ...props }: Props) => (
  <input
    type="text"
    className={clsx(style.input, className)}
    placeholder={placeholder}
    {...props}
  />
);
