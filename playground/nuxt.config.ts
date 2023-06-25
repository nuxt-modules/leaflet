export default defineNuxtConfig({
  modules: ['../src/module'],
  myModule: {},
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        // Leaflet's JS
        {
          src: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
          integrity: 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=',
          crossorigin: ''
        }
      ]
    }
  } 
})
