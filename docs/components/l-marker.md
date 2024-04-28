---
outline: deep
---

# LMarker

> Used to display clickable/draggable markers on the map.

## Demo

<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import { onMounted } from 'vue';

onMounted(() => {
  import('leaflet')
})
</script>

<LMap style="height: 350px" :zoom="2" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LMarker :lat-lng="[50, 50]" draggable />
</LMap>

```vue
<LMap style="height: 350px" :zoom="2" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LMarker :lat-lng="[50, 50]" draggable />
</LMap>
```

## Props

| Prop name    | Description                                                                                                                                                                                                                           | Type                                                                                                                                                                   | Required | Default                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------- |
| draggable    | Whether the marker is draggable with mouse/touch or not                                                                                                                                                                               | Boolean                                                                                                                                                                | -        | false                                                                 |
| icon         | Icon instance to use for rendering the marker. See [Icon documentation](/components/l-icon.html) for details on how to customize the marker icon.                                                                                     | Object as [L.Icon](https://leafletjs.com/reference.html#icon)                                                                                                          | -        | [L.Icon.Default()](https://leafletjs.com/reference.html#icon-default) |
| zIndexOffset | By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like 1000 (or high negative value, respectively). | Number                                                                                                                                                                 | -        | 0                                                                     |
| latLng       | The position of the marker                                                                                                                                                                                                            | Object\|Array as [L.LatLngExpression](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/45d34da16d9556b29be0469dbb66337735690feb/types/leaflet/v0/index.d.ts#L4) | true     | null                                                                  |

### Inherited props

<!--@include: ./props/layer-props.md-->

## Events

| Event name     | Type      | Description                                        |
| -------------- | --------- | -------------------------------------------------- |
| update:visible | boolean   | Triggers when the visible prop needs to be updated |
| ready          | object    | Triggers when the component is ready               |
| update:latLng  | undefined |
| update:lat-lng | undefined |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |