import { CurrencySelect, ArrowButton, Button } from '@/shared/ui';
import style from './section-first.module.scss';
import arrowSwap from '@/assets/arrow-swap.svg';
import { useState, useEffect } from 'react';
import { currencies, type Currency } from '../../model/currencies';
import type { ExchangeData } from '../../types';


// Курсы валют относительно USD (для примера)
const exchangeRates: Record<string, number> = {
	USD: 1,
	EUR: 0.92,
	GDR: 0.78,
	AED: 3.67,
	BTC: 0.000016,
	ETH: 0.0003,
	USDT: 1,
	USDC: 1,
};

interface Props {
	onClick: (data: ExchangeData) => void; // Передаем данные при клике
}

export const SectionFirst = ({ onClick }: Props) => {
	const [fromCurrency, setFromCurrency] = useState<Currency>(currencies[2]); // USD
	const [toCurrency, setToCurrency] = useState<Currency>(currencies[5]); // ETH
	const [fromAmount, setFromAmount] = useState('');
	const [toAmount, setToAmount] = useState('');

	// Функция для получения курса между двумя валютами
	const getRate = (from: Currency, to: Currency): number => {
		const fromRate = exchangeRates[from.code] || 1;
		const toRate = exchangeRates[to.code] || 1;

		if (from.code === to.code && from.network === to.network) {
			return 1;
		}

		return fromRate / toRate;
	};

	// Функция для конвертации суммы
	const convertAmount = (
		amount: string,
		from: Currency,
		to: Currency,
	): string => {
		if (!amount || amount === '' || amount === '.') return '';

		const numAmount = parseFloat(amount);
		if (isNaN(numAmount)) return '';

		const rate = getRate(from, to);
		const result = numAmount * rate;

		if (to.code === 'BTC' || to.code === 'ETH') {
			return result.toFixed(8);
		}
		return result.toFixed(2);
	};

	useEffect(() => {
		if (fromAmount && fromAmount !== '') {
			const converted = convertAmount(fromAmount, fromCurrency, toCurrency);
			setToAmount(converted);
		} else {
			setToAmount('');
		}
	}, [fromAmount, fromCurrency, toCurrency]);

	const handleFromAmountChange = (value: string) => {
		if (value === '' || /^\d*\.?\d*$/.test(value)) {
			setFromAmount(value);
		}
	};

	const handleSwap = () => {
		setFromCurrency(toCurrency);
		setToCurrency(fromCurrency);
		setFromAmount(toAmount);
		setToAmount(fromAmount);
	};

	const handleFromCurrencyChange = (currency: Currency) => {
		setFromCurrency(currency);
	};

	const handleToCurrencyChange = (currency: Currency) => {
		setToCurrency(currency);
	};

	const handleContinue = () => {
		// Передаем данные на следующий шаг
		onClick({
			fromCurrency,
			toCurrency,
			fromAmount,
			toAmount,
			fromAccount: 'f8g7h8j90hk7g8d9f0hjhg789', // Можно заменить на реальные данные
			toAccount: '8d9f0hjhg789',
		});
	};

	const formatBalance = (currency: Currency): string => {
		if (currency.network) {
			return `${currency.balance.toFixed(2)} ${currency.code} (${currency.network})`;
		}
		return `${currency.balance.toFixed(2)} ${currency.code}`;
	};

	return (
		<div className={style.container}>
			<div className={style.exchanges}>
				<CurrencySelect
					selectedCurrency={fromCurrency}
					currencies={currencies}
					placeholder='0.00'
					amount={fromAmount}
					onAmountChange={handleFromAmountChange}
					onCurrencyChange={handleFromCurrencyChange}
					description={{
						leftText: `Available balance: ${formatBalance(fromCurrency)}`,
						rightText: 'You send',
					}}
				/>
				<ArrowButton
					className={style.arrows}
					icon={arrowSwap}
					onClick={handleSwap}
				/>
				<CurrencySelect
					selectedCurrency={toCurrency}
					currencies={currencies}
					placeholder='0.00'
					amount={toAmount}
					onAmountChange={setToAmount}
					onCurrencyChange={handleToCurrencyChange}
					description={{
						leftText: `1 ${fromCurrency.code} = ${getRate(fromCurrency, toCurrency).toFixed(6)} ${toCurrency.code}${toCurrency.network ? ` (${toCurrency.network})` : ''}`,
						rightText: 'You will receive',
					}}
				/>
			</div>
			<Button
				onClick={handleContinue}
				dark
				className={style.button}
				arrowVisible
				disabled={!fromAmount || parseFloat(fromAmount) <= 0}
			>
				Exchange
			</Button>
		</div>
	);
};
