import style from "./Input.module.scss";
import clsx from "clsx";

interface Props {
  placeholder: string;
  className?: string;
  inputValue?: string;
}

export const Input = ({ placeholder, className, inputValue }: Props) => (
  <input
    className={clsx(style.input, className)}
    type="text"
    placeholder={placeholder}
    value={inputValue}
  />
);
