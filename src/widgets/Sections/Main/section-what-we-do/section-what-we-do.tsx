import style from "./section-what-we-do.module.scss";
import img from "@/assets/images/section-what-we-do/img-2.webp";
import { H2, Paragraph } from "@/shared/ui";

export const SectionWhatWeDo = () => (
  <section className={style.section}>
    <div className={style.section__inner}>
      <Paragraph className={style.description}>
        Surf Bank available in 175+ countries
      </Paragraph>
      <H2>What we do?</H2>
      <Paragraph className={style.description}>
        We're opening a settlement accounts, support corporate cards and OTC
        deals
      </Paragraph>
    </div>
    <div className={style.img}>
      <img src={img} alt="" />
    </div>
  </section>
);
