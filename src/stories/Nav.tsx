'use client';
import { menuLink, navLinks } from '../../public/data';
import { Squash as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
import { NavLinks } from '@/modules/types';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

export default function Nav() {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	const path = usePathname();

	const isHomeLink = [
		{
			link: 'Find a location',
			url: '#location',
		},
	];

	const isHomeMenu: NavLinks =
		path !== '/'
			? [...navLinks.slice(0, 1), menuLink, ...navLinks.slice(1)]
			: isHomeLink;

	const isHomeLogo: string =
		path === '/'
			? 'aiko-riverland.png'
			: path === '/aiko-plus'
			? 'aiko-logo-plus.png'
			: path === '/aiko-on-bree'
			? 'aiko-logo-bree.png'
			: path === '/aiko-riverland'
			? 'aiko-riverland.png'
			: '';

	const isHome: string =
		path === '/'
			? 'bg-white text-black'
			: path === '/aiko-plus'
			? 'bg-[var(--black)]'
			: path === '/aiko-on-bree'
			? 'bg-[var(--blue)]'
			: path === '/aiko-riverland'
			? 'bg-[var(--red)]'
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
				path === '/' ? 'bg-white ' : 'absolute left-0 right-0 top-0'
			} py-5 xl:py-8 z-50 text-white`}
		>
			<div className='max-width'>
				<div
					className={`flex justify-between items-center lg:items-center w-full relative `}
				>
					<Link href={'/'}>
						{isHomeLogo && (
							<Image
								src={`/logos/${isHomeLogo}`}
								width={path !== '/' ? 178 : 124}
								height={31}
								alt='Aiko'
							/>
						)}
					</Link>
					<div
						className={`${
							path !== '/' ? ' text-white' : 'text-black'
						} xl:flex gap-10 hidden lg:block`}
					>
						<ul className='flex gap-5'>
							{isHomeMenu.map((item, index) => {
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
					</div>
					{path === '/' ? (
						<Link
							href='https://www.dineplan.com/restaurants/aiko-sushi'
							target='_blank'
						>
							<Button
								label='Find a Reservation'
								color={buttonColor as 'blue' | 'gold' | 'red'}
								className='hidden lg:block'
							/>
						</Link>
					) : (
						<Link
							href='https://www.dineplan.com/restaurants/aiko-sushi'
							target='_blank'
						>
							<Button
								label='Book Now'
								color={buttonColor as 'blue' | 'gold' | 'red'}
								className='hidden lg:block'
							/>
						</Link>
					)}

					<div className='block lg:hidden z-50 fixed right-5'>
						<Hamburger
							color={'var(--gold)'}
							duration={0.5}
							size={30}
							easing='ease-in-out'
							toggle={() => setIsNavOpen(!isNavOpen)}
							toggled={isNavOpen}
						/>
					</div>
				</div>
			</div>

			<div
				className={`fixed left-0 p-7 top-0 bottom-0 w-[300px] transition-all duration-300 z-50 ${isHome} block lg:hidden ${
					isNavOpen ? 'translate-x-0' : '-translate-x-[100%]'
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
				<ul className='flex flex-col gap-5 mt-14'>
					{isHomeMenu.map((item, index) => {
						return (
							<li
								key={index}
								onClick={() => setIsNavOpen(false)}
								className='hover:underline font-bold text-[14.09px] leading-[100%] tracking-[3%]'
							>
								<Link href={item.url}>{item.link}</Link>
							</li>
						);
					})}
				</ul>
				<Link
					href='https://www.dineplan.com/restaurants/aiko-sushi'
					target='_blank'
				>
					<Button
						label={path === '/' ? 'Find a Reservation' : 'Book Now'}
						color={buttonColor as 'blue' | 'gold' | 'red'}
						className='mt-13'
					/>
				</Link>
			</div>
		</nav>
	);
}
