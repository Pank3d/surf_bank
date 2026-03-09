import { Button } from '@/shared/ui';
import style from './section-exchange.module.scss';
import plusGreen from '@/assets/plus-green.svg';
import arrowSwap from '@/assets/arrow-swap-black.svg';
import minus from '@/assets/minus.svg';
import clsx from 'clsx';
import type { ExchangeData } from '../../types';


interface Props {
	data: ExchangeData; // Данные с предыдущего шага
	onClick: () => void;
}

export const SectionExchange = ({ data, onClick }: Props) => {
	const {
		fromCurrency,
		toCurrency,
		fromAmount,
		toAmount,
		fromAccount,
		toAccount,
	} = data;

	// Форматируем числа для отображения
	const formattedFromAmount = parseFloat(fromAmount).toFixed(2);
	const formattedToAmount = parseFloat(toAmount).toFixed(2);

	// Получаем короткие версии аккаунтов для отображения
	const shortFromAccount = fromAccount?.slice(0, 12) + '...' || 'f8g7h8j90hk7';
	const shortToAccount = toAccount?.slice(0, 10) + '...' || '8d9f0hjhg789';

	return (
		<div className={style.container}>
			<div className={style.exchangeCard}>
				<div className={style.mainExchange}>
					{/* Левый блок - From Currency */}
					<div className={style.currencyBlock}>
						<div className={style.currencyHeader}>
							<div className={style.currencyIcon}>
								<img src={fromCurrency.icon} alt={fromCurrency.code} />
							</div>
							<span className={style.currencyLabel}>{fromCurrency.code}</span>
						</div>
						<div className={style.currencyId}>
							{fromAccount || 'f8g7h8j90hk7g8d9f0hjhg789'}
						</div>
						<button
							className={clsx(
								style.currencyAmount,
								style.amountNegative,
								style.mobileButton,
							)}
						>
							<img src={minus} alt='-' /> -{formattedFromAmount}{' '}
							{fromCurrency.code}
						</button>
					</div>

					{/* Стрелка по центру */}
					<div className={style.arrowWrapper}>
						<img src={arrowSwap} alt='swap' className={style.arrowIcon} />
					</div>

					{/* Правый блок - To Currency */}
					<div className={style.currencyBlock}>
						<div className={style.currencyHeader}>
							<div className={style.currencyIcon}>
								<img src={toCurrency.icon} alt={toCurrency.code} />
							</div>
							<span className={style.currencyLabel}>{toCurrency.code}</span>
						</div>
						<div className={style.currencyId}>
							{toAccount || '8d9f0hjhg789'}
						</div>
					</div>
				</div>

				<button
					className={clsx(
						style.currencyAmount,
						style.amountPositive,
						style.mobileButton,
					)}
				>
					<img src={plusGreen} alt='+' />+{formattedToAmount} {toCurrency.code}
					{toCurrency.network && ` (${toCurrency.network})`}
				</button>

				<div className={style.buttons}>
					<button className={clsx(style.currencyAmount, style.amountNegative)}>
						<img src={minus} alt='-' /> -{formattedFromAmount}{' '}
						{fromCurrency.code}
					</button>

					<button className={clsx(style.currencyAmount, style.amountPositive)}>
						<img src={plusGreen} alt='+' />+{formattedToAmount}{' '}
						{toCurrency.code}
						{toCurrency.network && ` (${toCurrency.network})`}
					</button>
				</div>

				{/* Детали транзакции */}
				<div className={style.detailsSection}>
					<div className={style.detailsHeader}>
						<span>Details</span>
					</div>

					<div className={style.detailsGrid}>
						<div className={style.detailRow}>
							<span className={style.detailLabel}>Total fees:</span>
							<span className={style.detailValue}>0 USD</span>
						</div>
						<div className={style.detailRow}>
							<span className={style.detailLabel}>
								Total amount including fees:
							</span>
							<span className={style.detailValue}>
								{formattedFromAmount} {fromCurrency.code}
							</span>
						</div>
						<div className={style.detailRow}>
							<span className={style.detailLabel}>Recipient amount:</span>
							<span className={style.detailValue}>
								{formattedToAmount} {toCurrency.code}
								{toCurrency.network && ` ${toCurrency.network}`}
							</span>
						</div>
						<div className={style.detailRow}>
							<span className={style.detailLabel}>Account from:</span>
							<span className={style.detailValue}>{shortFromAccount}</span>
						</div>
						<div className={style.detailRow}>
							<span className={style.detailLabel}>Account to:</span>
							<span className={style.detailValue}>{shortToAccount}</span>
						</div>
					</div>
				</div>

				{/* Кнопка обмена */}
				<Button onClick={onClick} dark className={style.button}>
					Exchange
				</Button>
			</div>
		</div>
	);
};
