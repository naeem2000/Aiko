'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
	bg: string;
}

export default function Hero({ bg }: Props) {
	const path = usePathname();
	return (
		<section
			className={`relative bg-center bg-cover bg-no-repeat h-screen`}
			style={{ backgroundImage: `var(${bg})` }}
		>
			<div className='absolute right-0 left-0 bottom-0 top-0 bg-[rgb(0,0,0,0.7)] z-10' />
			{path === '/' && (
				<div className='flex items-center justify-center flex-col h-full w-full z-20 relative'>
					<h2 className='font-[275] text-3xl leading-[100%] tracking-[3%] text-white'>
						Experience Premium
					</h2>
					<h1 className="max-w-[629px] font-['Carattere'] text-[92.18px] leading-[100%] tracking-[6%] text-center mt-8 text-white">
						Where Every Bite Tells A Story
					</h1>
				</div>
			)}
		</section>
	);
}
