import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // if env is development use / by default or use my github repo name
  base: process.env.NODE_ENV === 'development' ? '/' : '/NFT-preview-card-component/',
  build: {
    outDir: 'docs'
  }
})
