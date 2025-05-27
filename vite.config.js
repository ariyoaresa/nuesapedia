import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: [{ resize: 800 }], // no '?' here
      force: true,
    }),
  ],
})
