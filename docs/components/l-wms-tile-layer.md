---
outline: deep
---

# LWmsTileLayer

> Display WMS services as tile layers on the map

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

| Prop name    | Description                                          | Type                  | Values | Default      |
| ------------ | ---------------------------------------------------- | --------------------- | ------ | ------------ |
| pane         |                                                      | string                | -      | 'tilePane'   |
| attribution  |                                                      | string                | -      | null         |
| name         |                                                      | string                | -      | undefined    |
| layerType    |                                                      | string                | -      | undefined    |
| visible      |                                                      | boolean               | -      | true         |
| opacity      |                                                      | number                | -      | 1.0          |
| zIndex       |                                                      | number                | -      | 1            |
| tileSize     |                                                      | number\|object\|array | -      | 256          |
| noWrap       |                                                      | boolean               | -      | false        |
| tms          |                                                      | boolean               | -      | false        |
| subdomains   |                                                      | string\|array         | -      | 'abc'        |
| detectRetina |                                                      | boolean               | -      | false        |
| layers       |                                                      | string                | -      | ''           |
| styles       |                                                      | string                | -      | ''           |
| format       |                                                      | string                | -      | 'image/jpeg' |
| transparent  |                                                      | boolean               | -      |              |
| version      |                                                      | string                | -      | '1.1.1'      |
| crs          |                                                      | object                | -      | null         |
| uppercase    |                                                      | boolean               | -      | false        |
| options      | Leaflet options to pass to the component constructor | object                | -      | {}           |
| baseUrl      |                                                      | string                | -      | null         |

## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |