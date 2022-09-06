//$lib/components/types

export interface SimpleHero {
	title: {
		text: string;
		focus: string;
	};
	text: string;
	primaryAction: {
		label: string;
		href: string;
	};
	secondaryAction: {
		label: string;
		href: string;
	};
	image: {
		src: string;
		alt: string;
	};
}
