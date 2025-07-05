import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import React from 'react';

export default function MarqueeSlider() {
	const marqueeImages: string[] = [
		'gallery-7.png',
		'gallery-1.png',
		'gallery-6.png',
		'plus-gal-2.png',
	];

	const imagesCombo: string[] = [...marqueeImages, ...marqueeImages];

	return (
		<Marquee speed={50} loop={0} gradient={false}>
			{imagesCombo.map((image, index) => (
				<div key={index} className='mx-4 my-10 mb-0 lg:my-20'>
					<Image
						width={396}
						height={460}
						src={`/images/gallery/${image}`}
						alt={`Gallery Image ${index + 1}`}
					/>
				</div>
			))}
		</Marquee>
	);
}
