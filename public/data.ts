import {
	Menu,
	NavLinks,
	Reservation,
	Reviews,
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
		rate: 4,
		name: 'Persons Name',
		review:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
	},
	{
		rate: 1,
		name: 'Persons Name',
		review:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
	},
	{
		rate: 3,
		name: 'Persons Name',
		review:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
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
	// {
	// 	image: '/social-icons/linkedIn.svg',
	// 	alt: 'LinkedIn',
	// 	url: '',
	// },
];
