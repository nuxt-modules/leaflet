---
outline: deep
---

# LRectangle

> Easily draw a rectangle on the map

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LRectangle } from '@vue-leaflet/vue-leaflet';
</script>

<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />

  <LRectangle
    :lat-lngs="[
      [47.334852, -1.509485],
      [47.342596, -1.328731],
      [47.241487, -1.190568],
      [47.234787, -1.358337],
      [47.294733, -1.234567],
    ]"
    :fill="true"
    color="#35495d"
  />

  <LRectangle
    :bounds="[
      [47.5, -1],
      [47.6, -1.1],
    ]"
  />
</LMap>

```vue{9-19,21-26}
<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />

  <LRectangle
    :lat-lngs="[
      [47.334852, -1.509485],
      [47.342596, -1.328731],
      [47.241487, -1.190568],
      [47.234787, -1.358337],
      [47.294733, -1.234567],
    ]"
    :fill="true"
    color="#35495d"
  />

  <LRectangle
    :bounds="[
      [47.5, -1],
      [47.6, -1.1],
    ]"
  />
</LMap>
```

## Props

| Prop name           | Description                                          | Type    | Values | Default             |
| ------------------- | ---------------------------------------------------- | ------- | ------ | ------------------- |
| pane                |                                                      | string  | -      | 'overlayPane'       |
| attribution         |                                                      | string  | -      | null                |
| name                |                                                      | string  | -      | undefined           |
| layerType           |                                                      | string  | -      | undefined           |
| visible             |                                                      | boolean | -      | true                |
| interactive         |                                                      | boolean | -      | true                |
| bubblingMouseEvents |                                                      | boolean | -      | true                |
| lStyle              |                                                      | object  | -      | null                |
| stroke              |                                                      | boolean | -      | true                |
| color               |                                                      | string  | -      | '#3388ff'           |
| weight              |                                                      | number  | -      | 3                   |
| opacity             |                                                      | number  | -      | 1.0                 |
| lineCap             |                                                      | string  | -      | 'round'             |
| lineJoin            |                                                      | string  | -      | 'round'             |
| dashArray           |                                                      | string  | -      | null                |
| dashOffset          |                                                      | string  | -      | null                |
| fill                |                                                      | boolean | -      | true                |
| fillColor           |                                                      | string  | -      | '#3388ff'           |
| fillOpacity         |                                                      | number  | -      | 0.2                 |
| fillRule            |                                                      | string  | -      | 'evenodd'           |
| className           |                                                      | string  | -      | null                |
| smoothFactor        |                                                      | number  | -      | 1.0                 |
| noClip              |                                                      | boolean | -      | false               |
| options             | Leaflet options to pass to the component constructor | object  | -      | {}                  |
| bounds              |                                                      | func    | -      | () => [[0,0],[0,0]] |

## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |