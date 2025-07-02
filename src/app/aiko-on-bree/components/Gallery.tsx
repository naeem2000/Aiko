import Image from 'next/image';
import React from 'react';

export default function Gallery() {
	return (
		<section id='gallery' className='bg-black py-20'>
			<div className='max-w-7xl mx-auto flex flex-col gap-7 justify-center items-center px-4'>
				<div className='flex gap-7 flex-wrap justify-center items-center'>
					{['bree-gal-1', 'bree-gal-2', 'bree-gal-3'].map((img, index) => (
						<Image
							key={index}
							src={`/images/gallery/${img}.png`}
							alt='gallery'
							width={396}
							height={200}
							className='object-contain'
						/>
					))}
				</div>
				<div className='flex gap-7 flex-wrap justify-center items-center'>
					<Image
						src='/images/gallery/bree-gal-4.png'
						alt='gallery'
						width={820}
						height={200}
						className='object-contain'
					/>

					<Image
						src='/images/gallery/bree-gal-5.png'
						alt='gallery'
						width={396}
						height={200}
						className='object-contain'
					/>
				</div>
			</div>
		</section>
	);
}
