import style from "./section-lets-connect.module.scss";
import { Section, H1, LetsConnectForm } from "@/shared/ui";
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
        <LetsConnectForm description={data?.description} />
      </Section>
    </div>
  );
};
