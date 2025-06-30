import Image from 'next/image';
import React from 'react';

type Props = {
	rating: number;
};

export default function Ratings({ rating }: Props) {
	return (
		<div className='flex gap-0.5'>
			{Array.from({ length: rating }, (_, index) => (
				<Image
					key={index as number}
					src={'/images/star-rating.png'}
					width={12}
					height={12}
					alt='rate'
				/>
			))}
		</div>
	);
}
