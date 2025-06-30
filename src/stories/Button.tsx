import { ButtonColors } from '@/modules/types';
import React from 'react';

type Props = {
	label: string;
	className?: string;
	color: ButtonColors;
	onClick?: () => void;
};

export default function Button({ color, label, className, onClick }: Props) {
	const buttonColor: string =
		color === 'gold'
			? 'bg-[var(--gold)]'
			: color === 'red'
			? 'bg-[var(--red)]'
			: 'bg-[var(--blue)]';

	const baseButtonStyles: string =
		'cursor-pointer min-w-[140px] px-[10px] py-4 rounded-[5px] font-semibold text-[14.09px] leading-[100%] tracking-[3%] text-white hover:opacity-[0.7] transition duration-200 ease';

	return (
		<button
			onClick={onClick}
			className={`${buttonColor} ${baseButtonStyles} ${className}`}
		>
			{label}
		</button>
	);
}
