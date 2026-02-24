import eurIcon from '@/assets/euro.svg';
import btcIcon from '@/assets/bitcoin-black.svg';
import usdtIcon from '@/assets/usdt.svg';
import gbpIcon from '@/assets/gpb.svg';

export const accounts = [
	{
		currency: 'EUR',
		name: 'EUR Account',
		accountNumber: 'RTKJETBHY0G688',
		balance: '245.50',
		icon: eurIcon,
	},
	{
		currency: 'BTC',
		name: 'BTC Account',
		accountNumber: 'RTKJETBHY0G688',
		balance: '0.0235',
		icon: btcIcon,
	},
	{
		currency: 'USDT',
		name: 'USDT Account',
		accountNumber: 'RTKJETBHY0G688',
		balance: '1250.00',
		icon: usdtIcon,
	},
	{
		currency: 'GBP',
		name: 'GBR Account',
		accountNumber: 'RTKJETBHY0G688',
		balance: '580.75',
		icon: gbpIcon,
	},
] as const;

export const DATA = {
	address: {
		bankName: 'OpenPayd',
		city: 'New York',
		zipCode: 'EC1V078',
		country: 'USA',
		addressLine: '123 Main Street, Apt 4B, New York, NY 10001, USA',
		stateRegion: 'New York',
	},
	recipient: {
		recipientName: 'Surf Bank LLC',
		accountId: '79970DLOFKLV',
		sendingMethod: 'SEPA',
		swiftCode: 'SEO596B214',
		recipientId: '454-trhg-hjkg78j90h-kh7890',
		currency: 'EUR',
		iban: '454-trhg-hjkg78j90h-kh7890',
	},
	totalBalance: {
		amount: '980,000',
		currency: 'USD',
	},
} as const;
