export type NavLinks = {
	link: string;
	url: string;
}[];

interface MenuItem {
	item: string;
	description: string;
	price: string;
}

export type Menu = {
	[key: string]: MenuItem[];
};

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
