import { ButtonColors } from '@/modules/types';
import Button from './Button';
import React from 'react';

type Props = {
	text: string;
	heading: string;
	subHeading: string;
	onClick?: () => void;
	variant: string;
	buttonColor: ButtonColors;
};

export default function TextCard({
	heading,
	subHeading,
	text,
	buttonColor,
	variant,
	onClick,
}: Props) {
	const colorScheme: string =
		variant === 'blue'
			? 'bg-[var(--blue)] text-white'
			: variant === 'black'
			? 'bg-black'
			: variant === 'light'
			? 'bg-[var(--off-white)]'
			: '';
	return (
		<div
			className={`${colorScheme} w-full max-w-[390px] h-full flex items-center justify-center flex-col px-9 py-16`}
		>
			<h3
				className={`${
					variant !== 'blue' ? 'text-[var(--gold)]' : 'text-white'
				} font-['Carattere'] text-3xl leading-[100%] tracking-[3%] text-center mb-12`}
			>
				{heading}
			</h3>
			<h2
				className={`${
					variant === 'light' ? 'text-black' : 'text-white'
				} text-[39.31px] leading-[49px] tracking-[3%] text-center mb-12`}
			>
				{subHeading}
			</h2>
			<p
				className={`${
					variant === 'light' ? 'text-black' : 'text-white'
				} text-xs leading-[100%] tracking-[3%] text-center max-w-[320px] mb-12 `}
			>
				{text}
			</p>
			<Button onClick={onClick} label='Learn More' color={buttonColor} />
		</div>
	);
}
