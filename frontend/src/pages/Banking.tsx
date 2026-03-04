import { SectionBanking } from '@/widgets';
import { SectionBankingLetsConnect } from '@/widgets';
import bgImage from "@/assets/images/section-banking/img-3.webp";
export const Banking = () => (
	<div
		style={{
			backgroundImage: `url(${bgImage})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
		}}
	>
		<SectionBanking />
		<SectionBankingLetsConnect />
	</div>
);
