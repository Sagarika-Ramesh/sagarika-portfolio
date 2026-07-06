/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				paper: '#F5F4F0',
				ink: '#0F0F0F',
				teal: '#00C8A0',
			},
			fontFamily: {
				serif: ['"DM Serif Display"', 'Georgia', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
