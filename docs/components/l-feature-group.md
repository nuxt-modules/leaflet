---
outline: deep
---

# LFeatureGroup

> Group together elements of the maps including: markers, geoJSON, polylines and polygon, tooltip and popup.

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LFeatureGroup, LMarker } from '@vue-leaflet/vue-leaflet';
</script>

<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LFeatureGroup>
    <LMarker :lat-lng="[47.21322, -1.559482]" />
  </LFeatureGroup>
</LMap>

```vue
<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LFeatureGroup>
    <LMarker :lat-lng="[47.21322, -1.559482]" />
  </LFeatureGroup>
</LMap>
```

## Props

| Prop name   | Description                                          | Type    | Values | Default       |
| ----------- | ---------------------------------------------------- | ------- | ------ | ------------- |
| pane        |                                                      | string  | -      | 'overlayPane' |
| attribution |                                                      | string  | -      | null          |
| name        |                                                      | string  | -      | undefined     |
| layerType   |                                                      | string  | -      | undefined     |
| visible     |                                                      | boolean | -      | true          |
| options     | Leaflet options to pass to the component constructor | object  | -      | {}            |

## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |