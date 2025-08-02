import style from "./section-about.module.scss";
import { Button, H2, Paragraph } from "@/shared/ui";
import img_1 from "@/assets/images/section-about/img-1.png";

export const SectionAbout = () => (
  <section className={style.section}>
    <div className={style.section__inner}>
      <div className={style.info}>
        <H2 className={style.title}>About Us</H2>
        <Paragraph className={style.description}>
          Surf Bank provides high-performance settlement accounts by a Tier-1, a
          corporate payments platform and fintech infrastructure that bridging
          fiat and digital assets.
        </Paragraph>
        <Button className={style.button} arrow>
          Learn more
        </Button>
      </div>
      <div className={style.img}>
        <img src={img_1} alt="" />
      </div>
    </div>
  </section>
);
