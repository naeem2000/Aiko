'use client';
import { reservation } from '../../public/data';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Reservation() {
	const path = usePathname();

	return (
		<section className='py-20'>
			<div className='max-width'>
				<h2 className='text-center font-bold text-4xl xl:text-[50px] leading-[100%] tracking-[6%]'>
					MAKE A RESERVATION
				</h2>
				<div className='flex items-center justify-center gap-5 mt-14 flex-col md:flex-row'>
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
											className='mt-11'
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
