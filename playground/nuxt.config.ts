export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  app: {
    buildAssetsDir: '/Nuxt-Leaflet/',
  },
})
