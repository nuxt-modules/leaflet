---
outline: deep
---

# LWmsTileLayer

> Display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map.

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LWmsTileLayer } from '@vue-leaflet/vue-leaflet';
</script>

<LMap style="height: 350px" :zoom="2" :center="[47.21322, -1.559482]">
  <LWmsTileLayer
    url="https://maps.heigit.org/osm-wms/service"
    attribution="HeiGIT <a href='https://osm-wms.de'>OSM WMS</a>"
    layer-type="base"
    name="osm-wms.de"
    :max-zoom="10"
    version="1.3.0"
    format="image/png"
    :transparent="true"
    layers="osm_auto:all"
  />
</LMap>

```vue
<LMap style="height: 350px" :zoom="2" :center="[47.21322, -1.559482]">
  <LWmsTileLayer
    url="https://maps.heigit.org/osm-wms/service"
    attribution="HeiGIT <a href='https://osm-wms.de'>OSM WMS</a>"
    layer-type="base"
    name="osm-wms.de"
    :max-zoom="10"
    version="1.3.0"
    format="image/png"
    :transparent="true"
    layers="osm_auto:all"
  />
</LMap>
```

## Props

| Prop name   | Description                                                                                                                           | Type                                                      | Required | Default      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | -------- | ------------ |
| layers      | Comma-separated list of WMS layers to show                                                                                            | String                                                    | true     | ''           |
| styles      | Comme-separated list of WMS styles                                                                                                    | String                                                    | -        | ''           |
| format      | WMS image format (use `image/png` for layers with transparency)                                                                       | String                                                    | -        | 'image/jpeg' |
| transparent | If `true`, the WMS service will return images with transparency                                                                       | boolean                                                   | -        | false        |
| version     | Version of the WMS service to use                                                                                                     | String                                                    | -        | '1.1.1'      |
| crs         | Coordinate Reference System to use for the WMS requests, defaults to the map CRS. Don't change this if you're not sure what it means. | Object as [CRS](https://leafletjs.com/reference.html#crs) | -        | null         |
| uppercase   | If `true`, WMS request parameter keys will be uppercase.                                                                              | Boolean                                                   | -        | false        |

### Inherited props 

::: details from [LTileLayer](/components/l-tile-layer)

<!--@include: ./props/tile-layer-props.md-->
:::

::: details from [LGridLayer](/components/l-grid-layer)

<!--@include: ./props/grid-layer-props.md-->
:::

<!--@include: ./props/layer-props.md-->

## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |
