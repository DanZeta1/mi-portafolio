import { defineConfig } from 'vite'
import purgecss from 'vite-plugin-purgecss'

export default defineConfig({
  base: '/mi-portafolio/',
  build: {
    cssMinify: true,
  },
  plugins: [
    purgecss({
      content: ['./index.html', './src/**/*.js'],
    }),
  ],
})