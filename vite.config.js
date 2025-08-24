import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } }
=======

export default defineConfig({
  plugins: [react()],
  root: '.',        // project root
  build: {
    outDir: 'dist'
  }
>>>>>>> 159d466ce5f221dfadef52025dcebd2e52bda590
})
