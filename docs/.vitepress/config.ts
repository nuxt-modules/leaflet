import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nuxt Leaflet",
  description: "Documentation for the Nuxt Leaflet module",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Start', link: '/getting-started/installation' },
      { text: 'Components', link: '/components/introduction' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Usage', link: '/getting-started/usage' }
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Using L', link: '/guide/using-l' },
          { text: 'Accessing a map instance', link: '/guide/accessing-map-instance' }
          // { text: 'Leaflet.markercluster', link: '/guide/marker-cluster' }
        ]
      },
      {
        text: 'Components',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/components/introduction' },
          { text: 'LCircle', link: '/components/l-circle' },
          { text: 'LCircleMarker', link: '/components/l-circle-marker' },
          { text: 'LControlAttribution', link: '/components/l-control-attribution' },
          { text: 'LControlLayers', link: '/components/l-control-layers' },
          { text: 'LControlScale', link: '/components/l-control-scale' },
          { text: 'LControlZoom', link: '/components/l-control-zoom' },
          { text: 'LControl', link: '/components/l-control' },
          { text: 'LFeatureGroup', link: '/components/l-feature-group' },
          { text: 'LGeoJson', link: '/components/l-geo-json' },
          { text: 'LGridLayer', link: '/components/l-grid-layer' },
          { text: 'LIcon', link: '/components/l-icon' },
          { text: 'LImageOverlay', link: '/components/l-image-overlay' },
          { text: 'LLayerGroup', link: '/components/l-layer-group' },
          { text: 'LMap', link: '/components/l-map' },
          { text: 'LMarker', link: '/components/l-marker' },
          { text: 'LPolygon', link: '/components/l-polygon' },
          { text: 'LPolyline', link: '/components/l-polyline' },
          { text: 'LPopup', link: '/components/l-popup' },
          { text: 'LRectangle', link: '/components/l-rectangle' },
          { text: 'LTileLayer', link: '/components/l-tile-layer' },
          { text: 'LTooltip', link: '/components/l-tooltip' },
          { text: 'LWmsTileLayer', link: '/components/l-wms-tile-layer' },
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'Q&A', link: '/about/q&a' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nuxt-modules/leaflet' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@nuxtjs/leaflet' }
    ],

    search: {
      provider: 'local',
    }
  },
  ignoreDeadLinks: true
})
