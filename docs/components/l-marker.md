---
outline: deep
---

# LMarker

> Marker component, lets you add and personalize markers on the map

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
</script>

<LMap style="height: 350px" :zoom="2" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LMarker :lat-lng="[50, 50]" draggable />
</LMap>

```vue
<LMap style="height: 350px" :zoom="2" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LMarker :lat-lng="[50, 50]" draggable />
</LMap>
```

## Props

| Prop name    | Description                                          | Type          | Values | Default                  |
| ------------ | ---------------------------------------------------- | ------------- | ------ | ------------------------ |
| pane         |                                                      | string        | -      | 'markerPane'             |
| attribution  |                                                      | string        | -      | null                     |
| name         |                                                      | string        | -      | undefined                |
| layerType    |                                                      | string        | -      | undefined                |
| visible      |                                                      | boolean       | -      | true                     |
| options      | Leaflet options to pass to the component constructor | object        | -      | {}                       |
| draggable    |                                                      | boolean       | -      | false                    |
| latLng       |                                                      | object\|array | -      | null                     |
| icon         |                                                      | object        | -      | () => new Icon.Default() |
| opacity      |                                                      | number        | -      | 1.0                      |
| zIndexOffset |                                                      | number        | -      | null                     |

## Events

| Event name     | Type      | Description                                        |
| -------------- | --------- | -------------------------------------------------- |
| update:visible | boolean   | Triggers when the visible prop needs to be updated |
| ready          | object    | Triggers when the component is ready               |
| update:latLng  | undefined |
| update:lat-lng | undefined |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |