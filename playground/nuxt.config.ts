export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  app: {
    baseURL: '/Nuxt-Leaflet/'
  },
  nuxtLeaflet: {
    markercluster: true
  }
})