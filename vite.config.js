import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite公式推奨の書き方！
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/hello-react-portfolio/' : '/',
  plugins: [react()],
}))