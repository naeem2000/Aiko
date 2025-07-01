import ReviewsSlider from '@/stories/ReviewsSlider';
import Experience from './components/Experience';
import Reservation from '@/stories/Reservation';
import MenuItems from './components/MenuItems';
import Gallery from './components/Gallery';
import Hero from '@/stories/Hero';
import React from 'react';

export default function page() {
	return (
		<main>
			<Hero bg='--riverland-bg' />
			<Experience />
			<MenuItems />
			<Gallery />
			<Reservation />
			<ReviewsSlider />
		</main>
	);
}
