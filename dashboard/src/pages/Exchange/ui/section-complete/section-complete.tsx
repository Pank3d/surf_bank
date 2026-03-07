import style from './section-complete.module.scss';
import checkFilled from '@/assets/check-fill.svg';
import trio from '@/assets/exchane-trio.svg';
import arrow from '@/assets/arrow.svg';
import buttonArrow from '@/assets/button-arrow.svg';
import { Button, Title } from '@/shared/ui';
import { internalPath } from '@/shared/routes/routes';

interface Props {
	onClick: () => void;
}

export const SectionComplete = ({ onClick }: Props) => (
	<div className={style.container}>
		<img className={style.icon} src={checkFilled} alt='' />
		<Title className={style.title}>Success!</Title>
		<div className={style.description}>
			<p className={style.descriptionText}>-500 USD</p>
			<img src={arrow} alt='' className={style.arrow} />
			<p className={style.descriptionText}>497.80 USDT</p>
		</div>
		<img src={trio} alt='trio' />
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
