import eurIcon from '@/assets/eurogray.svg';
import btcIcon from '@/assets/btcgray.svg';
import usdtIcon from '@/assets/usdtgray.svg';
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




// Данные для модалки
export const bankDetails = {
	Ethereum: {
		balance: '4,668.85 ETH',
		ethereumId: 'gh8jh7hj8h9k678',
		type: 'crypto' as const,
	},
	Bitcoin: {
		balance: '0.11 BTC',
		bitcoinId: 'btc-7890-xyz',
		type: 'crypto' as const,
	},
	'USDT (TRC20)': {
		balance: '12,000.00 USDT',
		walletAddress: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
		type: 'crypto' as const,
	},
	USDC: {
		balance: '8,000.00 USDC',
		walletAddress: '0xabc123def456ghi789',
		type: 'crypto' as const,
	},
	USD: {
		balance: '10,000.00 USD',
		bankName: 'J.P.Morgan',

		fiatId: 'gh8jh7hj8h9k678',
		type: 'fiat' as const,
		address: {
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
	},
	EUR: {
		balance: '9,345.00 EUR',
		bankName: 'Deutsche Bank',

		fiatId: 'gh8jh7hj8h9k678',

		type: 'fiat' as const,
		address: {
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
	},
} as const;