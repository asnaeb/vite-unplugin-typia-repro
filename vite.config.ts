import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnpluginTypia from '@ryoppippi/unplugin-typia/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnpluginTypia(),
    react()
  ],
})
