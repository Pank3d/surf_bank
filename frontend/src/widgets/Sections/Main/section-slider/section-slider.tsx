import React from 'react';
import styles from './section-slider.module.scss';

interface SectionSliderProps {
	logos: string[]; 
	altTexts?: string[]; 
	speed?: number; 
}

export const SectionSlider: React.FC<SectionSliderProps> = ({
	logos,
	altTexts = [],
	speed = 20,
}) => {

	const doubledLogos = [...logos, ...logos, ...logos];

	return (
		<div className={styles.sliderContainer}>
			<div
				className={styles.sliderTrack}
				style={{ '--speed': `${speed}s` } as React.CSSProperties}
			>
				{doubledLogos.map((logo, index) => (
					<div key={index} className={styles.logoItem}>
						<img
							src={logo}
							alt={
								altTexts[index % logos.length] ||
								`Logo ${(index % logos.length) + 1}`
							}
							className={styles.logoImage}
							loading='lazy'
						/>
					</div>
				))}
			</div>
		</div>
	);
};

