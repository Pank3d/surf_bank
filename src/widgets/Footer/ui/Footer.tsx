import style from "./Footer.module.scss";
import { navigationData } from "../model/data";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className={style.footer}>
    <div className={style.inner}>
      <div className={style.inner__top}>
        <div className={style.info}>
          <img className={style.logo} src="/logo-white.svg" alt="" />
          <p className={style.text}>
            Surf Bunk is a financial technology company, banking for hight risk
            market, crypto projects and startups.
          </p>
          <p className={style.text}>
            Support: 9:00 - 18:00 GMT +3 | Athens (Mon-Fri)
          </p>
          <p className={style.text}>aka@surfbank.io</p>
        </div>
        <div className={style.navigation}>
          {navigationData.map(({ title, links }, index) => (
            <div className={style.navigation__list} key={index}>
              <h3 className={style.navigation__title}>{title}</h3>
              <ul className={style.navigation__list}>
                {links.map((link, index) => (
                  <li className={style.navigation__list_item} key={index}>
                    <a href={link.href}>
                      {link.title}
                      {link.soon && <span className={style.soon}>soon</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className={style.description}>
        All transactions carried out using the Surf Bank platform comply with
        the security standards and regulatory requirements established by our
        partner bank(licensed 1234,62673) While Surf Bank is the force behind
        your seamless banking experiences, we want to clarify that we are not a
        bank and do not possess a banking license. We're here to make your
        everyday spends more rewarding, while Federal Bank ensures your
        financial transactions are secure and well-protected at all times.
      </p>
      <div className={style.bottom}>
        <p className={style.bottom__description}>
          All rights reserved @ 2025 surfbank.io
        </p>
        <div className={style.bottom__links}>
          <Link className={style.link} to={"#"}>
            Terms & Conditions
          </Link>
          <span className={style.dote} />
          <Link className={style.link} to={"#"}>
            Privacy & Cookies
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
