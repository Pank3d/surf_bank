import type { ReactNode } from 'react';
import style from './Button.module.scss';
import clsx from 'clsx';
import arrow from '@/assets/arrow-white.svg';
import { Link } from 'react-router-dom';

interface Props {
	children: ReactNode;
	className?: string;
	dark?: boolean;
	white?: boolean;
	onClick?: () => void;
	href?: string;
	arrowVisible?: boolean;
	disabled?: boolean;
}

export const Button = ({
	children,
	className,
	dark,
	white,
	onClick,
	href,
	arrowVisible,
	disabled,
}: Props) => {
	if (href) {
		return (
			<Link to={href}>
				<button
					className={clsx(
						style.button,
						className,
						dark && style.dark,
						white && style.white,
					)}
				>
					{children}
					{arrowVisible && <img src={arrow} alt='' />}
				</button>
			</Link>
		);
	}
	return (
		<button
			onClick={onClick}
			className={clsx(
				style.button,
				className,
				dark && style.dark,
				white && style.white,
			)}
			disabled={disabled}
		>
			{children}
			{arrowVisible && <img src={arrow} alt='' />}
		</button>
	);
};
