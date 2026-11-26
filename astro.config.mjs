// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jostero32.github.io',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  // Las capturas se leen de los repositorios al construir y Astro las optimiza (WebP, varios tamaños).
  image: { domains: ['raw.githubusercontent.com', 'images.credly.com'] },
  vite: { plugins: [tailwindcss()] },
});
