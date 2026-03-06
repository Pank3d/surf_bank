import type { ReactNode } from 'react';
import clsx from 'clsx';
import style from './Section.module.scss';

interface Props {
	children: ReactNode;
	className?: string;
	title: string;
	subtitle?: string;
	titleAlign?: 'center' | 'left' | 'right';
}

export const Section = ({
	children,
	className,
	title,
	subtitle,
	titleAlign = 'center',
}: Props) => (
	<section className={clsx(style.section, className)}>
		<div className={style.titleContainer}>
			<h1 className={clsx(style.title, style[`title_align_${titleAlign}`])}>
				{title}
			</h1>
			{subtitle && (
				<p
					className={clsx(
						style.subtitle,
						style[`subtitle_align_${titleAlign}`],
					)}
				>
					{subtitle}
				</p>
			)}
		</div>
		{children}
	</section>
);
