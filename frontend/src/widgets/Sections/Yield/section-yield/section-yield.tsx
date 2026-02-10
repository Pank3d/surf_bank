import style from './section-yield.module.scss';
import { Button } from '@/shared/ui';
import img_1 from '@/assets/images/section-yield/img-2.webp';
import { H2, Paragraph } from '@/shared/ui';
import { usePageMainData } from '@/shared/api';

export const SectionYield = () => {
	const { data } = usePageMainData();

	return (
		<section className={style.section}>
			<div className={style.section__inner}>
				<div className={style.info}>
					<H2 className={style.title}>Yield product</H2>
					<Paragraph className={style.description}>
						A High Yield Savings Account is a type of savings account that earns
						a significantly higher interest rate than a traditional savings
						account. Yield product and is not subject to volatility.
					</Paragraph>
					<Button
						href={data?.multicards_button_link}
						className={style.button}
						arrow
					>
						Book a demo
					</Button>
				</div>
				<div className={style.img}>
					<img src={img_1} alt='' />
				</div>
			</div>
		</section>
	);
};
