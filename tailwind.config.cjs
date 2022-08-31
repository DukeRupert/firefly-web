/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: [
				'Noto Sans',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'sans-serif'
			]
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#081040',
					50: '#1D39E3',
					100: '#1A34D1',
					200: '#162BAD',
					300: '#112289',
					400: '#0D1964',
					500: '#081040',
					600: '#02040E',
					700: '#000000',
					800: '#000000',
					900: '#000000'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
