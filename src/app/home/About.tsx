import TextCard from '@/stories/TextCard';
import React from 'react';

export default function About() {
	return (
		<section className='py-14 max-width'>
			<h3 className="font-['Carattere'] text-center text-[40px] leading-[100%] tracking-[3%]">
				Special Moments
			</h3>
			<h2 className='text-center font-medium text-6xl leading-[100%] tracking-[6%] mt-5'>
				ABOUT US
			</h2>
			<div>
				<TextCard
					variant='dark'
					heading='Taste Preparation'
					subHeading='TRADITIONAL & MODERN'
					text='Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.'
				/>
			</div>
		</section>
	);
}
