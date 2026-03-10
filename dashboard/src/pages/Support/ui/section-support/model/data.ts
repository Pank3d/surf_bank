import emailIcon from '@/assets/support1.svg';
import callIcon from '@/assets/support2.svg';
import supportIcon from '@/assets/support3.svg';
import arrowIcon from '@/assets/arrow-white.svg';
export const SUPPORT_ITEMS = [
	{
		id: 'email',
		icon: emailIcon,
		title: 'Email us',
		description: 'You can send your comments and suggestions to our E-mail.',
		// label: 'Sales:',
		value: 'support@surfbank.co',
		type: 'email',
	},
	{
		id: 'call',
		icon: callIcon,
		title: 'Call us',
		description:
			'Call us to speak to a member of our team. We are always happy to help.',
		// label: 'Office:',
		value: '+44 74 0111 6309',
		type: 'call',
	},
	{
		id: 'support',
		icon: supportIcon,
		title: 'Telegram',
		description: 'Get in touch at telegram.',
		buttonText: 'Telegram support',
		buttonIcon: arrowIcon,
		type: 'button',
	},
] as const;
