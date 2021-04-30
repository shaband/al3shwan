import {
  defineConfig
} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    sourcemap: true,
  },
 
  resolve: {
    alias: {
      "@": ".",
      "@src": "./src",
      "@components": "./src/components",
      "@assets": "./src/assets",
      "@pages": "./src/pages",
    },
  },
});