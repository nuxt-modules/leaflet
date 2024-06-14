import { defineNuxtModule, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

// Components to export
export const components = [
  'LCircle',
  'LCircleMarker',
  'LControl',
  'LControlAttribution',
  'LControlLayers',
  'LControlScale',
  'LControlZoom',
  'LFeatureGroup',
  'LGeoJson',
  'LIcon',
  'LImageOverlay',
  'LLayerGroup',
  'LMap',
  'LMarker',
  'LPolygon',
  'LPolyline',
  'LPopup',
  'LRectangle',
  'LTileLayer',
  'LTooltip',
  'LWmsTileLayer'
]

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-leaflet',
    configKey: 'nuxtLeaflet',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup (options, nuxt) {
    // Add Leaflet's CSS
    nuxt.options.css.push('leaflet/dist/leaflet.css')

    // Export Vue Leaflet components
    for (const component of components) {
      addComponent({
        name: component,
        export: component,
        filePath: '@vue-leaflet/vue-leaflet',
        chunkName: `nuxt-leaflet/${component}`,
        mode: 'all'
      })
    }
  }
})
