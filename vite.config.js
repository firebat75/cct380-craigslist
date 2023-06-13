import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: "/cct380-craigslist/",
	plugins: [sveltekit()],
});