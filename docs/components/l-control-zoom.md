---
outline: deep
---

# LControlZoom

> Add any custom component as a leaflet control-zoom

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControlZoom } from '@vue-leaflet/vue-leaflet';
</script>

<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LControlZoom position="bottomright" />
</LMap>

```vue{8}
<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LControlZoom position="bottomright" />
</LMap>
```

## Props

| Prop name    | Description                                          | Type   | Values | Default    |
| ------------ | ---------------------------------------------------- | ------ | ------ | ---------- |
| position     |                                                      | string | -      | 'topright' |
| options      | Leaflet options to pass to the component constructor | object | -      | {}         |
| zoomInText   |                                                      | string | -      | '+'        |
| zoomInTitle  |                                                      | string | -      | 'Zoom in'  |
| zoomOutText  |                                                      | string | -      | '-'        |
| zoomOutTitle |                                                      | string | -      | 'Zoom out' |

## Events

| Event name | Type   | Description                          |
| ---------- | ------ | ------------------------------------ |
| ready      | object | Triggers when the component is ready |