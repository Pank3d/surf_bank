/* eslint-disable @typescript-eslint/no-explicit-any */
import style from './Input.module.scss';
import clsx from 'clsx';

interface Props {
	placeholder: string;
	className?: string;
	inputValue?: string;
	onChange?: (e: any) => void | undefined;
}

export const Input = ({
	placeholder,
	className,
	inputValue,
	onChange,
}: Props) => (
	<input
		className={clsx(style.input, className)}
		type='text'
		placeholder={placeholder}
		value={inputValue}
		onChange={onChange}
	/>
);
