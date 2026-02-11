import style from "./section-our-mission.module.scss";
import { Button, H2, Paragraph } from "@/shared/ui";
import img_2 from "@/assets/images/section-our-mission/img-2.webp";
import { usePageMainData } from "@/shared/api";

export const SectionOurMission = () => {
  const { data } = usePageMainData();

  return (
    <section className={style.section}>
      <div className={style.section__inner}>
        <div className={style.info}>
          <H2 className={style.title}>Our mission</H2>
          <Paragraph className={style.description}>
            Simplify and accelerate the processing of payments and cross-border
            transfers using stablecoins and cryptocurrencies.
          </Paragraph>
          <Button
            href={data?.our_mission_button_link}
            className={style.button}
            arrow
          >
            Learn more
          </Button>
        </div>
        <div className={style.img}>
          <img src={img_2} alt="" />
        </div>
      </div>
    </section>
  );
};
