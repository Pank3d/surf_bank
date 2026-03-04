import { SectionOTCLetsConnect, SectionOTC } from '@/widgets/Sections';
import bgImage from '@/assets/images/section-banking/img-3.webp';
export const OTC = () => (
	<div
		style={{
			backgroundImage: `url(${bgImage})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
		}}
	>
		<SectionOTC />
		<SectionOTCLetsConnect />
	</div>
);
