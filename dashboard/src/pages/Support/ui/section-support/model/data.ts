import emailIcon from '@/assets/support1.svg';
import callIcon from '@/assets/support2.svg';
import supportIcon from '@/assets/support3.svg';
import arrowIcon from '@/assets/arrow-white.svg';
export const SUPPORT_ITEMS = [
	{
		id: 'email',
		icon: emailIcon,
		title: 'Email us',
		description:
			'Email us for general queries, including marketing and partnership opportunities.',
		label: 'Sales:',
		value: 'hello@surfbank.co',
		type: 'email',
	},
	{
		id: 'call',
		icon: callIcon,
		title: 'Call us',
		description:
			'Call us to speak to a member of our team. We are always happy to help.',
		label: 'Office:',
		value: '+1 999 999 99 99',
		type: 'call',
	},
	{
		id: 'support',
		icon: supportIcon,
		title: 'Support',
		description: 'Check out helpful resources, FAQs and sales tools.',
		buttonText: 'Support center',
		buttonIcon: arrowIcon,
		type: 'button',
	},
] as const;
