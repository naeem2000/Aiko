import { socials } from '../../public/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer className='bg-[var(--blue)] pt-12 pb-6 mt-10'>
			<div className='max-width'>
				<div className='flex items-center md:items-start justify-between flex-col lg:flex-row text-white gap-3 mb-14'>
					<div>
						<Image
							src={'/logos/aiko-logo-gold.png'}
							alt='aiko'
							width={163}
							height={43}
						/>
						<div className='flex justify-center md:justify-start gap-6 mt-5'>
							{socials.map((item, index) => {
								return (
									<Link href={item.url} target='_blank' key={index}>
										<Image
											src={item.image}
											alt={item.alt}
											width={item.alt === 'Facebook' ? 10 : 18}
											height={16}
										/>
									</Link>
								);
							})}
						</div>
					</div>
					<div className='text-[14.09px] leading-[100%] tracking-[3%] text-center md:text-left hidden lg:block'>
						<p>New Location</p>
						<p className='mb-5'>Street Name</p>
						<p>On Bree</p>
						<Link
							href={'https://maps.app.goo.gl/qd2RDeLdun146dLLA'}
							target='_blank'
							className='hover:underline'
						>
							4 Bree St | Portside | Foreshore | Cape Town
						</Link>
						<p className='mt-5'>Riverland</p>
						<p>Shop G02 Riverlands Mall</p>
						<Link
							href={'https://maps.app.goo.gl/cx7b5M1SeYVBc7tT7'}
							target='_blank'
							className='hover:underline'
						>
							51 Gogosoa St | Observatory | Cape Town
						</Link>
					</div>
					<div className='flex flex-col gap-2 text-[14.09px] leading-[100%] tracking-[3%]'>
						<Link className='hover:underline' href={'#about'}>
							About
						</Link>
						<Link className='hover:underline' href={'#gallery'}>
							Gallery
						</Link>
						<Link className='hover:underline' href={'#visit-us'}>
							Visit Us
						</Link>
					</div>
					<div className='flex flex-col w-full max-w-[367px] text-center md:text-left'>
						<label
							className='text-base leading-6 tracking-[0%]'
							htmlFor='latest-menu'
						>
							See whats on our latest menu
						</label>
						<input
							className='w-full mt-5'
							placeholder='Email Address'
							type='text'
							id='latest-menu'
						/>
					</div>
				</div>
				<div className='w-full border-t border-t-[var(--border)] h-[1px]' />
				<p className='text-center mt-6 text-xs leading-5 tracking-[0%] uppercase text-white'>
					2025 © Aiko Sushi Restaurants
				</p>
			</div>
		</footer>
	);
}
