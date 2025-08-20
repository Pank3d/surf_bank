import style from "./section-we-empower.module.scss";
import { H2 } from "@/shared/ui";
import { usePageMainData } from "@/shared/api";

export const SectionWeEmpower = () => {
  const { data } = usePageMainData();

  return (
    <section className={style.section}>
      <div className={style.section__inner}>
        <H2 className={style.title}>We empower</H2>
        <div className={style.cards}>
          {data?.we_empower_cards_data?.map((item) => (
            <div className={style.card}>
              <div className={style.card__title}>{item.title}</div>
              <div className={style.card__description}>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
