import style from "./section-hero.module.scss";

export const SectionHero = () => (
  <section className={style.section}>
    <video
      className={style.video}
      src="/video/video-1.mp4"
      autoPlay
      loop
      muted
    />
    <div className={style.section__inner}>asdasdsds</div>
  </section>
);
