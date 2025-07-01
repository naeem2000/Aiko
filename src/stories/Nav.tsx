'use client';
import { menuLink, navLinks } from '../../public/data';
import { Squash as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
import { NavLinks } from '@/modules/types';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
	const path = usePathname();

	const isHomeMenu: NavLinks =
		path !== '/'
			? [...navLinks.slice(0, 1), menuLink, ...navLinks.slice(1)]
			: navLinks;

	const isHomeLogo: string =
		path === '/'
			? 'aiko-default.png'
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
				path === '/' ? 'bg-[var(--blue)] ' : 'absolute left-0 right-0 top-0'
			} py-10 xl:py-7 z-50 text-white`}
		>
			<div className='max-width'>
				<div
					className={`flex justify-between items-center w-full ${
						path === '/' ? 'flex-col' : 'flex-row'
					}`}
				>
					<Link href={'/'}>
						{isHomeLogo && (
							<Image
								src={`/logos/${isHomeLogo}`}
								width={path !== '/' ? 178 : 350}
								height={82}
								alt='Aiko'
							/>
						)}
					</Link>
					<div className={`${path !== '/' ? 'hidden' : ''} xl:flex gap-10`}>
						<ul className='flex gap-5'>
							{isHomeMenu && path !== '/' ? (
								isHomeMenu.map((item, index) => {
									return (
										<li
											key={index}
											className='hover:underline font-bold text-[14.09px] leading-[100%] tracking-[3%]'
										>
											<Link href={item.url}>{item.link}</Link>
										</li>
									);
								})
							) : (
								<li className='mt-5'>
									<Link href={'/'} className='border-b-2 border-b-[var(--red)]'>
										Home
									</Link>
								</li>
							)}
						</ul>
					</div>
					{path !== '/' && (
						<Button
							label={path === '/' ? 'Find a Reservation' : 'Book Now'}
							color={buttonColor as 'blue' | 'gold' | 'red'}
							className='hidden xl:block'
						/>
					)}
					{path !== '/' && (
						<div className='block xl:hidden'>
							<Hamburger color={'white'} duration={0.5} easing='ease-in-out' />
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
