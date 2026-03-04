import { SectionAbout, SectionMore, SectionBankAction } from '@/widgets';
import { useEffect } from 'react';
import bgImage from '@/assets/images/section-about/background.webp';
export const AboutUs = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
	<div
		style={{
			backgroundImage: `url(${bgImage})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
		}}
	>
			<SectionAbout />
			<SectionMore />
			<SectionBankAction />
		</div>
	);
};
