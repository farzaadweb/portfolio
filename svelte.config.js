import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			'$segments': './src/components/segments',
			'$elements': './src/components/elements',
			'$forms': './src/components/forms',
			'$assets': './src/assets',
			'$data': './src/data',
		}
	},
};

export default config;
