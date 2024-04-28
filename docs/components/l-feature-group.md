---
outline: deep
---

# LFeatureGroup

> Extended [LLayerGroup](/components/l-layer-group.html) that makes it easier to do the same thing to all its member layers.

::: warning
This still needs better documentation and examples.
:::

## Demo

<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LFeatureGroup, LMarker } from '@vue-leaflet/vue-leaflet';
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
  <LFeatureGroup>
    <LMarker :lat-lng="[47.21322, -1.559482]" />
  </LFeatureGroup>
</LMap>

```vue
<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LFeatureGroup>
    <LMarker :lat-lng="[47.21322, -1.559482]" />
  </LFeatureGroup>
</LMap>
```

## Props

This component does not have any specific props.

### Inherited props

<!--@include: ./props/layer-group-props.md-->

## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
