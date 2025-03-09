import { defineConfig } from 'astro/config';

export default defineConfig({
  // Si tu déploies sur https://SIGATNguyen.github.io/myportfolio, laisse base: '/'
  // Si tu déploies sur https://SIGATNguyen.github.io/myportfolio/<sous-dossier>/, alors mets base: '/<sous-dossier>/'
  base: '/myportfolio/',

  // Dossier de sortie pour le build
  outDir: 'docs', // <-- on génère dans docs au lieu de dist

  // ... tes autres configurations
});
