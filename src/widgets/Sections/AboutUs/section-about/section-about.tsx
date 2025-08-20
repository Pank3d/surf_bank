import style from "./section-about.module.scss";
import { Button, H2, Paragraph } from "@/shared/ui";
import img_1 from "@/assets/images/section-about/img-1.png";
import { usePageAboutData } from "@/shared/api";

export const SectionAbout = () => {
  const { data } = usePageAboutData();

  console.log(data, "about data");

  return (
    <section className={style.section}>
      <div className={style.section__inner}>
        <div className={style.info}>
          <H2 className={style.title}>About Us</H2>
          <Paragraph className={style.description}>
            {data?.description || ""}
          </Paragraph>
          <Button href={data?.hero_button_link} className={style.button} arrow>
            Learn more
          </Button>
        </div>
        <div className={style.img}>
          <img src={img_1} alt="" />
        </div>
      </div>
    </section>
  );
};
