/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from 'react';
import style from './CurrencySelect.module.scss';
import { Input } from '@/shared/ui';
import arrow from '@/assets/arrow-currency.svg';
import arrowRight from '@/assets/arrow-gray.svg';
import clsx from 'clsx';

interface Currency {
	code: string;
	name: string;
	icon: string;
	balance: number;
	network?: string;
}

interface Props {
	selectedCurrency: Currency;
	currencies: Currency[];
	placeholder: string;
	description?: {
		leftText: string;
		rightText: string;
	};
	onCurrencyChange: (currency: Currency) => void;
	onAmountChange?: (amount: string) => void;
	amount?: string;
}

export const CurrencySelect = ({
	selectedCurrency,
	currencies,
	placeholder,
	description,
	onCurrencyChange,
	onAmountChange,
	amount,
}: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleSelect = (currency: Currency) => {
		onCurrencyChange(currency);
		setIsOpen(false);
	};

	return (
		<div className={style.container} ref={dropdownRef}>
			<div className={style.selector}>
				<div
					className={clsx(style.select, isOpen && style.selectOpen)}
					onClick={() => setIsOpen(!isOpen)}
				>
					<img src={selectedCurrency.icon} alt={selectedCurrency.code} />
					<span className={style.currency}>{selectedCurrency.code}</span>
					<img
						src={arrow}
						alt=''
						className={clsx(style.arrow, isOpen && style.arrowOpen)}
					/>
				</div>
				<Input
					className={style.input}
					placeholder={placeholder}
					inputValue={amount}
					onChange={(e: any) => onAmountChange?.(e.target.value)}
				/>
			</div>

			{/* Выпадающий список валют */}
			{isOpen && (
				<div className={style.dropdown}>
					{currencies.map((currency, index) => (
						<div
							key={index}
							className={clsx(
								style.currencyItem,
								currency.code === selectedCurrency.code &&
									currency.network === selectedCurrency.network &&
									style.selected,
							)}
							onClick={() => handleSelect(currency)}
						>
							<div className={style.currencyInfo}>
								<img
									src={currency.icon}
									alt={currency.code}
									className={style.currencyIcon}
								/>
								<div className={style.currencyDetails}>
									<span className={style.currencyCode}>
										{currency.code}
										{currency.network && (
											<span className={style.network}>
												{' '}
												({currency.network})
											</span>
										)}
									</span>
									{/* <span className={style.currencyName}>{currency.name}</span> */}
								</div>
							</div>
							<div className={style.currencyBalanceWrapper}>
								<span className={style.currencyBalance}>
									{currency.balance.toFixed(2)}
								</span>
								<img src={arrowRight} alt='>' />
							</div>
						</div>
					))}
				</div>
			)}

			<div className={style.description}>
				<span>{description?.leftText}</span>
				<span>{description?.rightText}</span>
			</div>
		</div>
	);
};
