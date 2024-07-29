# Using Leaflet.heat

The guide explains how to use the [Leaflet.heat](https://github.com/Leaflet/Leaflet.heat) plugin.
A dedicated composable is available to help you use this plugin.

::: warning
This is only possible in a client-side environment. You should either :
- Use a [Client-Only Page](https://nuxt.com/docs/guide/directory-structure/pages#client-only-pages).
- Wrap your component inside the [ClientOnly](https://nuxt.com/docs/api/components/client-only) component.
- Set your [rendering strategy](https://nuxt.com/docs/guide/concepts/rendering#client-side-rendering) to `ssr: false` for the appropriate route.
:::

## Installation

- First install `leaflet.heat`

```bash
npm install leaflet.heat
```

- Update your Nuxt config to activate the plugin

```ts{3-5}
export default defineNuxtConfig({
  modules: ['@nuxtjs/leaflet'],
  leaflet: {
    heat: true
  }
})
```

- Use the `useHeat` composable in your component

:::warning
It is very important to keep the manual import of Leaflet and the `:use-global-leaflet="true"` as leaflet.markercluster requires Leaflet to be loaded globally.
:::

```vue{9,23,29-46,50-53}
<template>
  <div style="height:100vh; width:100vw">
    <h1>Heat</h1>
    <LMap
      ref="map"
      :zoom="17"
      :max-zoom="22"
      :center="[47.21322, -1.559482]"
      :use-global-leaflet="true"
      @ready="onMapReady"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
      />
    </LMap>
  </div>
</template>

<script setup lang="ts">
import L from 'leaflet';
import { ref } from 'vue';

const isDrawing = ref(false);
const map = ref(null) as any;

// Create heat data
const heatPoints = [{
  lat: 47.21322,
  lng: -1.559482,
  intensity: 100.0
}, {
  lat: 47.21322,
  lng: -1.558482,
  intensity: 50.0
}, {
  lat: 47.21322,
  lng: -1.557482,
  intensity: 25.0
}, {
  lat: 47.21322,
  lng: -1.556482,
  intensity: 10.0
}];

// When the map is ready
const onMapReady = async () => {
  const heat = await useHeat({
    leafletObject: map.value.leafletObject,
    heatPoints: heatPoints
  });

  // (optional) Make the heat layer drawable
  map.value.leafletObject.on({
    movestart: function () { isDrawing.value = false; },
    moveend:   function () { isDrawing.value = true; },
    mousemove: function (e: any) {
      if (isDrawing.value) {
        heat.addLatLng(e.latlng);
      }
    }
  })
}
</script>
```
