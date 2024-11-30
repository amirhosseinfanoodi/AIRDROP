import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
   
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'My React PWA',
        short_name: 'ReactPWA',
        description: 'My awesome React PWA application',
        theme_color: '#ffffff',
        icons: [
          {
            src: './public/02.jpg',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './public/logo.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
