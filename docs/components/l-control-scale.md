---
outline: deep
---

# LControlScale

> A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems.

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

| Prop name      | Description                                                                                                    | Type    | Required | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------- | ------- | -------- | ------- |
| maxWidth       | Maximum width of the control in pixels. The width is set dynamically to show round values (eg. 100, 200, 500). | Number  | -        | 100     |
| metric         | Whether to show the metric scale line (m/km).                                                                  | Boolean | -        | true    |
| imperial       | Whether to show the imperial scale line (mi/ft).                                                               | Boolean | -        | true    |
| updateWhenIdle | If `true`, the control is updated on [moveend](https://leafletjs.com/reference.html#map-moveend), otherwise it's always up-to-date (updated on [move](https://leafletjs.com/reference.html#map-move)). | Boolean | -        | false   |

### Inherited props

<!--@include: ./props/control-props.md-->

## Events

| Event name | Type   | Description                          |
| ---------- | ------ | ------------------------------------ |
| ready      | object | Triggers when the component is ready |
