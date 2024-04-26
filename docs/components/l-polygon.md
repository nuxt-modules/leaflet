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

| Prop name           | Description                                          | Type    | Values | Default       |
| ------------------- | ---------------------------------------------------- | ------- | ------ | ------------- |
| pane                |                                                      | string  | -      | 'overlayPane' |
| attribution         |                                                      | string  | -      | null          |
| name                |                                                      | string  | -      | undefined     |
| layerType           |                                                      | string  | -      | undefined     |
| visible             |                                                      | boolean | -      | true          |
| interactive         |                                                      | boolean | -      | true          |
| bubblingMouseEvents |                                                      | boolean | -      | true          |
| lStyle              |                                                      | object  | -      | null          |
| stroke              |                                                      | boolean | -      | true          |
| color               |                                                      | string  | -      | '#3388ff'     |
| weight              |                                                      | number  | -      | 3             |
| opacity             |                                                      | number  | -      | 1.0           |
| lineCap             |                                                      | string  | -      | 'round'       |
| lineJoin            |                                                      | string  | -      | 'round'       |
| dashArray           |                                                      | string  | -      | null          |
| dashOffset          |                                                      | string  | -      | null          |
| fill                |                                                      | boolean | -      | true          |
| fillColor           |                                                      | string  | -      | '#3388ff'     |
| fillOpacity         |                                                      | number  | -      | 0.2           |
| fillRule            |                                                      | string  | -      | 'evenodd'     |
| className           |                                                      | string  | -      | null          |
| smoothFactor        |                                                      | number  | -      | 1.0           |
| noClip              |                                                      | boolean | -      | false         |
| options             | Leaflet options to pass to the component constructor | object  | -      | {}            |
| latLngs             |                                                      | array   | -      | []            |

## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |