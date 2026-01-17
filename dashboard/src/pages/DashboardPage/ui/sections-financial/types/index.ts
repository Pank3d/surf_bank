export type CurrencyType = 'crypto' | 'fiat';

export type CryptoCardData = {
	icon: string;
	title: 'Ethereum' | 'Bitcoin' | 'USDT (TRC20)' | 'USDC';
	price: string;
	rate: string;
	convertPrice: string;
	type: 'crypto';
};

export type FiatCardData = {
	icon: string;
	title: 'USD' | 'EUR';
	price: string;
	rate: string;
	convertPrice: string;
	type: 'fiat';
};

export type CardData = CryptoCardData | FiatCardData;

export type CryptoModalData = {
	icon: string;
	title: 'Ethereum' | 'Bitcoin' | 'USDT (TRC20)' | 'USDC';
	price: string;
	rate: string;
	convertPrice: string;
	balance: string;
	ethereumId?: string;
	bitcoinId?: string;
	walletAddress?: string;
	type: 'crypto';
};

export type FiatModalData = {
	icon: string;
	title: 'USD' | 'EUR';
	price: string;
	rate: string;
	convertPrice: string;
	balance: string;
	bankName: string;
	accountNumber: string;
	swiftCode?: string;
	type: 'fiat';
};

export type ModalDataUnion = CryptoModalData | FiatModalData;
