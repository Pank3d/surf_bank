import style from './Select.module.scss';
import arrow from '@/assets/arrow.svg';
import clsx from 'clsx';

interface Props {
	className?: string;
	placeholder: string;
	label?: string;
	iconText?: string;
}

export const Select = ({ className, placeholder, label, iconText }: Props) => (
	<div className={clsx(style.select, className)}>
		<div className={style.info}>
			<span className={style.label}>{label}</span>
			<span className={style.value}>{placeholder}</span>
		</div>
		<div className={style.iconBlock}>
			<span className={style.iconText}>{iconText}</span>
			<img className={style.arrow} src={arrow} alt='' />
		</div>
	</div>
);
