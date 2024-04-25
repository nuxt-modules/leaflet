---
outline: deep
---

# LControlScale

> Add any custom component as a leaflet control-scale

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControlScale } from '@vue-leaflet/vue-leaflet';
</script>

<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LControlScale position="topright" :imperial="true" :metric="false" />
</LMap>

```vue{8}
<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LControlScale position="topright" :imperial="true" :metric="false" />
</LMap>
```

## Props

| Prop name      | Description                                          | Type    | Values | Default    |
| -------------- | ---------------------------------------------------- | ------- | ------ | ---------- |
| position       |                                                      | string  | -      | 'topright' |
| options        | Leaflet options to pass to the component constructor | object  | -      | {}         |
| maxWidth       |                                                      | number  | -      | 100        |
| metric         |                                                      | boolean | -      | true       |
| imperial       |                                                      | boolean | -      | true       |
| updateWhenIdle |                                                      | boolean | -      | false      |

## Events

| Event name | Type   | Description                          |
| ---------- | ------ | ------------------------------------ |
| ready      | object | Triggers when the component is ready |