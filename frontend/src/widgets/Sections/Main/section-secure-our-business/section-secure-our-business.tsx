import style from "./section-secure-our-business.module.scss";
import img_1 from "@/assets/images/section-secure-our-business/Img-1.webp";
import img_2 from "@/assets/images/section-secure-our-business/img-2.webp";
import img_1_mobile from "@/assets/images/section-secure-our-business/img-1-mobile.webp";
import { useEffect, useState } from "react";

export const SectionSecureOurBusiness = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const elementStyle = {
    transform: `translate(
      ${(mousePosition.x - window.innerWidth / 2) * 0.05}px,
      ${(mousePosition.y - window.innerHeight / 2) * 0.05}px
    )`,
    transition: "transform 0.1s ease-out",
  };

  return (
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
        <img
          style={elementStyle}
          src={img_2}
          className={style.img__chips}
          alt=""
        />
        <picture>
          <source srcSet={img_1_mobile} media="(max-width: 767px)" />
          <source srcSet={img_1} media="(min-width: 768px)" />
          <img src={img_1} alt="" className={style.img__content} />
        </picture>
      </div>
    </section>
  );
};
