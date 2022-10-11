import { defineConfig } from 'vite';
import DefineOptions from 'unplugin-vue-define-options/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-materials/',
  plugins: [vue(), DefineOptions()],
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
  build: {
    terserOptions: {
      compress: {
        //生产环境时移除console,debugger
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
