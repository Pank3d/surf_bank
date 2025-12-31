import style from './section-hero.module.scss';
import { ButtonColorize } from '@/shared/ui';
import { usePageMainData } from '@/shared/api';

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
			/>
			<div className={style.section__inner}>
				<h1 className={style.title}>
					<span className={style.title__color}>Uncover</span>
					<span className={style.title__color}>your banking</span>
					<span className={style.title__color}>freedom</span>
				</h1>
				<h1 className={style.title__tablet}>
					<span className={style.title__color}>Uncover your</span>
					<span className={style.title__color}>banking</span>
					<span className={style.title__color}>freedom</span>
				</h1>
				<h1 className={style.title__mobile}>
					<span className={style.title__color}>Uncover</span>
					<span className={style.title__color}>your</span>
					<span className={style.title__color}>banking</span>
					<span className={style.title__color}>freedom</span>
				</h1>
				<p className={style.description}>
					Private banking for hight-risk market, crypto projects and startups
				</p>
				<ButtonColorize href={data?.hero_button_link}>
					Let`s talk
				</ButtonColorize>
			</div>
		</section>
	);
};
