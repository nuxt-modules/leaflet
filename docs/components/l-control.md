---
outline: deep
---

# LControl

> Base component for implementing map controls. Handles positioning. All other controls extend from this component.

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControl } from '@vue-leaflet/vue-leaflet';

const clickHandler = () => {
  alert('and mischievous');
}
</script>

<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LControl position="bottomleft">
    <button
      style="background: white; color: black; padding: 2px; border-radius: 5px;"
      @click="clickHandler"
    >I am a useless button!</button>
  </LControl>
</LMap>

```vue{8-13}
<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LControl position="bottomleft">
    <button
      style="background: white; color: black; padding: 2px; border-radius: 5px;"
      @click="clickHandler"
    >I am a useless button!</button>
  </LControl>
</LMap>

<script setup>
const clickHandler = () => {
  alert('and mischievous');
}
</script>
```

## Props

| Prop name                | Description | Type    | Required | Default |
| ------------------------ | ----------- | ------- | -------- | ------- |
| disableClickPropagation  |             | Boolean | -        | true    |
| disableScrollPropagation |             | Boolean | -        | false   |

### Inherited props

<!--@include: ./props/control-props.md-->

## Events

| Event name | Type   | Description                          |
| ---------- | ------ | ------------------------------------ |
| ready      | object | Triggers when the component is ready |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
