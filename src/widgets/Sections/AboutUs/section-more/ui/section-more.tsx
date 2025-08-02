import { Section, H2, Paragraph } from "@/shared/ui";
import style from "./section-more.module.scss";
import { cardsData } from "@/widgets/Sections/AboutUs/section-more/model/data";

export const SectionMore = () => (
  <Section className={style.section}>
    <H2 className={style.title}>More than a banking account</H2>
    <Paragraph className={style.description}>
      Minimise our costs. Maximise our revenue.
    </Paragraph>

    <div className={style.cards}>
      {cardsData.map(({ icon, title, description }, index) => (
        <div key={index} className={style.card}>
          <img className={style.icon} src={icon} alt={title} />
          <h3 className={style.title}>{title}</h3>
          <p className={style.description}>{description}</p>
        </div>
      ))}
    </div>
  </Section>
);
