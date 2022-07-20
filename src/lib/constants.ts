import { dev } from '$app/env';

export const logo = {
	title: 'Firefly Software Engineering',
	src: '/logo-blue.svg',
	alt: 'Firefly Software Engineering logo'
};

export const contact = {
	phone: {
		href: 'tel:14068719875',
		pretty: '406-871-9875'
	},
	email: 'logan@firefly.llc'
};

export const sitemap = [
	{ title: 'Contact Us', href: '/contact-us' },
	{ title: 'About', href: '/about-us' }
];

export const POSTMARK_API_KEY = dev
	? import.meta.env.VITE_POSTMARK_API_KEY
	: process.env.POSTMARK_API_KEY;
