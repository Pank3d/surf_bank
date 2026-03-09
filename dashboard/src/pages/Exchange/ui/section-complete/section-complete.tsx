import style from './section-complete.module.scss';
import checkFilled from '@/assets/check-fill.svg';
import arrow from '@/assets/arrow.svg';
import buttonArrow from '@/assets/button-arrow.svg';
import arrowSwap from '@/assets/arrow-swap-black.svg';
import { Button, Title } from '@/shared/ui';
import { internalPath } from '@/shared/routes/routes';

import clsx from 'clsx';
import type { ExchangeData } from '../../types';

interface Props {
	data: ExchangeData;
	onClick: () => void;
}

export const SectionComplete = ({ data, onClick }: Props) => {
	const { fromCurrency, toCurrency, fromAmount, toAmount } = data;

	const formattedFromAmount = parseFloat(fromAmount).toFixed(2);
	const formattedToAmount = parseFloat(toAmount).toFixed(2);

	return (
		<div className={style.container}>
			<img className={style.icon} src={checkFilled} alt='Success' />

			<Title className={style.title}>Success!</Title>

			<div className={style.description}>
				<p className={style.descriptionText}>
					-{formattedFromAmount} {fromCurrency.code}
				</p>
				<img src={arrow} alt='' className={style.arrow} />
				<p className={style.descriptionText}>
					+{formattedToAmount} {toCurrency.code}
					{toCurrency.network && ` (${toCurrency.network})`}
				</p>
			</div>

			<div className={style.iconsOverlay}>
				<div className={style.iconWrapper}>
					<img
						src={fromCurrency.icon}
						alt={fromCurrency.code}
						className={style.currencyIcon}
					/>
				</div>
				<div className={clsx(style.iconWrapper, style.arrowWrapper)}>
					<img src={arrowSwap} alt='swap' className={style.arrowIcon} />
				</div>
				<div className={style.iconWrapper}>
					<img
						src={toCurrency.icon}
						alt={toCurrency.code}
						className={style.currencyIcon}
					/>
				</div>
			</div>

			<Button
				href={internalPath.home}
				dark
				className={style.button}
				onClick={onClick}
			>
				<span className={style.buttonText}>Status</span>
				<img src={buttonArrow} alt='trio' />
			</Button>
		</div>
	);
};
