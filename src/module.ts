import { defineNuxtModule, addComponent, createResolver, addImports } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  markerCluster?: boolean
}

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
  'LWmsTileLayer',
]

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-leaflet',
    configKey: 'leaflet',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(options, nuxt) {
    // Create a resolver for the module
    const resolver = createResolver(import.meta.url)

    // Add Leaflet's CSS
    nuxt.options.css.push('leaflet/dist/leaflet.css')

    // Auto-import Vue Leaflet components
    for (const component of components) {
      addComponent({
        name: component,
        export: component,
        filePath: '@vue-leaflet/vue-leaflet',
        chunkName: `nuxt-leaflet/${component}`,
        mode: 'all',
      })
    }

    // If leaflet.markercluster is enabled
    if (options.markerCluster) {
      // Add Leaflet MarkerCluster CSS
      nuxt.options.css.push('leaflet.markercluster/dist/MarkerCluster.css')
      nuxt.options.css.push('leaflet.markercluster/dist/MarkerCluster.Default.css')

      // Auto-import the runtime composables
      addImports({
        name: 'useMarkerCluster',
        as: 'useMarkerCluster',
        from: resolver.resolve('runtime/composables/useMarkerCluster'),
      })
    }
  },
})
