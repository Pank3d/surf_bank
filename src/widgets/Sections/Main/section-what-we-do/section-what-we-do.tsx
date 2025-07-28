import style from "./section-what-we-do.module.scss";
import img from "@/assets/images/section-what-we-do/img-2.webp";

export const SectionWhatWeDo = () => (
  <section className={style.section}>
    <div className={style.section__inner}>
      <p className={style.description}>Surf Bank available in 175+ countries</p>
      <h2 className={style.title}>What we do?</h2>
      <p className={style.description}>
        We're opening a settlement accounts, support corporate cards and OTC
        deals
      </p>
    </div>
    <div className={style.img}>
      <img src={img} alt="" />
    </div>
  </section>
);
