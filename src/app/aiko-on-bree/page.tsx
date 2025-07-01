import ReviewsSlider from '@/stories/ReviewsSlider';
import Experience from './components/Experience';
import Reservation from '@/stories/Reservation';
import MenuItems from './components/MenuItems';
import Gallery from './components/Gallery';
import Hero from '@/stories/Hero';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Aiko | Aiko On Bree',
	robots: 'index, follow',
};

export default function page() {
	return (
		<main>
			<Hero bg='--bree-bg' />
			<Experience />
			<MenuItems />
			<Gallery />
			<Reservation />
			<ReviewsSlider />
		</main>
	);
}
