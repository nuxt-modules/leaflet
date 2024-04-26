---
outline: deep
---

# LImageOverlay

> Easily display a image overlay.

## Demo

::: warning
The demo still needs to be fixed.
:::

<script setup lang="ts">
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { CRS } from "leaflet/dist/leaflet-src.esm";
import { computed, ref } from "vue";
import { LMap, LTileLayer, LImageOverlay, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

const imageOverlayUrl = ref(
  "https://www.printablee.com/postpic/2011/06/blank-100-square-grid-paper_405041.jpg"
);
const width = ref(100);
const height = ref(100);

const markers = ref([
  { coordinates: { lng: 0, lat: 0 } },
  { coordinates: { lng: 100, lat: 0 } },
  { coordinates: { lng: 0, lat: 100 } },
  { coordinates: { lng: 100, lat: 100 } },
  { coordinates: { lng: 0, lat: 50 } },
  { coordinates: { lng: 50, lat: 0 } },
  { coordinates: { lng: 50, lat: 100 } },
  { coordinates: { lng: 100, lat: 50 } },
]);

const bounds = computed(
  () =>
    [
      [0, 0],
      [height.value, width.value],
    ] as L.LatLngBoundsLiteral
);
const crs = CRS.Simple;
</script>

<LMap
  style="height: 350px"
  :zoom="1"
  :crs="crs"
  :center="[height / 2, width / 2]"
  :minZoom="-5"
>
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LImageOverlay :url="imageOverlayUrl" :bounds="bounds" />

  <LMarker
    v-for="(marker, idx) in markers"
    :key="idx"
    :lat-lng="marker.coordinates"
    ><LPopup>{{ idx }}</LPopup></LMarker
  >
</LMap>

<!-- Map Settings -->
<label for="imageOverlayUrl">Url to render: </label>
<input
  type="text"
  id="imageOverlayUrl"
  placeholder="Url for image overlay"
  v-model="imageOverlayUrl"
/>
<!-- Bounds settings -->
<label for="width">Width: </label>
<input type="number" id="width" placeholder="Width" v-model="width" />
<label for="height">Height: </label>
<input type="number" id="height" placeholder="Height" v-model="height" />

<!-- Marker settings -->
<div class="markers-list">
  <h4>Markers</h4>
  <ul>
    <li v-for="(marker, idx) in markers" :key="idx">
      {{ idx }} - lng (X): {{ marker.coordinates.lng }} - lat (Y):
      {{ marker.coordinates.lat }}
    </li>
  </ul>
</div>

```vue
<template>
  <LMap
    style="height: 350px"
    :zoom="1"
    :crs="crs"
    :center="[height / 2, width / 2]"
    :minZoom="-5"
  >
    <LTileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      layer-type="base"
      name="OpenStreetMap"
    />
    <LImageOverlay :url="imageOverlayUrl" :bounds="bounds" />

    <LMarker
      v-for="(marker, idx) in markers"
      :key="idx"
      :lat-lng="marker.coordinates"
      ><LPopup>{{ idx }}</LPopup></LMarker
    >
  </LMap>

  <!-- Map Settings -->
  <label for="imageOverlayUrl">Url to render: </label>
  <input
    type="text"
    id="imageOverlayUrl"
    placeholder="Url for image overlay"
    v-model="imageOverlayUrl"
  />
  <!-- Bounds settings -->
  <label for="width">Width: </label>
  <input type="number" id="width" placeholder="Width" v-model="width" />
  <label for="height">Height: </label>
  <input type="number" id="height" placeholder="Height" v-model="height" />

  <!-- Marker settings -->
  <div class="markers-list">
    <h4>Markers</h4>
    <ul>
      <li v-for="(marker, idx) in markers" :key="idx">
        {{ idx }} - lng (X): {{ marker.coordinates.lng }} - lat (Y):
        {{ marker.coordinates.lat }}
      </li>
    </ul>
  </div>
<template/>

<script setup lang="ts">
import { CRS } from "leaflet/dist/leaflet-src.esm";
import { computed, ref } from "vue";

const imageOverlayUrl = ref(
  "https://www.printablee.com/postpic/2011/06/blank-100-square-grid-paper_405041.jpg"
);
const width = ref(100);
const height = ref(100);

const markers = ref([
  { coordinates: { lng: 0, lat: 0 } },
  { coordinates: { lng: 100, lat: 0 } },
  { coordinates: { lng: 0, lat: 100 } },
  { coordinates: { lng: 100, lat: 100 } },
  { coordinates: { lng: 0, lat: 50 } },
  { coordinates: { lng: 50, lat: 0 } },
  { coordinates: { lng: 50, lat: 100 } },
  { coordinates: { lng: 100, lat: 50 } },
]);

const bounds = computed(
  () =>
    [
      [0, 0],
      [height.value, width.value],
    ] as L.LatLngBoundsLiteral
);
const crs = CRS.Simple;
</script>
```

## Props

| Prop name           | Description                                          | Type          | Values | Default       |
| ------------------- | ---------------------------------------------------- | -------       | ------ | ------------- |
| pane                |                                                      | string        | -      | 'overlayPane' |
| attribution         |                                                      | string        | -      | null          |
| name                |                                                      | string        | -      | undefined     |
| layerType           |                                                      | string        | -      | undefined     |
| visible             |                                                      | boolean       | -      | true          |
| interactive         |                                                      | boolean       | -      | false         |
| bubblingMouseEvents |                                                      | boolean       | -      | true          |
| url                 |                                                      | string        | -      |               |
| bounds              |                                                      | array\|object | -      | null          |
| opacity             |                                                      | number        | -      | 1.0           |
| alt                 |                                                      | string        | -      | ''            |
| crossOrigin         |                                                      | boolean       | -      | false         |
| errorOverlayUrl     |                                                      | string        | -      | ''            |
| zIndex              |                                                      | number        | -      | 1             |
| className           |                                                      | string        | -      | ''            |
| options             | Leaflet options to pass to the component constructor | object        | -      | {}            |
## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |