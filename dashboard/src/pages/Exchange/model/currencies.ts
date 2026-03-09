import btc from '@/assets/small/btc.svg';
import eth from '@/assets/small/eth.svg';
import usd from '@/assets/small/usd.svg';
import eur from '@/assets/small/eur.svg';
import gdr from '@/assets/small/gdr.svg';
import aed from '@/assets/small/aed.svg';
import usdt from '@/assets/small/usdt.svg';
import usdc from '@/assets/small/usdc.svg';

export type Currency = {
	code: string;
	name: string;
	icon: string;
	balance: number;
	network?: string;
};

export const currencies: Currency[] = [
	{ code: 'EUR', name: 'Euro', icon: eur, balance: 2523.0 },
	{ code: 'GDR', name: 'British Pound', icon: gdr, balance: 123.0 },
	{ code: 'USD', name: 'US Dollar', icon: usd, balance: 323.0 },
	{ code: 'AED', name: 'Dirham', icon: aed, balance: 0.0 },
	{ code: 'BTC', name: 'Bitcoin', icon: btc, balance: 0.0 },
	{ code: 'ETH', name: 'Ethereum', icon: eth, balance: 1223.0 },
	{ code: 'USDT', name: 'Tether', icon: usdt, balance: 0.0, network: 'TRC-20' },
	{ code: 'USDT', name: 'Tether', icon: usdt, balance: 523.0, network: 'ETH' },
	{ code: 'USDC', name: 'USD Coin', icon: usdc, balance: 1523.0 },
];
