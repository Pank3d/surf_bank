import { useLocation } from "react-router-dom";
import style from "./Steps.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

interface Props {
  steps: {
    title: string;
    link: string;
  }[];
}

export const Steps = ({ steps }: Props) => {
  const pathname = useLocation().pathname;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",

    dragFree: true,
  });

  const scrollToActiveStep = () => {
    if (!emblaApi) return;

    const activeIndex = steps.findIndex((step) => step.link === pathname);

    if (activeIndex === 0) {
      emblaApi.scrollTo(1);
    }

    if (activeIndex !== -1) {
      emblaApi.scrollTo(activeIndex);
    }
  };

  useEffect(() => {
    scrollToActiveStep();
  }, [pathname, emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("init", scrollToActiveStep);
      return () => {
        emblaApi.off("init", scrollToActiveStep);
      };
    }
  }, [emblaApi]);

  return (
    <div className={style.container} ref={emblaRef}>
      <div className={style.steps}>
        {steps.map(({ link, title }, index) => (
          <Link
            to={link}
            className={clsx(
              style.step,
              pathname === link && style.active,
              index === 0 && pathname === steps[0].link && style.active
            )}
            key={index}
          >
            <span>{index + 1}</span>
            <span>{title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
