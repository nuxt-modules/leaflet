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

```vue
<LMap style="height: 350px" :zoom="6" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
</LMap>
```

## Props

| Prop name              | Description                                                                                                                                                                                                                                                                                                                                           | Type                                                                             | Required | Default      |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------- | ------------ |
| center                 | The center of the map, supports .sync modifier                                                                                                                                                                                                                                                                                                        | Object\|Array as [L.PointExpression](https://leafletjs.com/reference.html#point) | -        | [0, 0]       |
| bounds                 | The bounds of the map, supports .sync modifier                                                                                                                                                                                                                                                                                                        | Array\|Object                                                                    | -        | null         |
| maxBounds              | The max bounds of the map                                                                                                                                                                                                                                                                                                                             | Array\|Object                                                                    | -        | null         |
| zoom                   | The zoom of the map, supports .sync modifier                                                                                                                                                                                                                                                                                                          | Number                                                                           | -        | 0            |
| minZoom                | The minZoom of the map                                                                                                                                                                                                                                                                                                                                | number                                                                           | -        | null         |
| maxZoom                | The maxZoom of the map                                                                                                                                                                                                                                                                                                                                | Number                                                                           | -        | null         |
| paddingBottomRight     | The paddingBottomRight of the map                                                                                                                                                                                                                                                                                                                     | Array\|Object as [L.PointExpression](https://leafletjs.com/reference.html#point) | -        | null         |
| paddingTopLeft         | The paddingTopLeft of the map                                                                                                                                                                                                                                                                                                                         | Object as [L.PointExpression](https://leafletjs.com/reference.html#point)        | -        | null         |
| padding                | The padding of the map                                                                                                                                                                                                                                                                                                                                | Object as [L.PointExpression](https://leafletjs.com/reference.html#point)        | -        | null         |
| worldCopyJump          | With this option enabled, the map tracks when you pan to another "copy" of the world and seamlessly jumps to the original one so that all overlays like markers and vector layers are still visible.                                                                                                                                                  | Boolean                                                                          | -        | false        |
| crs                    | The crs option for the map                                                                                                                                                                                                                                                                                                                            | Object (See [CRS](https://leafletjs.com/reference.html#map-crs))                 | -        | CRS.EPSG3857 |
| maxBoundsViscosity     | If `maxBounds` is set, this option will control how solid the bounds are when dragging the map around. The default value of `0.0` allows the user to drag outside the bounds at normal speed, higher values will slow down map dragging outside bounds, and `1.0` makes the bounds fully solid, preventing the user from dragging outside the bounds. | Number                                                                           | -        | 0.0          |
| inertia                | If enabled, panning of the map will have an inertia effect where the map builds momentum while dragging and continues moving in the same direction for some time. Feels especially nice on touch devices. Enabled by default.                                                                                                                         | Boolean                                                                          | -        | true         |
| inertiaDeceleration    | The rate with which the inertial movement slows down, in pixels/second².                                                                                                                                                                                                                                                                              | Number                                                                           | -        | 3000         |
| inertiaMaxSpeed        | Max speed of the inertial movement, in pixels/second.                                                                                                                                                                                                                                                                                                 | Number                                                                           | -        | Infinity     |
| easeLinearity          |                                                                                                                                                                                                                                                                                                                                                       | Number                                                                           | -        | 0.2          |
| zoomAnimation          | Whether the map zoom animation is enabled. By default it's enabled in all browsers that support CSS3 Transitions except Android.                                                                                                                                                                                                                      | Boolean                                                                          | -        | true         |
| zoomAnimationThreshold | Won't animate zoom if the zoom difference exceeds this value.                                                                                                                                                                                                                                                                                         | Number                                                                           | -        | 4            |
| fadeAnimation          | Whether the tile fade animation is enabled. By default it's enabled in all browsers that support CSS3 Transitions except Android.                                                                                                                                                                                                                     | Boolean                                                                          | -        | true         |
| markerZoomAnimation    | Whether markers animate their zoom with the zoom animation, if disabled they will disappear for the length of the animation. By default it's enabled in all browsers that support CSS3 Transitions except Android.                                                                                                                                    | Boolean                                                                          | -        | true         |
| noBlockingAnimations   |                                                                                                                                                                                                                                                                                                                                                       | Boolean                                                                          | -        | false        |
| useGlobalLeaflet       |                                                                                                                                                                                                                                                                                                                                                       | Boolean                                                                          | -        | true         |

### Inherited props

<!--@include: ./props/component-props.md-->

## Events

| Event name    | Type          | Description                          |
| ------------- | ------------- | ------------------------------------ |
| ready         | object        | Triggers when the component is ready |
| update:zoom   | number,string | Triggers when zoom is updated        |
| update:center | object,array  | Triggers when center is updated      |
| update:bounds | object        | Triggers when bounds are updated     |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
