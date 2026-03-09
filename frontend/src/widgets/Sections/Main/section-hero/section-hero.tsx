import style from './section-hero.module.scss';
import { ButtonColorize } from '@/shared/ui';
import { usePageMainData } from '@/shared/api';
import title from '@/assets/images/section-hero/title.png';
import titleTablet from '@/assets/images/section-hero/tableTitle.png';
import titleMobile from '@/assets/images/section-hero/mobileTitle.png';

export const SectionHero = () => {
	const { data } = usePageMainData();

	return (
		<section className={style.section}>
			<video
				className={style.video}
				src='/video/video-1.mp4'
				autoPlay
				loop
				muted
				playsInline
				preload='auto'
				poster='/video/poster.jpg'
			/>
			<div className={style.section__inner}>
				<img src={title} alt='' className={style.desktopTitle} />
				<img src={titleTablet} alt='' className={style.tabletTitle} />
				<img src={titleMobile} alt='' className={style.mobileTitle} />
				<p className={style.description}>
					Corporate banking for high-risk market, crypto projects and startups.
				</p>
				<ButtonColorize href={data?.hero_button_link}>
					Let`s talk
				</ButtonColorize>
			</div>
		</section>
	);
};
