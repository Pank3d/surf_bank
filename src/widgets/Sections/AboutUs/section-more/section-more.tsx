import { Section, H2, Paragraph } from "@/shared/ui";
import style from "./section-more.module.scss";
import { usePageAboutData } from "@/shared/api";
import star from "@/assets/images/section-more/star.svg";
import earth from "@/assets/images/section-more/earth.svg";
import lifebuoy from "@/assets/images/section-more/lifebuoy.svg";

const icons = [star, earth, lifebuoy];

export const SectionMore = () => {
  const { data } = usePageAboutData();

  return (
    <Section className={style.section}>
      <H2 className={style.title}>More than a banking account</H2>
      <Paragraph className={style.description}>
        Minimise our costs. Maximise our revenue.
      </Paragraph>

      <div className={style.cards}>
        {data?.cards.map(({ title, description }, index) => (
          <div key={index} className={style.card}>
            <img className={style.icon} src={icons[index]} alt={title} />
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
