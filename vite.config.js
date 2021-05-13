import {
  defineConfig
} from 'vite'
const path = require("path");

import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    sourcemap: true,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/"),
      "@src": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
    },
  },
});