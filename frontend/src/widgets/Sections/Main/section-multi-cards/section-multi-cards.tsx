import style from './section-multi-cards.module.scss';
import { Button } from '@/shared/ui';
import video_1 from '@/assets/images/section-banking/12.mp4';
import { H2, Paragraph } from '@/shared/ui';
import { usePageMainData } from '@/shared/api';
import { SectionSlider } from '../section-slider/section-slider';

import logo1 from '@/assets/images/section-slider/1.svg';
import logo2 from '@/assets/images/section-slider/2.svg';
import logo3 from '@/assets/images/section-slider/3.svg';
import logo4 from '@/assets/images/section-slider/4.svg';
import logo5 from '@/assets/images/section-slider/5.svg';
import logo6 from '@/assets/images/section-slider/6.svg';
import logo7 from '@/assets/images/section-slider/7.svg';
import logo8 from '@/assets/images/section-slider/8.svg';
import logo9 from '@/assets/images/section-slider/9.svg';

export const SectionMultiCards = () => {
	const { data } = usePageMainData();

	const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

	const altTexts = [
		'Binance',
		'Coinbase',
		'Kraken',
		'FTX',
		'Huobi',
		'KuCoin',
		'Bybit',
		'OKX',
	];

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
						disableRemotePlayback
						className={style.videoElement}
					/>
				</div>
			</div>
			<SectionSlider logos={logos} altTexts={altTexts} speed={25} />
		</section>
	);
};
