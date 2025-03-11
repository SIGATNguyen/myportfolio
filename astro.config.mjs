import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

export default defineConfig({
  base: '/', // Pour que les chemins soient corrects sur Vercel
  outDir: 'docs',
  integrations: [image()],
  // ... autres configurations
});
