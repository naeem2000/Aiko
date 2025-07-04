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

export const menu: Menu = [
	{
		item: 'MENU ITEM 1',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi',
		price: 'R00.00',
	},
	{
		item: 'MENU ITEM 2',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi',
		price: 'R00.00',
	},
	{
		item: 'MENU ITEM 3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi',
		price: 'R00.00',
	},
	{
		item: 'MENU ITEM 4',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi',
		price: 'R00.00',
	},
];

export const reservation: Reservation = [
	{
		url: '/aiko-plus',
		image: '/images/aiko-plus.png',
		buttonText: 'Aiko Plus',
	},
	{
		url: '/aiko-on-bree',
		image: '/images/aiko-on-bree.png',
		buttonText: 'Aiko On Bree',
	},
	{
		url: '/aiko-riverland',
		image: '/images/aiko-riverland.png',
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
];

export const imageSlider: string[] = [
	'/images/about-1.png',
	'/images/gallery/gallery-2.png',
	'/images/about-2.png',
];
