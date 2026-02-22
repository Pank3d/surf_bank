import style from "./section-bank-action.module.scss";
import { Section, H2, ButtonColorize } from "@/shared/ui";
import img from "@/assets/images/section-bank-action/img-1.svg";
import imgMob from "@/assets/images/section-bank-action/img-1-mobile.svg";
import { usePageAboutData } from "@/shared/api";

export const SectionBankAction = () => {
  const { data } = usePageAboutData();

  return (
    <Section className={style.section}>
      <H2 className={style.title}>See Surf Bank in action</H2>
      <ButtonColorize href={data?.demo_button_link} className={style.button}>
        Watch demo
      </ButtonColorize>
      <img className={style.img} src={img} alt="" />
      <img src={imgMob} className={style.img_mob} alt="" />
    </Section>
  );
};
