'use client';
import { menuLink, navLinks } from '../../public/data';
import { Squash as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import React from 'react';
import { NavLinks } from '@/modules/types';

export default function Nav() {
	const path = usePathname();

	const isHomeMenu: NavLinks =
		path !== '/'
			? [...navLinks.slice(0, 1), menuLink, ...navLinks.slice(1)]
			: navLinks;

	const isHomeLogo: string =
		path === '/'
			? 'aiko-logo.png'
			: path === '/aiko-plus'
			? 'aiko-logo-plus.png'
			: path === '/aiko-on-bree'
			? 'aiko-logo-bree.png'
			: path === '/aiko-riverland'
			? 'aiko-riverland.png'
			: '';

	const buttonColor: string =
		path === '/'
			? 'blue'
			: path === '/aiko-plus'
			? 'gold'
			: path === '/aiko-on-bree'
			? 'red'
			: path === '/aiko-riverland'
			? 'blue'
			: '';

	return (
		<nav
			className={`${
				path !== '/' ? 'absolute text-white' : ''
			} max-width left-0 right-0 top-0 bg-none py-10 xl:py-7 z-50`}
		>
			<div className='flex justify-between items-center w-full'>
				<Link href={'/'}>
					{isHomeLogo && (
						<Image
							src={`/logos/${isHomeLogo}`}
							width={178}
							height={82}
							alt='Aiko'
						/>
					)}
				</Link>
				<ul className='hidden xl:flex gap-10'>
					{isHomeMenu &&
						isHomeMenu.map((item, index) => {
							return (
								<li
									key={index}
									className='hover:underline font-bold text-[14.09px] leading-[100%] tracking-[3%]'
								>
									<Link href={item.url}>{item.link}</Link>
								</li>
							);
						})}
				</ul>
				<Button
					label={path === '/' ? 'Find a Reservation' : 'Book Now'}
					color={buttonColor as 'blue' | 'gold' | 'red'}
					className='hidden xl:block'
				/>
				<div className='block xl:hidden'>
					<Hamburger
						color={path === '/' ? 'black' : 'white'}
						duration={0.5}
						easing='ease-in-out'
					/>
				</div>
			</div>
		</nav>
	);
}
