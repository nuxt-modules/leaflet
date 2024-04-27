---
outline: deep
---

# LPolygon

> Easily draw a polygon on the map

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LPolygon } from '@vue-leaflet/vue-leaflet';
</script>

<LMap style="height: 350px" :zoom="2" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LPolygon
    :lat-lngs="[
      [25.774, -80.19],
      [18.466, -66.118],
      [32.321, -64.757],
      [25.774, -80.19],
    ]"
    color="#41b782"
    :fill="true"
    :fillOpacity="0.5"
    fillColor="#41b782"
  />
</LMap>

```vue{8-19}
<LMap style="height: 350px" :zoom="2" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LPolygon
    :lat-lngs="[
      [25.774, -80.19],
      [18.466, -66.118],
      [32.321, -64.757],
      [25.774, -80.19],
    ]"
    color="#41b782"
    :fill="true"
    :fillOpacity="0.5"
    fillColor="#41b782"
  />
</LMap>
```

## Props

This component does not have any specific props.

### Inherited props

::: details from [LPolyline](/components/l-polyline)

<!--@include: ./props/polyline-props.md-->
:::

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
