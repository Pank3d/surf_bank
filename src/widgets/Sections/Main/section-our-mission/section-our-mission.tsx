import style from "./section-our-mission.module.scss";
import { Button } from "@/shared/ui";
import img_2 from "@/assets/images/section-our-mission/img-2.webp";

export const SectionOurMission = () => (
  <section className={style.section}>
    <div className={style.section__inner}>
      <div className={style.info}>
        <h2 className={style.title}>Our mission</h2>
        <p className={style.description}>
          Simplify and accelerate the processing of payments and cross-border
          transfers using stablecoins and cryptocurrencies
        </p>
        <Button className={style.button} arrow>
          Learn more
        </Button>
      </div>
      <div className={style.img}>
        <img src={img_2} alt="" />
      </div>
    </div>
  </section>
);
