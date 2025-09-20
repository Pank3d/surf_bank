import style from "./Notification.module.scss";
import clsx from "clsx";
import warningBlue from "@/assets/warning-blue.svg";
import warningOrange from "@/assets/warning-orange.svg";
import { Button } from "@/shared/ui";

interface Props {
  title?: string;
  description: string;
  className?: string;
  color?: "orange" | "blue";
  buttonText?: string;
}

export const Notification = ({
  title,
  description,
  className,
  color = "blue",
  buttonText,
}: Props) => (
  <div
    className={clsx(
      style.notification,
      {
        [style.orange]: color === "orange",
      },
      className
    )}
  >
    <img src={color === "blue" ? warningBlue : warningOrange} alt="" />
    <div className={style.info}>
      {title && <h2 className={style.title}>{title}</h2>}
      <p
        className={clsx(style.description, {
          [style.orange__text]: color === "orange",
        })}
      >
        {description}
      </p>
    </div>
    {buttonText && <Button className={style.button}>{buttonText}</Button>}
  </div>
);
