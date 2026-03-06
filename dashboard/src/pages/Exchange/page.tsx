import { useState } from "react";
import { SectionExchange, SectionComplete } from "./ui";
import { Section } from "@/shared/ui";

export const ExchangePage = () => {
  const [isComplete, setIscomplete] = useState(false);

  return (
		<Section title='Converted' subtitle='ID: f8g7h8j90hk7g8d9f0hjhg789'>
			{isComplete ? (
				<SectionComplete onClick={() => setIscomplete(false)} />
			) : (
				<SectionExchange onClick={() => setIscomplete(true)} />
			)}
		</Section>
	);
};
