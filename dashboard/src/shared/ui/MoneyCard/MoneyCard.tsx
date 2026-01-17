import style from './MoneyCard.module.scss';
import clsx from 'clsx';

interface Props {
	icon: string;
	title: string;
	price: string;
	rate: string;
	convertPrice: string;
	className?: string;
	onClick?: () => void;
}

export const MoneyCard = ({
	icon,
	title,
	price,
	rate,
	convertPrice,
	className,
	onClick,
}: Props) => (
	<div className={clsx(style.card, className)} onClick={onClick}>
		<div className={style.info}>
			<img className={style.icon} src={icon} alt='' />
			<div className={style.text}>
				<h5 className={style.title}>{title}</h5>
				<span className={style.price}>{price}</span>
			</div>
		</div>
		<div className={style.convert}>
			<h6 className={style.rate}>{rate}</h6>
			<span className={style.price}>{convertPrice}</span>
		</div>
	</div>
);
