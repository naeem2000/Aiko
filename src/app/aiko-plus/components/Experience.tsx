import TextCard from '@/stories/TextCard';
import Image from 'next/image';
import React from 'react';

export default function Experience() {
	return (
		<section className='py-14 max-width'>
			<h2 className='text-center font-[275] text-3xl leading-[100%] tracking-[3%]'>
				Experience Premium Sushi
			</h2>
			<div className='flex justify-center items-center gap-12 flex-wrap mt-14'>
				<Image
					src={'/images/experience-1.png'}
					alt='Sushi platter'
					width={381}
					height={478}
					className='object-contain'
				/>
				<TextCard
					variant='dark'
					heading='Taste Preparation'
					subHeading='TRADITIONAL & MODERN'
					text='Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.'
				/>
				<div>
					<Image
						src={'/images/experience-2.png'}
						alt='Sushi platter'
						width={394}
						height={478}
					/>
				</div>
			</div>
		</section>
	);
}
