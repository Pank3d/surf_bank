import { SectionAbout, SectionMore, SectionBankAction } from '@/widgets';
import { useEffect } from 'react';

export const AboutUs = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<SectionAbout />
			<SectionMore />
			<SectionBankAction />
		</>
	);
};
