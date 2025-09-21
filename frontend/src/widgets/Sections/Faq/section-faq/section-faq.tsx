import { Section, Faq } from "@/shared/ui";
import style from "./section-faq.module.scss";
import { faqsData } from "./model/data";

export const SectionFaq = () => (
  <div className={style.container}>
    <Section className={style.section}>
      <div className={style.faqTextContainer}>
        <p className={style.faqText}>Frequently asked questions</p>
      </div>
      <div className={style.faqs}>
        {faqsData.map(({ question, answer }, index) => (
          <Faq key={index} question={question} answer={answer} />
        ))}
      </div>
    </Section>
  </div>
);
