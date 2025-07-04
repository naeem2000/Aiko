import MarqueeSlider from '@/stories/MarqueeSlider';
import Locations from './home/Locations';
import Slider from '@/stories/Slider';
import About from './home/About';
import Hero from '@/stories/Hero';

export default function Home() {
	return (
		<main>
			<Hero bg='--landing-bg' />
			<div className='hidden md:block'>
				<About />
			</div>
			<div className='block md:hidden'>
				<Slider variant='images' />
			</div>
			<Locations
				image='/images/aiko-on-bree.png'
				alt='bree'
				bg='bg-[var(--light-peach)]'
				url='/aiko-on-bree'
				text='Aiko Bree'
				location='📍14 Bree Street, Cape Town | @aikosushi.sa'
				body='Aiko Bree is where it all began — our first home on Cape Town’s vibrant Bree Street. With warm wooden interiors and an inviting atmosphere, it’s a cozy celebration of sushi culture, tradition, and urban energy.'
				buttonText='Visit Aiko On Bree'
			/>
			<Locations
				image='/images/aiko-riverland.png'
				alt='bree'
				bg='bg-white'
				url='/aiko-riverland'
				text='Aiko Riverlands'
				location='📍Riverlands Mall | @aiko_riverlands'
				body='Welcome to Aiko Riverlands, where sushi meets serenity. Enjoy a unique island-style layout with sushi gliding by on a gentle stream. Pick your favorites as they float past, all in a modern space overlooking the peaceful river. A fresh, immersive experience for sushi lovers who enjoy the unexpected.'
				buttonText='Visit Aiko Riverland'
				className='flex-row-reverse'
			/>
			<Locations
				image='/images/aiko-plus.png'
				alt='bree'
				bg='bg-[var(--light-peach)]'
				url='/aiko-plus'
				text='Aiko Plus'
				location='📍70 Bree Street, Cape Town | @aikosushi.sa'
				body='Step into Aiko Plus — our premium destination where sushi meets art. Just up the road from our original spot, it offers refined design, curated art, and beautifully crafted plates. An elevated experience for those who enjoy sushi with a touch of elegance.'
				buttonText='Visit Aiko Plus'
			/>

			<MarqueeSlider />
		</main>
	);
}
