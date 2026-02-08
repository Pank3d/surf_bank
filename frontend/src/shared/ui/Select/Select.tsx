import style from './Select.module.scss';
import arrow from './assets/arrow.svg';
import clsx from 'clsx';

interface Props {
	className?: string;
	placeholder: string;
	label?: string;
	onClick?: () => void;
}

export const Select = ({ className, placeholder, label, onClick }: Props) => (
	<div
		className={clsx(style.select, className)}
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
			<span className={style.label}>{label}</span>
			<span className={style.value}>{placeholder}</span>
		</div>
		<img className={style.arrow} src={arrow} alt='' />
	</div>
);
