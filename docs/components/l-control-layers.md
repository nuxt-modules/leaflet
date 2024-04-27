---
outline: deep
---

# LControlLayers

> The layers control gives users the ability to switch between different base layers and switch overlays on/off.

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControlLayers } from '@vue-leaflet/vue-leaflet';
</script>

<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LControlLayers position="topright" />
</LMap>

```vue{8}
<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LControlLayers position="topright" />
</LMap>
```

## Props

| Prop name      | Description                                                                                                                                                                                                                                                                                                                                                                                                      | Type     | Required | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | ------- |
| collapsed      | If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.                                                                                                                                                                                                                                                                                                | Boolean  | -        | true    |
| autoZIndex     | If `true`, the control will assing zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.                                                                                                                                                                                                                                                                  | Boolean  | -        | true    |
| hideSingleBase | If `true`, the base layers in the control will be hidden when there is only one.                                                                                                                                                                                                                                                                                                                                 | Boolean  | -        | false   |
| sortLayers     | Whether to sort the layers. When `false`, layers will keep the order in which they were added to the control.                                                                                                                                                                                                                                                                                                    | Boolean  | -        | false   |
| sortFunction   | A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) that will be used for sorting the layers, when `sortLayers` is `true`. The function receives both the [L.Layer](https://leafletjs.com/reference.html#layer) instances and their names, as in `sortFunction(layerA, layerB, nameA, nameB)`. By default, it sorts layers alphabetically by their name. | Function | -        | *       |

### Inherited props

<!--@include: ./props/control-props.md-->

## Events

| Event name | Type   | Description                          |
| ---------- | ------ | ------------------------------------ |
| ready      | object | Triggers when the component is ready |
