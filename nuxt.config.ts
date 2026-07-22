import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-08-15',

  modules: ['@nuxt/content', '@nuxt/image'],
  srcDir: 'src/',
  ssr: false,

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Carina Karner',
      meta: [
        { name: 'description', content: 'Computational Physicist — Statistical Mechanics, Particle Simulation, Machine Learning' },
        { property: 'og:title', content: 'Carina Karner' },
        { property: 'og:description', content: 'Computational Physicist — Statistical Mechanics, Particle Simulation, Machine Learning' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
        },
      ],
    },
  },

  content: {
    sources: {
      content: {
        driver: 'fs',
        prefix: '',
        base: resolve(__dirname, 'src/content'),
      },
    },
  },

  image: {
    quality: 80,
  },
})
