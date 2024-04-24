import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nuxt3 Leaflet",
  description: "Documentation for the Nuxt3 Leaflet module",
  head: [['link', { rel: 'icon', href: '/Nuxt-Leaflet/favicon.ico' }]],
  base: '/Nuxt-Leaflet/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Start', link: '/getting-started/installation' },
      { text: 'Components', link: '/components/index' }
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
        text: 'Components',
        items: [
          { text: 'Index', link: '/components/index' },
          { text: 'LCircle', link: '/components/l-circle' },
          { text: 'LMap', link: '/components/l-map' }
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Using L', link: '/guide/using-l' },
          { text: 'Accessing Map Instance', link: '/guide/accessing-map-instance' },
          { text: 'GeoJson Example', link: '/guide/geojson-example' },
          { text: 'Leaflet Draw (Experimental)', link: '/guide/leaflet-draw' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gugustinette/Nuxt-Leaflet' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/nuxt3-leaflet' }
    ]
  }
})
