import ethereum from '@/assets/ethereum-fill.svg';
import bitcoin from '@/assets/bitcoin-fill.svg';
import usdt from '@/assets/usdt.svg';
import usdc from '@/assets/dollar.svg';
import usd from '@/assets/usd.svg';
import euroIcon from '@/assets/euro.svg'; // нужно добавить иконки

// Криптовалюты
export const cryptoCards = [
	{
		icon: ethereum,
		title: 'Ethereum',
		price: '$2 572.22',
		rate: '4.66',
		convertPrice: '$11 980.14',
		type: 'crypto' as const,
	},
	{
		icon: bitcoin,
		title: 'Bitcoin',
		price: '$109 125.00',
		rate: '0.11',
		convertPrice: '$12 003.75',
		type: 'crypto' as const,
	},
	{
		icon: usdt,
		title: 'USDT (TRC20)',
		price: '$1.00',
		rate: '12 000.00',
		convertPrice: '$12 000.00',
		type: 'crypto' as const,
	},
	{
		icon: usdc,
		title: 'USDC',
		price: '$1.00',
		rate: '8 000.00',
		convertPrice: '$8 000.00',
		type: 'crypto' as const,
	},
] as const;

// Фиатные валюты
export const fiatCards = [
	{
		icon: usd, // можно использовать доллар
		title: 'USD',
		price: '$1.00',
		rate: '0.00',
		convertPrice: '$10 000.00',
		type: 'fiat' as const,
	},
	{
		icon: euroIcon,
		title: 'EUR',
		price: '$1.07',
		rate: '-0.25',
		convertPrice: '€9 345.00',
		type: 'fiat' as const,
	},
] as const;

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
