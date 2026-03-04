import type { ReactNode } from "react";
import clsx from "clsx";
import style from "./Section.module.scss";

interface Props {
	children: ReactNode;
	className?: string;
	title: string;
	titleAlign?: 'center' | 'left' | 'right';
}

export const Section = ({
	children,
	className,
	title,
	titleAlign = 'center',
}: Props) => (
	<section className={clsx(style.section, className)}>
		<h1
			className={clsx(
				style.title,
				style[`title_align_${titleAlign}`],
			)}
		>
			{title}
		</h1>
		{children}
	</section>
);
