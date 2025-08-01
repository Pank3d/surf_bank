import style from "./section-soon.module.scss";
import { Section, H1, Button } from "@/shared/ui";
import timePng from "./assets/img1.png";

export const SectionSoon = () => (
  <div className={style.container}>
    <Section className={style.section}>
      <div className={style.time}>
        <img src={timePng} alt="" />
      </div>
      <H1 className={style.title}>Coming soon!</H1>
      <p className={style.description}>
        Be the first to know about our updates
      </p>
      <Button arrow className={style.button}>
        Join waitlist
      </Button>
    </Section>
  </div>
);
