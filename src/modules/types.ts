export type NavLinks = {
	link: string;
	url: string;
}[];

export type Menu = {
	item: string;
	description: string;
	price: string;
}[];

export type Reservation = {
	url: string;
	image: string;
	buttonText: string;
}[];

export type Reviews = {
	rate: number;
	name: string;
	review: string;
}[];

export type SocialIcons = {
	url: string;
	alt: string;
	image: string;
}[];

export type ButtonColors = 'red' | 'blue' | 'gold';
