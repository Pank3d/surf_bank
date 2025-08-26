import style from "./section-lets-connect.module.scss";
import { Section, Button, H1, Input, Textarea } from "@/shared/ui";
import clsx from "clsx";

interface Props {
  className?: string;
}

export const SectionLetsConnect = ({ className }: Props) => (
  <div className={clsx(style.container, className)}>
    <Section className={style.section}>
      <H1 className={style.title}>Let`s Connect</H1>
      <div className={style.inputs}>
        <Input placeholder="asdasdsadasd" />
        <Input placeholder="asdasdsadasd" />
      </div>
      <div className={style.inputs}>
        <Input placeholder="asdasdsadasd" />
        <Input placeholder="asdasdsadasd" />
      </div>
      <Textarea className={style.textarea} placeholder="asdasdsadasd" />
      <p className={style.description}>
        Surf Bank - collects and processes your personal data (names. email
        address and other data, depending on the information entered). provided
        through this form to manage your request.
      </p>
      <p className={style.description}>
        by clicking on the button, I agree that my data should be processed for
        the purposes of
      </p>
      <Button className={style.button} arrow>
        Submit
      </Button>
    </Section>
  </div>
);
