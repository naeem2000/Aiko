import { menu } from '../../../public/data';
import Button from '@/stories/Button';
import Image from 'next/image';
import React from 'react';

export default function MenuItems() {
	return (
		<section className='bg-black mt-40'>
			<div className='max-width flex items-start justify-center flex-wrap gap-14'>
				<Image
					src={'/images/menu-item.png'}
					width={603}
					height={618}
					alt='Menu items'
				/>
				<div className='text-white'>
					<p className="text-3xl leading-[100%] tracking-[3%] font-['Carattere']">
						the best of
					</p>
					<p className='text-3xl leading-[49px] tracking-[3%] mt-5'>
						OUR SPECIALTY
					</p>
					{menu.map((item, index) => {
						return (
							<div key={index} className='mt-9'>
								<div className='flex justify-between items-center w-full'>
									<div className='flex justify-between items-center w-full mr-7'>
										<p className='text-3xl leading-[49px] tracking-[3%]'>
											{item.item}
										</p>
										<div className='h-[1px] w-[103px] bg-white' />
									</div>
									<p className='text-xs leading-[100%] tracking-[3%]'>
										{item.price}
									</p>
								</div>
								<p className='text-xs leading-[100%] tracking-[3%] mt-3'>
									{item.description}
								</p>
							</div>
						);
					})}
					<Button className='mt-10' label='View Full Menu' color='gold' />
				</div>
			</div>
		</section>
	);
}
