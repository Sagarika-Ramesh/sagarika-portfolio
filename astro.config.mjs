import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://sagarikaramesh.com',
	output: 'static',
	adapter: vercel(),
	integrations: [tailwind(), sitemap()],
});