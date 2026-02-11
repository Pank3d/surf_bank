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
				title: 'Cards',
				href: internalPaths.comingSoon,
			},
			{
				title: 'Yield',
				href: internalPaths.yield,
			},
			{
				title: 'OTC deals',
				href: internalPaths.otc,
			},
		],
	},
	{
		title: 'Resources',
		links: [
			{
				title: 'Risk Summary',
				href: internalPaths.riskAppetite,
			},
			{
				title: 'Privacy Policy',
				href: internalPaths.cookiesPolicy,
			},
			{
				title: 'Terms of Service',
				href: internalPaths.termsOfService,
			},
		],
	},
	{
		title: 'Support',
		links: [
			{
				title: 'Pricing',
				href: internalPaths.findOutMore,
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

export const footerDescription =
	"All transactions carried out using the Surf Bank platform comply with the security standards and regulatory requirements established by our partner bank(licensed 1234,62673) While Surf Bank is the force behind your seamless banking experiences, we want to clarify that we are not a bank and do not possess a banking license. We're here to make your everyday spends more rewarding, while Federal Bank ensures your financial transactions are secure and well-protected at all times. ";
