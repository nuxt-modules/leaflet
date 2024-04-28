---
outline: deep
---

# LLayerGroup

> Use to group several layers and handle them as one. If you add it to the map, any layers added or removed from the group will be added/removed on the map as well.

::: warning
This still needs better documentation and examples.
:::

## Demo

<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LLayerGroup, LMarker } from '@vue-leaflet/vue-leaflet';
import { onMounted } from 'vue';

onMounted(() => {
  import('leaflet')
})
</script>

<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LLayerGroup>
    <LMarker :lat-lng="[47.21322, -1.559482]" />
  </LLayerGroup>
</LMap>

```vue
<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LLayerGroup>
    <LMarker :lat-lng="[47.21322, -1.559482]" />
  </LLayerGroup>
</LMap>
```

## Props

This component does not have any specific props.

### Inherited props

<!--@include: ./props/layer-props.md-->

## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |