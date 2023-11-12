import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import tsconfigPaths from 'vite-tsconfig-paths';
import {resolve} from "path";

export default defineConfig({
  plugins: [vue(), legacy(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  }
})
