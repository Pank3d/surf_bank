import { Button } from '@/shared/ui';
import style from './section-exchange.module.scss';
import usd from '@/assets/usd.svg';
import arrowSwap from '@/assets/arrow-swap-black.svg';
import usdt from '@/assets/usdt.svg';
import plusGreen from '@/assets/plus-green.svg';
import minus from '@/assets/minus.svg';
import clsx from 'clsx';

interface Props {
	onClick: () => void;
}

export const SectionExchange = ({ onClick }: Props) => (
	<div className={style.container}>
		<div className={style.exchangeCard}>
			<div className={style.mainExchange}>
				{/* Левый блок - USD */}
				<div className={style.currencyBlock}>
					<div className={style.currencyHeader}>
						<div className={style.currencyIcon}>
							<img src={usd} alt='USD' />
						</div>
						<span className={style.currencyLabel}>USD</span>
					</div>
					<div className={style.currencyId}>f8g7h8j90hk7g8d9f0hjhg789</div>
					<button
						className={clsx(
							style.currencyAmount,
							style.amountNegative,
							style.mobileButton,
						)}
					>
						<img src={minus} alt='-' /> -500 USD
					</button>
				</div>

				{/* Стрелка по центру */}
				<div className={style.arrowWrapper}>
					<img src={arrowSwap} alt='swap' className={style.arrowIcon} />
				</div>

				{/* Правый блок - USDT */}
				<div className={style.currencyBlock}>
					<div className={style.currencyHeader}>
						<div className={style.currencyIcon}>
							<img src={usdt} alt='USDT' />
						</div>
						<span className={style.currencyLabel}>USDT</span>
					</div>
					<div className={style.currencyId}>f8g7h8j90hk7g8d9f0hjhg789</div>
				</div>
			</div>

			<button
				className={clsx(
					style.currencyAmount,
					style.amountPositive,
					style.mobileButton,
				)}
			>
				<img src={plusGreen} alt='+' />
				+497.80 USDT
			</button>

			<div className={style.buttons}>
				<button className={clsx(style.currencyAmount, style.amountNegative)}>
					<img src={minus} alt='-' /> -500 USD
				</button>

				<button className={clsx(style.currencyAmount, style.amountPositive)}>
					<img src={plusGreen} alt='+' />
					+497.80 USDT
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
						<span className={style.detailValue}>500 USD</span>
					</div>
					<div className={style.detailRow}>
						<span className={style.detailLabel}>Recipient amount:</span>
						<span className={style.detailValue}>497.80 USDT TRC20</span>
					</div>
					<div className={style.detailRow}>
						<span className={style.detailLabel}>Account from:</span>
						<span className={style.detailValue}>f8g7h8j90hk7</span>
					</div>
					<div className={style.detailRow}>
						<span className={style.detailLabel}>Account to:</span>
						<span className={style.detailValue}>8d9f0hjhg789</span>
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
