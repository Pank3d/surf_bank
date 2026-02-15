import style from './section-banking.module.scss';
import { H2, Paragraph, Button } from '@/shared/ui';
import video_1 from '@/assets/images/section-banking/12.mp4';

export const SectionBanking = () => (
	<section className={style.section}>
		<div className={style.section__inner}>
			<div className={style.info}>
				<H2 className={style.title}>Banking</H2>
				<Paragraph className={style.description}>
					Open multi-currency fiat accounts with built-in digital asset custody,
					proprietary on-ramp/off-ramp solution and b2b corporate payments
					ecosystem.
				</Paragraph>
				<Button className={style.button} arrow>
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
					className={style.videoElement}
				/>
			</div>
		</div>
	</section>
);
