import {
	Menu,
	Reviews,
	NavLinks,
	Reservation,
	SocialIcons,
} from '@/modules/types';

export const navLinks: NavLinks = [
	{
		link: 'About',
		url: '#about',
	},
	{
		link: 'Gallery',
		url: '#gallery',
	},
	{
		link: 'Visit Us',
		url: '#visit',
	},
];

export const menuLink: { link: string; url: string } = {
	link: 'Menu',
	url: '#menu',
};

export const menu: Menu = {
	bree: [
		{
			item: 'Pretty Women',
			description: 'Prawn Tempura, Avo, Caviar, Seaweed, Mayo',
			price: 'From R139.00',
		},
		{
			item: 'Grand Salmon Roses (4pcs)',
			description: 'Salmon, Sesame Oil, Spring Onion, 7 Spice, Bread Crumbs',
			price: 'From R145.00',
		},
		{
			item: 'Bloom of Roses',
			description:
				'Seared salmon roses with: tuna, prawn and salmon topping, mayo, spring onion and 7 spice',
			price: 'From R179.00',
		},
		{
			item: 'Sashimi Rolls (6pcs)',
			description: 'Salmon, seared tuna, avo, mayo, caviar, teriyaki sauce',
			price: 'From R189.00',
		},
		{
			item: 'Toranj (8pcs)',
			description:
				'Salmon, cream cheese, avo, beetroot, prawn and spices topping',
			price: 'From R159.00',
		},
	],
	plus: [
		{
			item: 'Sushi Taco – Swordfish Fusion',
			description:
				'Crispy taco shell filled with swordfish, kissed with unagi sauce, balsamic pearls, truffle mayo, and a fresh chive ribbon.',
			price: 'R95.00',
		},
		{
			item: 'Prawn tempura Bao Bun',
			description:
				'Melt-in-your-mouth pork belly glazed to perfection, served in a soft bao bun.',
			price: 'R95.00',
		},
		{
			item: 'Crispy Chicken Bao Bun',
			description:
				'Crispy, juicy chicken nestled in a fluffy bao with our signature Asian slaw.',
			price: 'R85.00',
		},
		{
			item: 'Glazed beef Bad Bun',
			description:
				'Unagi glazed beef topped with spring onion, roasted sesame seed and Japanese mayo',
			price: 'R105.00',
		},
	],
};

export const reservation: Reservation = [
	{
		url: '/aiko-plus',
		image: '/images/plus-link.png',
		buttonText: 'Aiko Plus',
	},
	{
		url: '/aiko-on-bree',
		image: '/images/bree-link.png',
		buttonText: 'Aiko On Bree',
	},
	{
		url: '/aiko-riverland',
		image: '/images/riverland-link.png',
		buttonText: 'Aiko Sushi Riverland',
	},
];

export const reviews: Reviews = [
	{
		rate: 5,
		name: 'Susan C',
		review:
			'We LOVED this restaurant - its food, its staff, its ambience - so much that on our very first day in Capetown we had lunch and dinner there. We have eaten all round the world and AIKO is pretty much up there with the best.',
	},
	{
		rate: 4,
		name: 'LeighanneZA',
		review:
			'My favourite sushi spot in Cape Town. They never fail to impress. I think they have one of the best menus with an incredible selection. Always fresh and delicious. I would recommend booking as there are limited amount of tables.',
	},
	{
		rate: 5,
		name: 'Erika',
		review:
			'The service was great, the food was wonderful and the mood was just right I recommend aiko sushi to all even for just a lunch.',
	},
	{
		rate: 5,
		name: 'Hannah',
		review:
			'This place is amazing and they will make you feel loved and happy. The food was amazing. I recommend you to go there you will never regret it.',
	},
	{
		rate: 4,
		name: 'Frank A',
		review:
			'I ate the most delicious sushi ever here. Shian had explained the "All you can eat" in detail. Cost point about 12,50€ per person - depending on the exchange rate. The Fried sushi are so big that I had trouble getting them in my mouth and 8 of them. Every taste was recognizable and very well seasoned. The Nigiri have twice the fish on them than in Germany.',
	},
];

export const socials: SocialIcons = [
	{
		image: '/social-icons/instagram.svg',
		alt: 'Instagram',
		url: 'https://www.instagram.com/aikosushi.sa/',
	},
	{
		image: '/social-icons/facebook.svg',
		alt: 'Facebook',
		url: 'https://www.facebook.com/aikosushi.sa',
	},
	{
		image: '/social-icons/tiktok.svg',
		alt: 'TikTok',
		url: 'https://www.tiktok.com/discover/aiko-sushi-cape-town',
	},
];

export const imageSlider: string[] = [
	'/images/about-1.png',
	'/images/gallery/gallery-2.png',
	'/images/about-2.png',
];
