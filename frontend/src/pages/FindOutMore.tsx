import { SectionFindOutMore } from '@/widgets';
import { useEffect } from 'react';

export const FindOutMore = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<SectionFindOutMore />
		</>
	);
};
