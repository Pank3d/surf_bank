import style from "./Input.module.scss";
interface Props {
  placeholder: string;
}
export const Input = ({ placeholder }: Props) => (
  <input type="text" className={style.input} placeholder={placeholder} />
);
