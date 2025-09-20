import { Button, Input, Textarea } from "@/shared/ui";
import clsx from "clsx";
import style from "./LetsConnectForm.module.scss";

interface Props {
  className?: string;
  description?: string[];
  onSubmit?: () => void;
}

export const LetsConnectForm = ({ className, description, onSubmit }: Props) => {
  return (
    <div className={clsx(style.form, className)}>
      <div className={style.inputs}>
        <Input placeholder="Name*" />
        <Input placeholder="Email*" />
      </div>
      <div className={style.inputs}>
        <Input placeholder="Company name*" />
        <Input placeholder="Telegram or Whatsapp" />
      </div>
      <Textarea className={style.textarea} placeholder="Message*" />
      {description?.map((str, index) => (
        <p className={style.description} key={index}>
          {str}
        </p>
      ))}
      <Button className={style.button} arrow onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
};