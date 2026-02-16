import style from './section-multi-cards.module.scss';
import { Button } from '@/shared/ui';
import video_1 from '@/assets/images/section-banking/12.mp4';
import { H2, Paragraph } from '@/shared/ui';
import { usePageMainData } from '@/shared/api';

export const SectionMultiCards = () => {
	const { data } = usePageMainData();

	return (
		<section className={style.section}>
			<div className={style.section__inner}>
				<div className={style.info}>
					<H2 className={style.title}>Our products</H2>
					<Paragraph className={style.description}>
						Surf Bank provides settlement banking products that solve transfer
						payment issues requiring crypto friendly solutions.
					</Paragraph>
					<Button
						href={data?.multicards_button_link}
						className={style.button}
						arrow
					>
						Book a demo
					</Button>
				</div>
				<div className={style.video}>
					<video
						src={video_1}
						autoPlay
						loop
						muted
						playsInline
						disableRemotePlayback // Добавлено
						className={style.videoElement}
					/>
				</div>
			</div>
		</section>
	);
};
