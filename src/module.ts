import { defineNuxtModule, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  donut?: boolean
  heat?: boolean
  hotline?: boolean
  markerCluster?: boolean
  rotatedMarker?: boolean
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
  'LSVGOverlay',
  'LTileLayer',
  'LTooltip',
  'LVideoOverlay',
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
    // Add Leaflet's CSS
    nuxt.options.css.push('leaflet/dist/leaflet.css')

    // Auto-import Vue Leaflet components
    for (const component of components) {
      addComponent({
        name: component,
        export: component,
        filePath: '@maxel01/vue-leaflet',
        chunkName: `nuxt-leaflet/${component}`,
        mode: 'all',
      })
    }

    // If leaflet.donut is enabled
    if (options.donut) {
      // Auto-import the LDonut component
      addComponent({
        name: 'LDonut',
        export: 'LDonut',
        filePath: '@maxel01/vue-leaflet-plugins',
        chunkName: 'nuxt-leaflet/LDonut',
        mode: 'all',
      })
    }

    // If leaflet.heat is enabled
    if (options.heat) {
      // Auto-import the LHeatLayer component
      addComponent({
        name: 'LHeatLayer',
        export: 'LHeatLayer',
        filePath: '@maxel01/vue-leaflet-plugins',
        chunkName: 'nuxt-leaflet/LHeatLayer',
        mode: 'all',
      })
    }

    // If leaflet.hotline is enabled
    if (options.hotline) {
      // Auto-import the LHotline component
      addComponent({
        name: 'LHotline',
        export: 'LHotline',
        filePath: '@maxel01/vue-leaflet-plugins',
        chunkName: 'nuxt-leaflet/LHotline',
        mode: 'all',
      })
    }

    // If leaflet.markercluster is enabled
    if (options.markerCluster) {
      // Add Leaflet MarkerCluster CSS
      nuxt.options.css.push('@maxel01/vue-leaflet-plugins/dist/vue-leaflet-plugins.css')

      // Auto-import the MarkerClusterGroup component
      addComponent({
        name: 'LMarkerClusterGroup',
        export: 'LMarkerClusterGroup',
        filePath: '@maxel01/vue-leaflet-plugins',
        chunkName: 'nuxt-leaflet/LMarkerClusterGroup',
        mode: 'all',
      })
    }

    // If leaflet.rotatedMarker is enabled
    if (options.heat) {
      // Auto-import the LRotatedMarker component
      addComponent({
        name: 'LRotatedMarker',
        export: 'LRotatedMarker',
        filePath: '@maxel01/vue-leaflet-plugins',
        chunkName: 'nuxt-leaflet/LRotatedMarker',
        mode: 'all',
      })
    }
  },
})
