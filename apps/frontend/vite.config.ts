import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // we add a proxy to make sure every request we throw to "/api", targets to our backend route, to make sure the requests we work in the backend can be easily sent to the frontend.
  server: {
    proxy: {
      'api/commits': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})
