import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
//     server: {
//     proxy: {
//     '/main/': {
//       target: 'http://localhost:7777',
//     }
//   }
// }
})