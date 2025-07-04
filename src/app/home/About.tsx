import Image from 'next/image';
import React from 'react';

export default function About() {
	return (
		<section className='py-14 max-width'>
			<div className='flex items-center justify-center'>
				<p className='text-center font-[275] text-3xl leading-[100%] tracking-[3%] max-w-[890px]'>
					Treat yourself to premium sushi made with ultra-fresh fish and
					top-tier ingredients, prepared to perfection.
				</p>
			</div>
			<div className='flex justify-center items-center gap-12 flex-wrap mt-14'>
				<Image
					src={'/images/about-1.png'}
					alt='Sushi platter'
					width={381}
					height={478}
					className='object-contain'
				/>
				<Image
					src={'/images/gallery/gallery-2.png'}
					alt='Sushi platter'
					width={415}
					height={478}
					className='object-contain'
				/>
				<Image
					src={'/images/about-2.png'}
					alt='Sushi platter'
					width={395}
					height={478}
				/>
			</div>
			<div className='flex items-center justify-center flex-col mt-20'>
				<h2 className='font-light text-[50px] leading-[100%] tracking-[3%] text-center'>
					Sushi, Perfected - Only at Aiko
				</h2>
				<p className='font-[275] text-3xl leading-[100%] tracking-[3%] text-center max-w-[891px] mt-5'>
					Find your nearest Aiko Sushi and book your table for an unforgettable,
					ultra-fresh sushi experience.
				</p>
			</div>
		</section>
	);
}
