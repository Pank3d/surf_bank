import style from "./section-financial.module.scss";
import { MoneyCard, Toggle, ArrowButton } from "@/shared/ui";
import { cards } from "../model/data";
import useEmblaCarousel from "embla-carousel-react";
import arrow from "@/assets/arrow.svg";

export const SectionFinancial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  return (
    <div className={style.container}>
      <div className={style.financials}>
        <Toggle toggles={["Crypto", "Fiat"]} onClick={() => {}} />

        <div className={style.buttons}>
          <ArrowButton
            onClick={() => emblaApi?.scrollPrev()}
            icon={arrow}
            className={style.button}
          />
          <ArrowButton
            onClick={() => emblaApi?.scrollNext()}
            icon={arrow}
            className={style.button}
          />
        </div>
      </div>
      <div className={style.cards} ref={emblaRef}>
        <div className={style.cards__container}>
          {cards.map(({ icon, title, price, rate, convertPrice }, index) => (
            <MoneyCard
              className={style.card}
              key={index}
              icon={icon}
              title={title}
              price={price}
              rate={rate}
              convertPrice={convertPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
