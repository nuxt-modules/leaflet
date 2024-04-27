---
outline: deep
---

# LControlZoom

> A basic zoom control with two buttons (zoom in and zoom out).

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

| Prop name    | Description                            | Type   | Required | Default    |
| ------------ | -------------------------------------- | ------ | -------- | ---------- |
| zoomInText   | The text set on the 'zoom in' button   | String | -        | '+'        |
| zoomInTitle  | The title set on the 'zoom in' button  | String | -        | 'Zoom in'  |
| zoomOutText  | The text set on the 'zoom out' button  | String | -        | '-'        |
| zoomOutTitle | The title set on the 'zoom out' button | String | -        | 'Zoom out' |

### Inherited props

<!--@include: ./props/control-props.md-->

## Events

| Event name | Type   | Description                          |
| ---------- | ------ | ------------------------------------ |
| ready      | object | Triggers when the component is ready |
