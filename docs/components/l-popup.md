---
outline: deep
---

# LPopup

> Display a popup on the map

::: tip
Popup placed inside a marker will by default appear on marker click.
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
  LPopup,
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
    <LPopup> Hi! I'm staying here on this location! </LPopup>
  </LMarker>

  <LLayerGroup>
    <LMarker :lat-lng="[41.75, -87.65]" draggable>
      <LPopup> Hi! You can drag me around! </LPopup>
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
    <LPopup> Hi! I'm a polygon, nice to meet you! </LPopup>
  </LPolygon>

  <LPolyline
    :lat-lngs="[
      [41.9329, -87.9327],
      [41.8329, -87.8327],
    ]"
    color="green"
  >
    <LPopup> Hey! Polyline here, at your service! </LPopup>
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
    <LPopup> Good day! Rectangle is my name! </LPopup>
  </LRectangle>

  <LCircle :lat-lng="[41.4329, -87.7327]" :radius="10000" color="green">
    <LPopup> Hi! I'm a green Circle! </LPopup>
  </LCircle>

  <LCircleMarker :lat-lng="[41.4329, -87.95]" :radius="20">
    <LPopup> Hi! You can call me Circle Marker! </LPopup>
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
    <LPopup> Hi! I'm staying here on this location! </LPopup>
  </LMarker>

  <LLayerGroup>
    <LMarker :lat-lng="[41.75, -87.65]" draggable>
      <LPopup> Hi! You can drag me around! </LPopup>
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
    <LPopup> Hi! I'm a polygon, nice to meet you! </LPopup>
  </LPolygon>

  <LPolyline
    :lat-lngs="[
      [41.9329, -87.9327],
      [41.8329, -87.8327],
    ]"
    color="green"
  >
    <LPopup> Hey! Polyline here, at your service! </LPopup>
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
    <LPopup> Good day! Rectangle is my name! </LPopup>
  </LRectangle>

  <LCircle :lat-lng="[41.4329, -87.7327]" :radius="10000" color="green">
    <LPopup> Hi! I'm a green Circle! </LPopup>
  </LCircle>

  <LCircleMarker :lat-lng="[41.4329, -87.95]" :radius="20">
    <LPopup> Hi! You can call me Circle Marker! </LPopup>
  </LCircleMarker>
</LMap>
```

## Props

| Prop name | Description           | Type                                                                                                                                                                   | Required | Default |
| --------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| latLng    | Position of the popup | Object\|Array as [L.LatLngExpression](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/45d34da16d9556b29be0469dbb66337735690feb/types/leaflet/v0/index.d.ts#L4) | -        | []      |

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
