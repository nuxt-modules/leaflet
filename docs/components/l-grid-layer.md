---
outline: deep
---

# LGridLayer

> Creates a map layer where each tile is an instantiated Vue component.
> Each tile component is given `coords` props by `LGridLayer` to indicate
> the zoom level and position of the tile
> (see https://leafletjs.com/examples/extending/extending-2-layers.html#lgridlayer-and-dom-elements).

::: warning

  From [Vue Leaflet](https://github.com/vue-leaflet/vue-leaflet/blob/master/src/playground/views/GridLayerDemo.vue) :

  TODO NEXT: While sorting out type errors in LGridLayer.vue, I realized I'm not sure
    how or even if its infrastructure is particularly used well. In Vue2Leaflet,
    you could pass an arbitrary Vue component to the LGridLayer, to be rendered
    for each tile with its coords passed as props. But that doesn't seem set up here.
    Should we replicate V2L exactly here? Set things up so that the LGridLayer's $slot
    can be where/how the component is setup/configured/passed/added? Simply stick with
    the `childRender` prop and simplify some of the logic in LGridLayer.vue?
:::

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LGridLayer } from '@vue-leaflet/vue-leaflet';
import { h } from 'vue'

const childRender = (props) => () => {
  return h(
    "div",
    { style: "border: 1px solid grey; height: 100%;" },
    `x: ${props.coords.x} y: ${props.coords.y} z: ${props.coords.z}`
  );
}
</script>

<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LGridLayer
    :child-render="childRender"
  />
</LMap>

```vue{8-10,13-28}
<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LGridLayer
    :child-render="childRender"
  />
</LMap>

<script setup>
import { h } from 'vue'

const childRender = (props) => () => {
  return h(
    "div",
    { style: "border: 1px solid grey; height: 100%;" },
    `x: ${props.coords.x} y: ${props.coords.y} z: ${props.coords.z}`
  );
}
</script>
```

## Props

| Prop name   | Description                                                                                                                                                                                                                      | Type            | Required | Default   |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------- | --------- |
| opacity     | Opacity of the tiles                                                                                                                                                                                                             | Number          | -        | 1.0       |
| zIndex      | The explicit zIndex of the tile layer                                                                                                                                                                                            | Number          | -        | 1         |
| tileSize    | Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.                                                                                                        | Number\|L.Point | -        | 256       |
| noWrap      | Whether the layer is wrapped around the antimeridian. If true, the GridLayer will only be displayed once at low zoom levels. Has no effect when the [map CRS](https://leafletjs.com/reference.html#map-crs) doesn't wrap around. | Boolean         | -        | false     |
| childRender |                                                                                                                                                                                                                                  | Function        | true     | *         |
| minZoom     | The minimum zoom level down to which this layer will be displayed (inclusive)                                                                                                                                                    | Number          | -        | undefined |
| maxZoom     | The maximum zoom level up to which this layer will be displayed (inclusive)                                                                                                                                                      | Number          | -        | undefined |
| className   | A custom class name to assign to the tile layer. Empty by default.                                                                                                                                                               | String          | -        | ''        |

### Inherited props

<!--@include: ./props/layer-props.md-->

## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |
