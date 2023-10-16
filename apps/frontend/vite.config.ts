import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // we add a proxy to make sure every request we throw to "/api", targets to our backend route, to make sure the requests we work in the backend can be easily sent to the frontend.
  server: {
    proxy: {
      '/api/commits': {
        target: process.env.NODE_ENV === "development" ? 'http://localhost:3000' : 'https://serene-douhua-668e2b.netlify.app/',
        changeOrigin: true,
      }
    }
  }
})
