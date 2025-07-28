import style from "./section-secure-our-business.module.scss";
import img_1 from "@/assets/images/section-secure-our-business/img-1.webp";

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
      <img src={img_1} alt="" />
    </div>
  </section>
);
