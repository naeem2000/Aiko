import Image from 'next/image';
import React from 'react';

export default function Gallery() {
	return (
		<section className='bg-black py-20'>
			<div className='max-width flex flex-col gap-7 justify-center items-center'>
				<div className='flex gap-7 flex-wrap justify-center items-center'>
					<Image
						src={'/images/gallery/gallery-1.png'}
						alt='gallery'
						width={396}
						height={460}
					/>
					<Image
						src={'/images/gallery/gallery-2.png'}
						alt='gallery'
						width={396}
						height={460}
					/>
					<Image
						src={'/images/gallery/gallery-3.png'}
						alt='gallery'
						width={396}
						height={460}
					/>
				</div>
				<div className='flex gap-7 flex-wrap justify-center items-center'>
					<Image
						src={'/images/gallery/gallery-4.png'}
						alt='gallery'
						width={820}
						height={460}
					/>
					<Image
						src={'/images/gallery/gallery-5.png'}
						alt='gallery'
						width={396}
						height={460}
					/>
				</div>
				<div className='flex gap-7 flex-wrap justify-center items-center'>
					<Image
						src={'/images/gallery/gallery-6.png'}
						alt='gallery'
						width={396}
						height={460}
					/>
					<Image
						src={'/images/gallery/gallery-7.png'}
						alt='gallery'
						width={396}
						height={460}
					/>
					<Image
						src={'/images/gallery/gallery-8.png'}
						alt='gallery'
						width={396}
						height={460}
					/>
				</div>
			</div>
		</section>
	);
}
