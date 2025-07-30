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
			<div className='absolute right-0 left-0 bottom-0 top-0 bg-[rgb(0,0,0,0.5)] z-10' />
			{path === '/' && (
				<div className='flex items-center justify-center flex-col h-full w-full z-20 relative gap-3'>
					<h2 className='font-[275] text-2xl xl:text-3xl leading-[100%] tracking-[3%] text-white'>
						Refined sushi. Elevated taste
					</h2>
					<h1 className="max-w-[629px] font-['Carattere'] text-6xl xl:text-[92.18px] leading-[100%] tracking-[6%] text-center mt-8 text-white">
						The Aiko Experience
					</h1>
					<h3 className='font-bolder text-2xl xl:text-2xl leading-[100%] tracking-[3%] text-white'>
						Expertly crafted at all 3 of our signature locations
					</h3>
					<p className='font-[275] text-2xl xl:text-xl leading-[100%] tracking-[3%] text-white'>
						<strong>Aiko on bree: </strong>Aiko orginal sushi.
					</p>
					<p className='font-[275] text-2xl xl:text-xl leading-[100%] tracking-[3%] text-white'>
						<strong>Aiko Riverlands:</strong> Aikos ramen and signatures crafted
						to excellence.
					</p>
					<p className='font-[275] text-2xl xl:text-xl leading-[100%] tracking-[3%] text-white'>
						<strong>Aiko Plus, 70 Bree Street:</strong> Sushi meets art on a
						plate.
					</p>
				</div>
			)}
		</section>
	);
}
