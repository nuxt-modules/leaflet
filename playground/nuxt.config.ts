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
  routeRules: {
    '/map/markercluster': {
      ssr: false
    }
  },
  leaflet: {
    markerCluster: true
  }
})