import { CurrencySelect, ArrowButton, Button } from "@/shared/ui";
import { Notification } from "@/widgets";
import style from "./section-exchange.module.scss";
import bitcoin from "@/assets/bitcoin.svg";
import etherium from "@/assets/ethereum.svg";
import arrowSwap from "@/assets/arrow-swap.svg";

interface Props {
  onClick: () => void;
}

export const SectionExchange = ({ onClick }: Props) => (
  <div className={style.container}>
    <div className={style.exchanges}>
      <CurrencySelect
        icon={bitcoin}
        currency="BTC"
        placeholder="150. 00"
        description={{
          leftText: "Available balance: 150.00",
          rightText: "You send",
        }}
      />
      <ArrowButton className={style.arrows} icon={arrowSwap} />
      <CurrencySelect
        description={{
          leftText: "1.00 ETH = 2 523.00 BTC",
          rightText: "You will receive",
        }}
        icon={etherium}
        currency="ETC"
        placeholder="150. 00"
      />
    </div>
    <Button onClick={onClick} dark className={style.button}>
      Exchange
    </Button>
    <div className={style.notifications}>
      <Notification
        description="Please note that currency exchange rates may fluctuate, and the final
 amount may vary based on the current market rates at the time of
 processing"
        color="orange"
      />
      <Notification
        description="Please note that currency exchange rates may fluctuate, and the final
 amount may vary based on the current market rates at the time of
 processing"
        color="orange"
      />
    </div>
  </div>
);
