import style from "./Textarea.module.scss";
import clsx from "clsx";
interface Props {
  placeholder: string;
  className?: string;
}

export const Textarea = ({ placeholder, className }: Props) => (
  <textarea
    className={clsx(style.textarea, className)}
    placeholder={placeholder}
  />
);
