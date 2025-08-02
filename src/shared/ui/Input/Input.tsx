import style from "./Input.module.scss";
import clsx from "clsx";

interface Props {
  placeholder: string;
  className?: string;
}
export const Input = ({ placeholder, className }: Props) => (
  <input
    type="text"
    className={clsx(style.input, className)}
    placeholder={placeholder}
  />
);
