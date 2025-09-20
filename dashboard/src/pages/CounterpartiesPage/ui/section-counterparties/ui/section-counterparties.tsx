import style from "./section-counterparties.module.scss";
import { LLC } from "../model/data";
import copy from "@/assets/copy.svg";
import { Toggle, Button } from "@/shared/ui";
import { useState } from "react";
import { CounterpartyDetails } from "./counterparty-details";
import plusFilled from "@/assets/plus-filled.svg";
import plus from "@/assets/plus-white.svg";
import { internalPath } from "@/shared/routes/routes";

const TABS = ["Counterparty details", "Account details"];

const COMPANY = {
  profileType: "CORPORATION",
  counterpartyEmail: "Demo",
  counterPartyWebsite: "Demo",
  companyName: "Demo",
  lineOfBusiness: "Other",
  country: "Demo",
} as const;

export const SectionCounterparties = () => {
  const [tab, setTab] = useState<string>(TABS[0]);

  return (
    <div className={style.container}>
      {LLC.length > 0 && (
        <>
          <div className={style.navigation}>
            {LLC.map((item) => (
              <div className={style.navigation__item}>{item}</div>
            ))}
          </div>

          <div className={style.company}>
            <h2 className={style.title}>Surf Bank LLC</h2>
            <p className={style.id}>
              454-trhg-hjkg78j90h-kh7890
              <img src={copy} alt="" />
            </p>
            <Toggle
              onClick={(tab) => setTab(tab)}
              toggles={TABS}
              className={style.toggle}
            />
            {tab === TABS[0] ? (
              <CounterpartyDetails {...COMPANY} />
            ) : (
              <div className={style.info}>
                <h5 className={style.info__title}>Title</h5>
                <div className={style.info__data}>
                  <span>SWIFT</span>
                  <h6>DEMO</h6>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {!LLC.length && (
        <div className={style.addNew__container}>
          <img className={style.icon} src={plusFilled} alt="" />
          <h5 className={style.title}>Add a new counterparty</h5>
          <p className={style.description}>
            You can add an unlimited number of counterparties and make payments
            to them in Fiat and Digital Assets.
          </p>
          <Button
            href={internalPath.counterparties.counterpartyDetails}
            dark
            className={style.button}
          >
            <img src={plus} alt="" />
            Add counterparty
          </Button>
        </div>
      )}
    </div>
  );
};
