import style from './Toggle.module.scss';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

interface Props {
	toggles: string[];
	onClick: (tab: string) => void;
	className?: string;
	activeToggle?: string;
}

export const Toggle = ({
	toggles,
	onClick,
	className,
	activeToggle,
}: Props) => {
	const [tab, setTab] = useState<string>(toggles[0]);

	useEffect(() => {
		if (activeToggle && toggles.includes(activeToggle)) {
			setTab(activeToggle);
		}
	}, [activeToggle, toggles]);

	return (
		<div className={clsx(style.container, className)}>
			{toggles.map(toggle => (
				<button
					key={toggle}
					onClick={() => {
						setTab(toggle);
						onClick?.(toggle);
					}}
					className={clsx(style.button, tab === toggle && style.active)}
				>
					{toggle}
				</button>
			))}
		</div>
	);
};
