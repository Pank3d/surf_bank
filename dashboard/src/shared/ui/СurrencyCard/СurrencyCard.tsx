// СurrencyCard.tsx
import style from './СurrencyCard.module.scss';
import check from '@/assets/check-green.svg';
import clsx from 'clsx';

interface Props {
	icon: string;
	title: string;
	description?: string;
	active: boolean;
	id?: string;
	onClick?: () => void;
	className?: string;
	isAvailable?: boolean; // Добавляем пропс для доступности
}

export const СurrencyCard = ({
	icon,
	title,
	description,
	active,
	id,
	onClick,
	className,
	isAvailable = true, // По умолчанию доступен
}: Props) => (
	<div
		className={clsx(
			style.card,
			active && style.active,
			!isAvailable && style.unavailable, // Добавляем класс для недоступных карточек
			className,
		)}
		onClick={isAvailable ? onClick : undefined} // Блокируем клик для недоступных
	>
		<img className={style.icon} src={icon} alt='' />
		{id ? (
			<div className={style.account}>
				<h6 className={style.title}>{title}</h6>
				<span className={style.id}>ID: {id}</span>
			</div>
		) : (
			<h6 className={style.title}>{title}</h6>
		)}

		{description && <p className={style.description}>{description}</p>}
		{active && isAvailable && (
			<img src={check} className={style.check} alt='' />
		)}
	</div>
);
