import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginFonts from 'vite-plugin-fonts'
import EnvironmentPlugin from 'vite-plugin-environment'



// https://vitejs.dev/config/
export default defineConfig({
  base: '/nartygdansk/',
  plugins: [
    vue(),
    VitePluginFonts({
      google: {
        families: [{
          name: 'Open Sans Condensed',
          styles: 'wght@700',
          defer: true,
        },
        {
          name: 'Lora',
          styles: 'wght@400;500;600;700',
        }
      ]
      }
    }),
    EnvironmentPlugin({
      NODE_ENV: 'production',
      VITE_MODE: 'dupa',
    }),
  ]
})
