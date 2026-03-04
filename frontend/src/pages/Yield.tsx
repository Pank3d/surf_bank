import { SectionYield, SectionYieldLetsConnect } from '@/widgets/Sections';
import bgImage from "@/assets/images/section-banking/img-3.webp";
export const Yield = () => (
	<div
		style={{
			backgroundImage: `url(${bgImage})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
		}}
	>
		<SectionYield />
		<SectionYieldLetsConnect />
	</div>
);
