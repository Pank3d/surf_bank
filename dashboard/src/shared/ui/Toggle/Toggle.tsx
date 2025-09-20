import style from "./Toggle.module.scss";
import { useState } from "react";
import clsx from "clsx";

interface Props {
  toggles: string[];
  onClick: (tab: string) => void;
  className?: string;
}

export const Toggle = ({ toggles, onClick, className }: Props) => {
  const [tab, setTab] = useState<string>(toggles[0]);

  return (
    <div className={clsx(style.container, className)}>
      {toggles.map((toggle) => (
        <button
          onClick={() => {
            setTab(toggle);
            onClick?.(toggle);
          }}
          className={clsx(style.button, tab === toggle && style.active)}
        >
          {toggle}
        </button>
      ))}
    </div>
  );
};
