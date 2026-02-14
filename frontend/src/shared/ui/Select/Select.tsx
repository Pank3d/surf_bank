import style from './Select.module.scss';
import arrow from './assets/arrow.svg';
import clsx from 'clsx';

interface Props {
	className?: string;
	placeholder: string;
	label?: string;
	onClick?: () => void;
	hasValue?: boolean; // Добавляем проп для определения, выбрано ли значение
}

export const Select = ({
	className,
	placeholder,
	label,
	onClick,
	hasValue,
}: Props) => (
	<div
		className={clsx(style.select, className, { [style.hasValue]: hasValue })}
		onClick={onClick}
		role='button'
		tabIndex={0}
		onKeyDown={e => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				onClick?.();
			}
		}}
	>
		<div className={style.info}>
			{label && <span className={style.label}>{label}</span>}
			<span className={clsx(style.value, { [style.placeholder]: !hasValue })}>
				{placeholder}
			</span>
		</div>
		<img className={style.arrow} src={arrow} alt='' />
	</div>
);
