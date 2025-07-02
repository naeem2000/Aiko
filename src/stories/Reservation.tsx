'use client';
import { reservation } from '../../public/data';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import React from 'react';

export default function Reservation() {
	const path = usePathname();

	return (
		<section id='visit' className='py-10 md:py-20'>
			<div className='max-width'>
				<h2 className='text-center font-bold text-4xl md:text-[40px] leading-[100%] tracking-[6%]'>
					{path === '/'
						? 'MAKE A RESERVATION'
						: 'JOIN US AT A DIFFERENT BRANCH'}
				</h2>
				<div className='flex items-center justify-center gap-5 lg:gap-10 mt-14 flex-col md:flex-row'>
					{reservation
						.filter((item) => item.url !== path)
						.map((item, index) => {
							return (
								<div
									key={index}
									className='flex items-center justify-center flex-col'
								>
									<Image
										src={item.image}
										alt={item.buttonText}
										className='bg-[var(--blue)] rounded-[10px]'
										width={440}
										height={395}
									/>
									<Link href={item.url}>
										<Button
											label={item.buttonText}
											color='gold'
											className='mt-5'
										/>
									</Link>
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
}
