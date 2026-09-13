import { defineNuxtModule, addComponent, createResolver, addImports } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  markerCluster?: boolean
  heat?: boolean
  /**
   * Inject Leaflet's stylesheets globally (in `nuxt.options.css`).
   *
   * Set to `false` to keep the map CSS out of the global entry stylesheet and
   * import it yourself in the components using a map, so that it is only
   * bundled in the chunks that actually need it.
   *
   * @default true
   */
  injectCss?: boolean
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
  defaults: {
    injectCss: true,
  },
  async setup(options, nuxt) {
    // Create a resolver for the module
    const resolver = createResolver(import.meta.url)

    // Add Leaflet's CSS, unless the user opted out of the global injection
    if (options.injectCss !== false) {
      nuxt.options.css.push('leaflet/dist/leaflet.css')
    }

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
      // Add Leaflet MarkerCluster CSS, unless the user opted out of the global injection
      if (options.injectCss !== false) {
        nuxt.options.css.push('leaflet.markercluster/dist/MarkerCluster.css')
        nuxt.options.css.push('leaflet.markercluster/dist/MarkerCluster.Default.css')
      }

      // Auto-import the runtime composable
      addImports({
        name: 'useLMarkerCluster',
        as: 'useLMarkerCluster',
        from: resolver.resolve('runtime/composables/useLMarkerCluster'),
      })
    }

    // If leaflet.heat is enabled
    if (options.heat) {
      // Auto-import the runtime composable
      addImports({
        name: 'useLHeat',
        as: 'useLHeat',
        from: resolver.resolve('runtime/composables/useLHeat'),
      })
    }
  },
})
