import style from "./section-secure-our-business.module.scss";
import img_1 from "@/assets/images/section-secure-our-business/img-1.webp";
import img_1_mobile from "@/assets/images/section-secure-our-business/img-1-mobile.webp";

export const SectionSecureOurBusiness = () => (
  <section className={style.section}>
    <h2 className={style.title}>
      We make it safer,
      <span className={style.title__color}>
        {" "}
        faster and profitable <br /> for businesses{" "}
      </span>
      to move money around the world.
    </h2>
    <div className={style.img}>
      <picture>
        <source srcSet={img_1_mobile} media="(max-width: 767px)" />
        <source srcSet={img_1} media="(min-width: 768px)" />
        <img src={img_1} alt="" className={style.img__content} />
      </picture>
    </div>
  </section>
);
