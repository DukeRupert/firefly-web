import { dev } from '$app/env';

export const logo = {
	title: 'Firefly Software Engineering',
	src: '/logo-blue.svg',
	alt: 'Firefly Software Engineering logo'
};

export const POSTMARK_API_KEY = dev
	? import.meta.env.VITE_POSTMARK_API_KEY
	: process.env.POSTMARK_API_KEY;
