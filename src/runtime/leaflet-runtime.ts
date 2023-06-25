/**
 * Nuxt plugin to import and expose Leaflet to the Nuxt context
 */
import * as leaflet from 'leaflet'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.L = leaflet
})
