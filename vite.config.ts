import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnpluginTypia from '@ryoppippi/unplugin-typia/vite';
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Inspect(),
    UnpluginTypia({
      tsconfig: "./tsconfig.app.json",
      log: "verbose",
    }),
    react()
  ],
  resolve: {
    alias: {
      "@": "./src",
      "src": "./src"
    }
  }
})
