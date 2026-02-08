import { useState } from "react";
import style from "./Faq.module.scss";
import plusIcon from "./assets/plus.svg";
import clsx from "clsx";

interface Props {
  question: string;
  answer: string;
}

export const Faq = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={style.faq}>
      <div className={style.title}>
        <h4>{question}</h4>
        <img
          className={clsx(style.icon, isOpen ? style.rotate : "")}
          src={plusIcon}
          alt=""
        />
      </div>
      <p className={clsx(style.answer, isOpen && style.active)}>{answer}</p>
    </div>
  );
};
