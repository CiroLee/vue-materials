import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-materials/',
  plugins: [vue(), unocss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [require('autoprefixer')],
    },
    preprocessorOptions: {
      scss: {
        addtionalData: `@import "@/styles/global.variable.scss"`,
      },
    },
  },
});
