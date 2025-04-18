import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/hello-react-portfolio/', // ← ここを追加！
  plugins: [react()],
})
