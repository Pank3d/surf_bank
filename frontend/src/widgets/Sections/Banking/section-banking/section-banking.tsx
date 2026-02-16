import style from './section-banking.module.scss';
import { H2, Paragraph, Button } from '@/shared/ui';
import video_1 from '@/assets/images/section-banking/12.mp4';
import { useRef, useEffect } from 'react';

export const SectionBanking = () => {
	const videoRef = useRef<HTMLVideoElement>(null); // Явно указываем тип

	useEffect(() => {
		// Дополнительная гарантия воспроизведения на мобильных устройствах
		if (videoRef.current) {
			videoRef.current.play().catch((error: Error) => {
				console.log('Autoplay prevented:', error);
			});
		}
	}, []);

	return (
		<section className={style.section}>
			<div className={style.section__inner}>
				<div className={style.info}>
					<H2 className={style.title}>Banking</H2>
					<Paragraph className={style.description}>
						Open multi-currency fiat accounts with built-in digital asset
						custody, proprietary on-ramp/off-ramp solution and b2b corporate
						payments ecosystem.
					</Paragraph>
					<Button className={style.button} arrow>
						Book a demo
					</Button>
				</div>
				<div className={style.video}>
					<video
						ref={videoRef}
						src={video_1}
						autoPlay
						loop
						muted
						playsInline
						disableRemotePlayback
						className={style.videoElement}
					/>
				</div>
			</div>
		</section>
	);
};
