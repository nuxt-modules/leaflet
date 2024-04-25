---
outline: deep
---

# LMap

> Base component, contains and wraps all the other components.

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
</script>

<LMap style="height: 350px" :zoom="6" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
</LMap>

## Props

| Prop name              | Description                                          | Type          | Values         | Default            |
| ---------------------- | ---------------------------------------------------- | ------------- | -------------- | ------------------ |
| options                | Leaflet options to pass to the component constructor | object        | -              | {}                 |
| center                 | The center of the map, supports .sync modifier       | object\|array | -              | () => [0, 0]       |
| bounds                 | The bounds of the map, supports .sync modifier       | array\|object | -              | null               |
| maxBounds              | The max bounds of the map                            | array\|object | -              | null               |
| zoom                   | The zoom of the map, supports .sync modifier         | number        | -              | 0                  |
| minZoom                | The minZoom of the map                               | number        | -              | null               |
| maxZoom                | The maxZoom of the map                               | number        | -              | null               |
| paddingBottomRight     | The paddingBottomRight of the map                    | array         | -              | null               |
| paddingTopLeft         | The paddingTopLeft of the map                        | array         | -              | null               |
| padding                | The padding of the map                               | array         | -              | null               |
| worldCopyJump          | The worldCopyJump option for the map                 | boolean       | -              | false              |
| crs                    | The crs option for the map                           | object        | `CRS.EPSG3857` | () => CRS.EPSG3857 |
| maxBoundsViscosity     |                                                      | number        | -              | null               |
| inertia                |                                                      | boolean       | -              | null               |
| inertiaDeceleration    |                                                      | number        | -              | null               |
| inertiaMaxSpeed        |                                                      | number        | -              | null               |
| easeLinearity          |                                                      | number        | -              | null               |
| zoomAnimation          |                                                      | boolean       | -              | null               |
| zoomAnimationThreshold |                                                      | number        | -              | null               |
| fadeAnimation          |                                                      | boolean       | -              | null               |
| markerZoomAnimation    |                                                      | boolean       | -              | null               |
| noBlockingAnimations   |                                                      | boolean       | -              | false              |

## Events

| Event name    | Type          | Description                          |
| ------------- | ------------- | ------------------------------------ |
| leaflet:load  |               | DEPRECATED event                     |
| ready         | object        | Triggers when the component is ready |
| update:zoom   | number,string | Triggers when zoom is updated        |
| update:center | object,array  | Triggers when center is updated      |
| update:bounds | object        | Triggers when bounds are updated     |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
