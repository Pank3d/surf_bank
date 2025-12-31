import { internalPaths } from '@/shared/routes/paths';

export const navigationData = [
	{
		title: 'Product',
		links: [
			{
				title: 'Banking',
				href: internalPaths.banking,
			},
			{
				title: 'Card issuing',
				href: '#',
			},
			{
				title: 'Yield',
				href: internalPaths.comingSoon,
			},
			{
				title: 'OTC trading',
				href: internalPaths.comingSoon,
			},
		],
	},
	{
		title: 'Resources',
		links: [
			{
				title: 'Documentation',
				href: '#',
			},
			{
				title: 'Knowledge  base',
				href: '#',
			},
			{
				title: 'Risk Appetite',
				href: '#',
			},
		],
	},
	{
		title: 'Support',
		links: [
			{
				title: 'Pricing',
				href: '#',
			},
			{
				title: 'About us',
				href: internalPaths.aboutUs,
			},
			{
				title: 'Contact us',
				href: internalPaths.letsConnect,
			},
			{
				title: 'FAQs',
				href: internalPaths.faq,
			},
		],
	},
];
