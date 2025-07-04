import Button from '@/stories/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
	image: string;
	alt: string;
	bg: string;
	className?: string;
	text: string;
	location: string;
	body: string;
	buttonText: string;
	url: string;
}

export default function Locations({
	image,
	bg,
	className,
	alt,
	text,
	location,
	body,
	buttonText,
	url,
}: Props) {
	return (
		<div id='location' className={`${bg} py-10 lg:py-20`}>
			<div className='max-width'>
				<div
					className={`${className} flex items-center flex-wrap justify-center gap-11`}
				>
					<Image
						src={image}
						alt={alt}
						width={526}
						height={472}
						className='rounded-xl'
					/>
					<div>
						<p className='font-semibold text-3xl leading-[100%] tracking-[3%] mb-8'>
							{text}
						</p>
						<p className='font-medium text-xl leading-[100%] tracking-[3%] mb-8'>
							{location}
						</p>
						<p className='font-normal text-xl leading-[33px] tracking-[3%] max-w-[595px] mb-14'>
							{body}
						</p>
						<Link href={url}>
							<Button label={buttonText} color='blue' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
