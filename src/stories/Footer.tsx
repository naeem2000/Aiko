'use client';
import { usePathname } from 'next/navigation';
import { socials } from '../../public/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
	const path = usePathname();

	const isHomeLogo: string =
		path === '/'
			? 'aiko-default.png'
			: path === '/aiko-plus'
			? 'aiko-logo-plus.png'
			: path === '/aiko-on-bree'
			? 'aiko-logo-bree.png'
			: path === '/aiko-riverland'
			? 'aiko-riverland.png'
			: 'aiko-default.png';

	return (
		<footer
			className={`${
				path === '/' ? 'bg-[var(--blue)]' : 'bg-black'
			} pt-12 pb-6 mt-10`}
		>
			<div className='max-width'>
				<div className='flex items-center justify-between flex-col lg:flex-row text-white gap-3 mb-14'>
					<div className='flex items-center justify-center gap-28'>
						{isHomeLogo && (
							<div>
								<Image
									src={`/logos/${isHomeLogo}`}
									width={163}
									height={43}
									alt='Aiko'
								/>
								<p className='font-normal text-sm leading-[20px] tracking-[3%] mt-5 text-center lg:text-left'>
									premium sushi made with <br /> ultra-fresh ingredients
								</p>
							</div>
						)}
						<div className='text-[14.09px] leading-[100%] tracking-[3%] text-center md:text-left hidden lg:block'>
							<p className='font-normal text-[14.09px] leading-[100%] tracking-[3%]'>
								TRADING HOURS
							</p>
							<p className='font-normal text-[14.09px] leading-[20px] tracking-[3%] mt-5'>
								MONDAY TO SUNDAY <br /> 11:30AM - 10PM <br /> Now open on
								Sundays for season!
							</p>
						</div>
					</div>
					<div className='flex flex-col w-full max-w-[367px] text-center md:text-left'>
						<label
							className='text-base leading-6 tracking-[0%] text-center lg:text-left'
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
						<div className='flex justify-center md:justify-start gap-6 mt-5'>
							{socials.map((item, index) => {
								return (
									<Link href={item.url} target='_blank' key={index}>
										<Image
											src={item.image}
											alt={item.alt}
											width={
												item.alt === 'Facebook'
													? 10
													: item.alt === 'Tiktok'
													? 18
													: 18
											}
											height={16}
											className='!text-white'
										/>
									</Link>
								);
							})}
						</div>
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
