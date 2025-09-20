import { useState } from "react";
import { SectionExchange, SectionComplete } from "./ui";
import { Section } from "@/shared/ui";

export const ExchangePage = () => {
  const [isComplete, setIscomplete] = useState(false);

  return (
    <Section title="Exchange">
      {isComplete ? (
        <SectionComplete onClick={() => setIscomplete(false)} />
      ) : (
        <SectionExchange onClick={() => setIscomplete(true)} />
      )}
    </Section>
  );
};
