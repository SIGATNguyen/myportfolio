import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/', // Pour que les chemins soient corrects sur Vercel
  outDir: 'docs',
  // ... autres configurations
});
