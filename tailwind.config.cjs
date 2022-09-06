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
			},
			transitionTimingFunction: {
				'expo-in': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'quint-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
				'quint-in': 'cubic-bezier(0.64, 0, 0.78, 0)'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
