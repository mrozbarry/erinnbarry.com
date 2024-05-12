import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import yaml from '@modyfi/vite-plugin-yaml';
import markdown, { Mode } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    yaml(),
    // markdown({
    //   mode: Mode.HTML
    // }),
    react(),
  ],
  assetsInclude: ['**/*.md'],
})
