import Reservation from '@/stories/Reservation';
import Gallery from './home/Gallery';
import Hero from '../stories/Hero';
import About from './home/About';
import ReviewsSlider from '@/stories/ReviewsSlider';

export default function Home() {
	return (
		<main>
			<Hero bg='--landing-bg' />
			<About />
			<Gallery />
			<Reservation />
			<ReviewsSlider />
		</main>
	);
}
