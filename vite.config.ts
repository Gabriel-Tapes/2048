import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/plano-de-treino/',
  plugins: [tsconfigPaths(), react()],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
})
