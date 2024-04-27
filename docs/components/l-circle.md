---
outline: deep
---

# LCircle

> Draw a path in the shape of a circle around a center positioned at `latLng` coordinates.

> It's an approximation and starts to diverge from a real circle closer to the poles (due to projection distortion).

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LCircle } from '@vue-leaflet/vue-leaflet';
</script>

<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LCircle
    :lat-lng="[47.21322, -1.559482]"
    :radius="4500"
    :color="'red'"
  />
</LMap>

```vue{8-12}
<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LCircle
    :lat-lng="[47.21322, -1.559482]"
    :radius="4500"
    :color="'red'"
  />
</LMap>
```

## Props

| Prop name | Description                          | Type                                | Required | Default |
| --------- | ------------------------------------ | ----------------------------------- | -------- | ------- |
| radius    | Radius of the circle, in meters      | Number                              | true     | -       |
| latLng    | Latitude and longitude of the marker | object\|array as L.LatLngExpression | true     | [0, 0]  |

### Inherited props

<!--@include: ./props/path-props.md-->

## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
