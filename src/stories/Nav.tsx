'use client';
import { menuLink, navLinks } from '../../public/data';
import { Squash as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
	const path = usePathname();

	const isHomeMenu =
		path !== '/'
			? [...navLinks.slice(0, 1), menuLink, ...navLinks.slice(1)]
			: navLinks;

	return (
		<nav className='absolute max-width left-0 right-0 top-0 bg-none pt-10 xl:pt-14 z-50'>
			<div className='flex justify-between items-center w-full'>
				<Link href={'/'}>
					<Image
						src={'/logos/aiko-logo-gold.png'}
						width={204}
						height={54}
						alt='Aiko'
					/>
				</Link>
				<ul className='hidden xl:flex gap-10'>
					{isHomeMenu &&
						isHomeMenu.map((item, index) => {
							return (
								<li
									key={index}
									className='hover:underline font-medium text-[14.09px] leading-[100%] tracking-[3%] text-white'
								>
									<Link href={item.url}>{item.link}</Link>
								</li>
							);
						})}
				</ul>
				<Button
					label='Find a Reservation'
					color='gold'
					className='hidden xl:block'
				/>
				<div className='block xl:hidden'>
					<Hamburger color='white' duration={0.5} easing='ease-in-out' />
				</div>
			</div>
		</nav>
	);
}
