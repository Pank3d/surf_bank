import style from './section-multi-cards.module.scss';
import { ButtonColorize } from '@/shared/ui';
import img_1 from '@/assets/images/section-multi-cards/img-2.webp';
import { H2, Paragraph } from '@/shared/ui';
import { usePageMainData } from '@/shared/api';

export const SectionMultiCards = () => {
	const { data } = usePageMainData();

	return (
		<section className={style.section}>
			<div className={style.section__inner}>
				<div className={style.info}>
					<H2 className={style.title}>Multi Cards</H2>
					<Paragraph className={style.description}>
						Start using Surf Cards, which are attached to your account and can
						be easily topped-up with crypto.
					</Paragraph>
					<ButtonColorize
						href={data?.multicards_button_link}
						className={style.button}
					>
						Get the card
					</ButtonColorize>
				</div>
				<div className={style.img}>
					<img src={img_1} alt='' />
				</div>
			</div>
		</section>
	);
};
