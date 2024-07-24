import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/CALCULATOR-1/",
  resolve:{
    alias:{
      '@':Path.resolve(__dirname,'./src'),
    },
  },
})
