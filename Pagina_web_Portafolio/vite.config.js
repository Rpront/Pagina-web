import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //esta linea especifica que se esta usando React
  plugins: [react()],
})
