import style from './StepsButtons.module.scss';
import { ArrowButton } from '@/shared/ui';
import { Button } from '@/shared/ui';
import arrow from '@/assets/arrow.svg';

interface Props {
	back: string;
	to?: string;
	disabled?: boolean;
	onContinue?: () => void;
}

export const StepsButtons = ({ back, to, disabled, onContinue }: Props) => (
	<div className={style.buttons}>
		<ArrowButton icon={arrow} href={back} className={style.arrow__button} />
		<Button
			href={to}
			onClick={onContinue}
			className={style.button}
			dark
			disabled={disabled}
		>
			Continue
		</Button>
	</div>
);
