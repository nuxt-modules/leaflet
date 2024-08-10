# Using Leaflet.markercluster

The guide explains how to use the [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) plugin.
A dedicated composable is available to help you use this plugin.

::: warning
This is only possible in a client-side environment. You should either :
- Use a [Client-Only Page](https://nuxt.com/docs/guide/directory-structure/pages#client-only-pages).
- Wrap your component inside the [ClientOnly](https://nuxt.com/docs/api/components/client-only) component.
- Set your [rendering strategy](https://nuxt.com/docs/guide/concepts/rendering#client-side-rendering) to `ssr: false` for the appropriate route.
:::

## Installation

- First install markercluster

```bash
npm install leaflet.markercluster
```

- Update your Nuxt config to activate the plugin

```ts{3-5}
export default defineNuxtConfig({
  modules: ['@nuxtjs/leaflet'],
  leaflet: {
    markerCluster: true
  }
})
```

- Use the `useLMarkerCluster` composable in your component

:::warning
It is very important to keep the manual import of Leaflet and the `:use-global-leaflet="true"` as leaflet.markercluster requires Leaflet to be loaded globally.
:::

```vue{9,23,28-50,54-57}
<template>
  <div style="height:100vh; width:100vw">
    <h1>Marker Cluster</h1>
    <LMap
      ref="map"
      :zoom="6"
      :max-zoom="18"
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
import L from 'leaflet'
import { ref } from 'vue';

const map = ref(null) as any;

// Create locations data (20 locations around Nantes)
const locations = [
  { name: 'Nantes', lat: 47.218371, lng: -1.553621 },
  { name: 'Saint-Nazaire', lat: 47.273018, lng: -2.213733 },
  { name: 'La Baule', lat: 47.286835, lng: -2.393108 },
  { name: 'Pornic', lat: 47.112, lng: -2.102 },
  { name: 'Guérande', lat: 47.328, lng: -2.429 },
  { name: 'Clisson', lat: 47.087, lng: -1.276 },
  { name: 'Ancenis', lat: 47.366, lng: -1.176 },
  { name: 'Châteaubriant', lat: 47.716, lng: -1.376 },
  { name: 'Redon', lat: 47.652, lng: -2.084 },
  { name: 'Pontchâteau', lat: 47.433, lng: -2.117 },
  { name: 'Savenay', lat: 47.327, lng: -1.952 },
  { name: 'Rezé', lat: 47.183, lng: -1.55 },
  { name: 'Vertou', lat: 47.166, lng: -1.466 },
  { name: 'Carquefou', lat: 47.283, lng: -1.5 },
  { name: 'Orvault', lat: 47.283, lng: -1.633 },
  { name: 'Saint-Herblain', lat: 47.216, lng: -1.65 },
  { name: 'Sainte-Luce-sur-Loire', lat: 47.233, lng: -1.483 },
  { name: 'Bouguenais', lat: 47.183, lng: -1.583 },
  { name: 'Saint-Sébastien-sur-Loire', lat: 47.183, lng: -1.483 },
  { name: 'Basse-Goulaine', lat: 47.2, lng: -1.483 }
];

// When the map is ready
const onMapReady = () => {
  useLMarkerCluster({
    leafletObject: map.value.leafletObject,
    markers: locations
  });
}
</script>
```

## Options

Here are the options available for each marker in the `markers` prop.

| Event name | Type   | Description                                                                                                        |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| name       | string | **(optional)** Name of the location, will be displayed in a tooltip. If not provided, no tooltip will be displayed |
| lat        | number | Latitude of the location                                                                                           |
| lng        | number | Longitude of the location                                                                                          |
| options    | object | **(optional)** Standard [Leaflet Marker options](https://leafletjs.com/reference.html#marker)                      |
| popup      | string | **(optional)** If provided, it is considered as an HTML string and will be displayed as a popup on the marker      |

## Recipes

### Accessing the cluster group

You can access the cluster group created by `useLMarkerCluster` to call any method from the [leaflet.markercluster API](https://github.com/Leaflet/Leaflet.markercluster?tab=readme-ov-file#events).

```ts
const locations = [{
  name: 'Nantes',
  lat: 47.218371,
  lng: -1.553621
}];
const { markerCluster } = useLMarkerCluster({
  leafletObject: map.value.leafletObject,
  markers: locations
});
markerCluster.on('clusterclick', (event) => {
  console.log('Cluster clicked');
});
```

### Customizing the markers

You can use a customize the markers by providing the `icon` option in the location object.

```ts
const locations = [{
  name: 'Nantes',
  lat: 47.218371,
  lng: -1.553621,
  options: {
    draggable: true,
    icon: L.icon({
      iconUrl: '/my-icon.png',
      iconSize: [30, 30],
    })
  } 
}];

useLMarkerCluster({
  leafletObject: map.value.leafletObject,
  markers: locations
});
```

### Displaying a popup on a marker

You can add a popup to a marker by providing the `popup` option in the location object.

```ts
const locations = [{
  name: 'Nantes',
  lat: 47.218371,
  lng: -1.553621,
  popup: '<h1>This is Nantes</h1>'
}];

useLMarkerCluster({
  leafletObject: map.value.leafletObject,
  markers: locations
});
```

### Calling legacy methods from Leaflet

You can access the markers created by `useLMarkerCluster`, and call any method from the [Leaflet Marker API](https://leafletjs.com/reference.html#marker).

```ts
const locations = [{
  name: 'Nantes',
  lat: 47.218371,
  lng: -1.553621
}];

const { markers } = useLMarkerCluster({
  leafletObject: map.value.leafletObject,
  markers: locations
});
markers.forEach(marker => {
  marker.bindPopup(L.popup().setContent('</h1>Hello marker</h1>'));
});
```
