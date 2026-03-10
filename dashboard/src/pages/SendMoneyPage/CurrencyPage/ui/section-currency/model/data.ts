import euro from '@/assets/euro-black.svg';
import dollar from '@/assets/dollar-black.svg';

export const currency = [
	{
		icon: euro,
		title: 'EUR',
		active: false,
	},
	{
		icon: dollar,
		title: 'USD',
		active: false,
	},
	{
		icon: dollar,
		title: 'GDR',
		active: false,
	},
	{
		icon: dollar,
		title: 'AED',
		active: false,
	},
] as const;
