import style from './section-otc.module.scss';
import { Button } from '@/shared/ui';
import img_1 from '@/assets/images/section-otc/img-2.webp';
import { H2, Paragraph } from '@/shared/ui';
import { usePageMainData } from '@/shared/api';

export const SectionOTC = () => {
	const { data } = usePageMainData();

	return (
		<section className={style.section}>
			<div className={style.section__inner}>
				<div className={style.info}>
					<H2 className={style.title}>OTC deals</H2>
					<Paragraph className={style.description}>
						Unlike traditional exchanges our OTC deals is and there can also be
						persolized, with representatives of few parties. Discover how OTC
						markets work in Surf Bank.
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
