import Hero from '@/stories/Hero';
import { Metadata } from 'next';
import React from 'react';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import MenuItems from '../home/MenuItems';
import Reservation from '@/stories/Reservation';
import ReviewsSlider from '@/stories/ReviewsSlider';

export const metadata: Metadata = {
	title: 'Aiko | Aiko Plus',
	robots: 'index, follow',
};

export default function page() {
	return (
		<main>
			<Hero bg='--plus-bg' />
			<Experience />
			<Gallery />
			<MenuItems />
			<Reservation />
			<ReviewsSlider />
		</main>
	);
}
