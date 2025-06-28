import React from 'react';
import Button from './Button';

type Props = {
	heading: string;
	subHeading: string;
	text: string;
	variant: 'light' | 'dark';
	onClick?: () => void;
};

export default function TextCard({
	heading,
	subHeading,
	text,
	variant,
	onClick,
}: Props) {
	const colorScheme = variant === 'dark' ? 'bg-black' : 'bg-[var(--off-white)]';
	return (
		<div
			className={`${colorScheme} w-[390px] h-full flex items-center justify-center flex-col px-9 py-16`}
		>
			<h3 className="text-[var(--gold)] font-['Carattere'] text-3xl leading-[100%] tracking-[3%] text-center mb-12">
				{heading}
			</h3>
			<h2
				className={`text-[39.31px] leading-[49px] tracking-[3%] text-center mb-12 ${
					variant === 'dark' ? 'text-white' : 'text-black'
				}`}
			>
				{subHeading}
			</h2>
			<p
				className={`text-xs leading-[100%] tracking-[3%] text-center max-w-[320px] mb-12 ${
					variant === 'dark' ? 'text-white' : 'text-black'
				}`}
			>
				{text}
			</p>
			<Button onClick={onClick} label='Learn More' color='gold' />
		</div>
	);
}
