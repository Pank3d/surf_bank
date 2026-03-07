import style from "./Textarea.module.scss";
import clsx from "clsx";
import type { TextareaHTMLAttributes } from "react";

interface Props extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  placeholder: string;
  className?: string;
}

export const Textarea = ({ placeholder, className, ...props }: Props) => (
  <textarea
    className={clsx(style.textarea, className)}
    placeholder={placeholder}
    {...props}
  />
);
