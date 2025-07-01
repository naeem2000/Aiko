import ReviewsSlider from '@/stories/ReviewsSlider';
import Experience from './components/Experience';
import Reservation from '@/stories/Reservation';
import Gallery from './components/Gallery';
import MenuItems from '../home/MenuItems';
import Hero from '@/stories/Hero';
import { Metadata } from 'next';
import React from 'react';

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
