import style from "./section-we-empower.module.scss";
import { cardData } from "../model/data";
import { H2 } from "@/shared/ui";

export const SectionWeEmpower = () => (
  <section className={style.section}>
    <div className={style.section__inner}>
      <H2 className={style.title}>We empower</H2>
      <div className={style.cards}>
        {cardData.map((item) => (
          <div className={style.card}>
            <div className={style.card__title}>{item.title}</div>
            <div className={style.card__description}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
