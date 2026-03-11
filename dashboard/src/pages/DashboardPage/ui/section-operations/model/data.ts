import arrowDown from '@/assets/arrowDown.svg';
import arrowUp from "@/assets/arrow-up.svg";
import arrows from "@/assets/arrows.svg";

export const buttons = [
	{
		icon: arrowDown,
		text: 'Receive',
		fn: () => {},
	},
	{
		icon: arrowUp,
		text: 'Send',
		fn: () => {},
	},
	{
		icon: arrows,
		text: 'Convert',
		fn: () => {},
	},
] as const;
