export default defineNuxtConfig({
  modules: ['../src/module', '@nuxt/ui'],

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  app: {
    baseURL: '/'
  },

  leaflet: {
    markerCluster: true
  },

  compatibilityDate: '2024-07-26'
})