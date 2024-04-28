---
outline: deep
---

# LImageOverlay

> Used to load and display a single image over specific bounds of the map.

## Demo

::: warning
The demo still needs to be fixed.
:::

<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { computed, ref, onMounted } from "vue";
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

onMounted(() => {
  import('leaflet')
})

// When map is ready
const mapInitialized = () => {
  crs.value = L.CRS.Simple;
};

const bounds = computed(
  () =>
    [
      [0, 0],
      [height.value, width.value],
    ] as L.LatLngBoundsLiteral
);
const crs = ref(null);
</script>

<LMap
  ref="map"
  @ready="mapInitialized"
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

| Prop name       | Description                                                                                                                           | Type                                                                                                                                                                         | Required | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| opacity         | The opacity of the image overlay                                                                                                      | Number                                                                                                                                                                       | -        | 1.0     |
| alt             | Text for the alt attribute of the image (useful for accessibility)                                                                    | String                                                                                                                                                                       | -        | ''      |
| interactive     | If `true`, the image overlay will emit [mouse events](https://leafletjs.com/reference.html#interactive-layer) when clicked or hovered | Boolean                                                                                                                                                                      | -        | false   |
| crossOrigin     | Whether the crossOrigin attribute will be added to the image                                                                          | Boolean                                                                                                                                                                      | -        | false   |
| errorOverlayUrl | URL to the overlay image to show in place of the overlay that failed to load                                                          | String                                                                                                                                                                       | -        | ''      |
| zIndex          | The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer          | Number                                                                                                                                                                       | -        | 1       |
| className       | A custom class name to assign to the image. Empty by default.                                                                         | String                                                                                                                                                                       | -        | ''      |
| url             |                                                                                                                                       | String                                                                                                                                                                       | true     |         |
| bounds          |                                                                                                                                       | Array\|Object as [L.LatLngBoundsExpression](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/45d34da16d9556b29be0469dbb66337735690feb/types/leaflet/v0/index.d.ts#L5) | true     | null    |

### Inherited props

<!--@include: ./props/layer-props.md-->

## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |
