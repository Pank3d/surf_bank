import style from "./section-lets-connect.module.scss";
import { Section, Button, H1, Input, Textarea } from "@/shared/ui";
import clsx from "clsx";
import { usePageLetsConnectData } from "@/shared/api";

interface Props {
  className?: string;
}

export const SectionLetsConnect = ({ className }: Props) => {
  const { data } = usePageLetsConnectData();

  return (
    <div className={clsx(style.container, className)}>
      <Section className={style.section}>
        <H1 className={style.title}>Let`s Connect</H1>
        <div className={style.inputs}>
          <Input placeholder="Name*" />
          <Input placeholder="Email*" />
        </div>
        <div className={style.inputs}>
          <Input placeholder="Company name*" />
          <Input placeholder="Telegram or Whatsapp" />
        </div>
        <Textarea className={style.textarea} placeholder="Message*" />
        {data?.description.map((str, index) => (
          <p className={style.description} key={index}>
            {str}
          </p>
        ))}
        <Button className={style.button} arrow>
          Submit
        </Button>
      </Section>
    </div>
  );
};
