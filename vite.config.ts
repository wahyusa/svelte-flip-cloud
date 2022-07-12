import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // if env is development use / by default or use my github repo name
  base: process.env.NODE_ENV === 'development' ? '/' : '/svelte-flip-cloud/',
  build: {
    outDir: 'docs'
  }
})
