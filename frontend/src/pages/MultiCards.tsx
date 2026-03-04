import {
	SectionMultiCardsPage,
	SectionMultiCardsLetsConnectPage,
} from '@/widgets/Sections';
import bgImage from '@/assets/images/section-multi-cards/background.webp';
export const MultiCards = () => (
	<div
		style={{
			backgroundImage: `url(${bgImage})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
		}}
	>
		<SectionMultiCardsPage />
		<SectionMultiCardsLetsConnectPage />
	</div>
);
