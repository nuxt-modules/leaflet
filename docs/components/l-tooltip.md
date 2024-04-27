---
outline: deep
---

# LTooltip

> Display a tooltip on the map

::: tip
Tooltip placed inside a marker will by default appear on marker hover.
:::

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  LCircle,
  LCircleMarker,
  LLayerGroup,
  LMap,
  LMarker,
  LPolygon,
  LPolyline,
  LTooltip,
  LRectangle,
  LTileLayer
} from '@vue-leaflet/vue-leaflet';
</script>

<LMap style="height: 350px" :zoom="9" :center="[41.8329, -87.7327]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />

  <LMarker :lat-lng="[41.8329, -87.7327]">
    <LTooltip> Hi! I'm staying here on this location! </LTooltip>
  </LMarker>

  <LLayerGroup>
    <LMarker :lat-lng="[41.75, -87.65]" draggable>
      <LTooltip> Hi! You can drag me around! </LTooltip>
    </LMarker>
  </LLayerGroup>

  <LPolygon
    :lat-lngs="[
      [41.6329, -87.5327],
      [41.5329, -87.2327],
      [41.3329, -87.3327],
      [41.6329, -87.5327],
    ]"
    color="#41b782"
    :fill="true"
    :fillOpacity="0.5"
    fillColor="#41b782"
  >
    <LTooltip> Hi! I'm a polygon, nice to meet you! </LTooltip>
  </LPolygon>

  <LPolyline
    :lat-lngs="[
      [41.9329, -87.9327],
      [41.8329, -87.8327],
    ]"
    color="green"
  >
    <LTooltip> Hey! Polyline here, at your service! </LTooltip>
  </LPolyline>

  <LRectangle
    :lat-lngs="[
      [41.734852, -86.809485],
      [41.742596, -86.628731],
      [41.641487, -86.590568],
      [41.634787, -86.658337],
    ]"
    :fill="true"
    color="#35495d"
  >
    <LTooltip> Good day! Rectangle is my name! </LTooltip>
  </LRectangle>

  <LCircle :lat-lng="[41.4329, -87.7327]" :radius="10000" color="green">
    <LTooltip> Hi! I'm a green Circle! </LTooltip>
  </LCircle>

  <LCircleMarker :lat-lng="[41.4329, -87.95]" :radius="20">
    <LTooltip> Hi! You can call me Circle Marker! </LTooltip>
  </LCircleMarker>
</LMap>

```vue
<LMap style="height: 350px" :zoom="9" :center="[41.8329, -87.7327]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />

  <LMarker :lat-lng="[41.8329, -87.7327]">
    <LTooltip> Hi! I'm staying here on this location! </LTooltip>
  </LMarker>

  <LLayerGroup>
    <LMarker :lat-lng="[41.75, -87.65]" draggable>
      <LTooltip> Hi! You can drag me around! </LTooltip>
    </LMarker>
  </LLayerGroup>

  <LPolygon
    :lat-lngs="[
      [41.6329, -87.5327],
      [41.5329, -87.2327],
      [41.3329, -87.3327],
      [41.6329, -87.5327],
    ]"
    color="#41b782"
    :fill="true"
    :fillOpacity="0.5"
    fillColor="#41b782"
  >
    <LTooltip> Hi! I'm a polygon, nice to meet you! </LTooltip>
  </LPolygon>

  <LPolyline
    :lat-lngs="[
      [41.9329, -87.9327],
      [41.8329, -87.8327],
    ]"
    color="green"
  >
    <LTooltip> Hey! Polyline here, at your service! </LTooltip>
  </LPolyline>

  <LRectangle
    :lat-lngs="[
      [41.734852, -86.809485],
      [41.742596, -86.628731],
      [41.641487, -86.590568],
      [41.634787, -86.658337],
    ]"
    :fill="true"
    color="#35495d"
  >
    <LTooltip> Good day! Rectangle is my name! </LTooltip>
  </LRectangle>

  <LCircle :lat-lng="[41.4329, -87.7327]" :radius="10000" color="green">
    <LTooltip> Hi! I'm a green Circle! </LTooltip>
  </LCircle>

  <LCircleMarker :lat-lng="[41.4329, -87.95]" :radius="20">
    <LTooltip> Hi! You can call me Circle Marker! </LTooltip>
  </LCircleMarker>
</LMap>
```

## Props

This component does not have any specific props.

### Inherited props

<!--@include: ./props/popper-props.md-->

## Events

| Event name | Type   | Description                          |
| ---------- | ------ | ------------------------------------ |
| ready      | object | Triggers when the component is ready |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
