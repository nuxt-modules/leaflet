---
outline: deep
---

# LIcon

> Easy and reactive way to configure the icon of a marker

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet';
import { ref, computed } from 'vue'

const iconWidth = ref(21);
const iconHeight = ref(42);

const iconUrl = computed(() => `https://picsum.photos/${iconWidth.value}/${iconHeight.value}`);
const iconSize = computed(() => [iconWidth.value, iconHeight.value]);

const changeIcon = () => {
  iconWidth.value += 1;
  if (iconWidth.value > iconHeight.value) {
    iconWidth.value = Math.floor(iconHeight.value / 2);
  }
};
</script>

<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />

  <LMarker :lat-lng="[47.41322, -1.219482]">
    <LIcon :icon-url="iconUrl" :icon-size="iconSize" />
  </LMarker>
  <LMarker :lat-lng="[47.41323, -1.219482]" />

  <LMarker :lat-lng="[47.61322, -0.519482]">
    <LIcon :icon-size="[21, 21]">★</LIcon>
  </LMarker>
  <LMarker :lat-lng="[47.61322, -0.519482]" />

  <LMarker :lat-lng="[47, -1]">
    <LIcon class-name="">Hello, Map!</LIcon>
  </LMarker>
  <LMarker :lat-lng="[47, -1]" />
</LMap>

<button @click="changeIcon">New kitten icon</button>

<style>
.leaflet-div-icon {
  background: steelblue;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  font-weight: bold;
  font-size: large;
  text-align: center;
  line-height: 21px;
}
</style>

```vue
<template>
  <LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
    <LTileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      layer-type="base"
      name="OpenStreetMap"
    />

    <LMarker :lat-lng="[47.41322, -1.219482]">
      <LIcon :icon-url="iconUrl" :icon-size="iconSize" />
    </LMarker>
    <LMarker :lat-lng="[47.41323, -1.219482]" />

    <LMarker :lat-lng="[47.61322, -0.519482]">
      <LIcon :icon-size="[21, 21]">★</LIcon>
    </LMarker>
    <LMarker :lat-lng="[47.61322, -0.519482]" />

    <LMarker :lat-lng="[47, -1]">
      <LIcon class-name="">Hello, Map!</LIcon>
    </LMarker>
    <LMarker :lat-lng="[47, -1]" />
  </LMap>

  <button @click="changeIcon">New icon</button>
</template>

<script setup>
import { ref, computed } from 'vue'

const iconWidth = ref(21);
const iconHeight = ref(42);

const iconUrl = computed(() => `https://picsum.photos/${iconWidth.value}/${iconHeight.value}`);
const iconSize = computed(() => [iconWidth.value, iconHeight.value]);

const changeIcon = () => {
  iconWidth.value += 1;
  if (iconWidth.value > iconHeight.value) {
    iconWidth.value = Math.floor(iconHeight.value / 2);
  }
};
</script>

<style>
.leaflet-div-icon {
  background: steelblue;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  font-weight: bold;
  font-size: large;
  text-align: center;
  line-height: 21px;
}
</style>
```

## Props

| Prop name       | Description                                                                                                                                                                                                                                               | Type                                                                             | Required | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------- | ------- |
| iconUrl         | The URL to the icon image (absolute or relative to your script path)                                                                                                                                                                                      | String                                                                           | true     | null    |
| iconRetinaUrl   | The URL to a retina sized version of the icon image (absolute or relative to your script path). Used for Retina screen devices.                                                                                                                           | String                                                                           | -        | null    |
| iconSize        | Size of the icon image in pixels                                                                                                                                                                                                                          | Object\|Array as [L.PointExpression](https://leafletjs.com/reference.html#point) | -        | null    |
| iconAnchor      | The coordinates of the "tip" of the icon (relative to its top left corner). The icon will be aligned so that this point is at the marker's geographical location. Centered by default if size is specified, also can be set in CSS with negative margins. | Object\|Array as [L.PointExpression](https://leafletjs.com/reference.html#point) | -        | null    |
| popupAnchor     | The coordinates of the point from which popups will "open", relative to the icon anchor                                                                                                                                                                   | Object\|Array as [L.PointExpression](https://leafletjs.com/reference.html#point) | -        | [0, 0]  |
| tooltipAnchor   | The coordinates of the point from which tooltips will "open", relative to the icon anchor                                                                                                                                                                 | Object\|Array as [L.PointExpression](https://leafletjs.com/reference.html#point) | -        | [0, 0]  |
| shadowUrl       | The URL to the icon shadow image. If not specified, no shadow image will be created                                                                                                                                                                       | String                                                                           | -        | null    |
| shadowRetinaUrl |                                                                                                                                                                                                                                                           | String                                                                           | -        | null    |
| shadowSize      | Size of the shadow image in pixels                                                                                                                                                                                                                        | Object\|Array as [L.PointExpression](https://leafletjs.com/reference.html#point) | -        | null    |
| shadowAnchor    | The coordinates of the "tip" of the shadow (relative to its top left corner) (the same as iconAnchor if not specified)                                                                                                                                    | Object\|Array as [L.PointExpression](https://leafletjs.com/reference.html#point) | -        | null    |
| bgPos           |                                                                                                                                                                                                                                                           | Object\|Array as [L.PointExpression](https://leafletjs.com/reference.html#point) | -        | [0, 0]  |
| className       | A custom class name to assign to both icon and shadow images. Empty by default.                                                                                                                                                                           | String                                                                           | -        | ''      |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
