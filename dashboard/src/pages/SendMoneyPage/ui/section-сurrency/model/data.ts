import fiat from '@/assets/fiat-black.svg';
import bitcoin from '@/assets/bitcoin-black.svg';

export const currencyTypes = [
	{
		icon: fiat,
		title: 'Fiat',
		description:
			'Perform a transaction using your fiat balances from one of your saved payment options.',
		type: 'fiat',
		active: false,
	},
	{
		icon: bitcoin,
		title: 'Crypto',
		description: 'Perform a transaction Cryptocurrency.',
		type: 'crypto',
		active: false,
	},
] as const;
