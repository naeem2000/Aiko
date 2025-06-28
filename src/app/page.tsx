import About from './home/About';
import Gallery from './home/Gallery';
import Hero from './home/Hero';
import MenuItems from './home/MenuItems';

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Gallery />
		</main>
	);
}
