---
outline: deep
---

# LControlLayers

> Add any custom component as a leaflet control-layers

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControlLayers } from '@vue-leaflet/vue-leaflet';
</script>

<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LControlLayers position="topright" />
</LMap>

```vue{8}
<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LControlLayers position="topright" />
</LMap>
```

## Props

| Prop name      | Description                                          | Type    | Values | Default    |
| -------------- | ---------------------------------------------------- | ------- | ------ | ---------- |
| position       |                                                      | string  | -      | 'topright' |
| options        | Leaflet options to pass to the component constructor | object  | -      | {}         |
| collapsed      |                                                      | boolean | -      | true       |
| autoZIndex     |                                                      | boolean | -      | true       |
| hideSingleBase |                                                      | boolean | -      | false      |
| sortLayers     |                                                      | boolean | -      | false      |
| sortFunction   |                                                      | func    | -      | undefined  |

## Events

| Event name | Type   | Description                          |
| ---------- | ------ | ------------------------------------ |
| ready      | object | Triggers when the component is ready |