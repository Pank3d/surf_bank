// model/currencies-data.ts
import euro from '@/assets/euro-black.svg';
import dollar from '@/assets/dollar-black.svg';
import aed from '@/assets/aed-black.svg';
import gbp from '@/assets/gbp-black.svg';
import eth from '@/assets/eth-black.svg';
import usdc from '@/assets/usdc-black.svg';
import usdt from '@/assets/usdt-black.svg';
import bitcoin from '@/assets/bitcoin-black.svg';
// model/currencies-data.ts
export interface Currency {
  icon: string;
  title: string;
  description: string;
  id: string;
  isActive: boolean; // Переименовал с active на isActive, чтобы не путать с пропсом карточки
  isAvailable?: boolean; // Добавляем флаг доступности кошелька
}

// Фиатные валюты
export const fiatCurrencies: Currency[] = [
  {
    icon: euro,
    title: 'EUR',
    description: 'Balance: 11 980.14',
    id: 'eur_001',
    isActive: false,
    isAvailable: true, // Доступен
  },
  {
    icon: dollar,
    title: 'USD',
    description: 'Balance: 11 980.14',
    id: 'usd_001',
    isActive: false,
    isAvailable: true, // Доступен
  },
  {
    icon: gbp,
    title: 'GBP',
    description: 'Balance: 11 980.14',
    id: 'gbp_001',
    isActive: false,
    isAvailable: false, // НЕ доступен
  },
  {
    icon: aed,
    title: 'AED',
    description: 'Balance: 11 980.14',
    id: 'aed_001',
    isActive: false,
    isAvailable: true, // Доступен
  },
];

// Криптовалюты
export const cryptoCurrencies: Currency[] = [
  {
    icon: bitcoin,
    title: 'BTC',
    description: 'Balance: 0.45 BTC',
    id: 'btc_001',
    isActive: false,
    isAvailable: true, // Доступен
  },
  {
    icon: eth,
    title: 'ETH',
    description: 'Balance: 5.2 ETH',
    id: 'eth_001',
    isActive: false,
    isAvailable: false, // НЕ доступен
  },
  {
    icon: usdt,
    title: 'USDT',
    description: 'Balance: 15 000 USDT',
    id: 'usdt_001',
    isActive: false,
    isAvailable: true, // Доступен
  },
  {
    icon: usdc,
    title: 'USDC',
    description: 'Balance: 15 000 USDC',
    id: 'usdc_001',
    isActive: false,
    isAvailable: false, // НЕ доступен
  },
];