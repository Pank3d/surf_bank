import style from "./section-banking.module.scss";
import { H2, Paragraph, Button } from "@/shared/ui";
import img_1 from "@/assets/images/section-banking/12.svg";

export const SectionBanking = () => (
  <section className={style.section}>
    <div className={style.section__inner}>
      <div className={style.info}>
        <H2 className={style.title}>Banking</H2>
        <Paragraph className={style.description}>
          Open multi-currency fiat accounts with built-in digital asset custody,
          proprietary on-ramp/off-ramp solution and b2b corporate payments
          ecosystem.
        </Paragraph>
        <Button className={style.button} arrow>
          Book a demo
        </Button>
      </div>
      <div className={style.img}>
        <img src={img_1} alt="" />
      </div>
    </div>
  </section>
);
