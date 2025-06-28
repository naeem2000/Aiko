import Hero from '@/stories/Hero';
import { Metadata } from 'next';
import React from 'react';
import Experience from './components/Experience';

export const metadata: Metadata = {
	title: 'Aiko | Aiko Plus',
	robots: 'index, follow',
};

export default function page() {
	return (
		<main>
			<Hero bg='--plus-bg' />
			<Experience />
		</main>
	);
}
