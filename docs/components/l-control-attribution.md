---
outline: deep
---

# LControlAttribution

> The attribution control allows you to display attribution data in a small text bos on a map.

## Demo

<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControlAttribution } from '@vue-leaflet/vue-leaflet';
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
  <LControlAttribution position="topright" prefix="A custom prefix" />
</LMap>

```vue{8}
<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LControlAttribution position="topright" prefix="A custom prefix" />
</LMap>
```

## Props

| Prop name | Description                                                           | Type            | Required | Default   |
| --------- | --------------------------------------------------------------------- | --------------- | -------- | --------- |
| prefix    | The HTML text shown before the attributions. Pass `false` to disable. | String\|boolean | -        | 'Leaflet' |

### Inherited props

<!--@include: ./props/control-props.md-->

## Events

| Event name | Type   | Description                          |
| ---------- | ------ | ------------------------------------ |
| ready      | object | Triggers when the component is ready |
