---
outline: deep
---

# LTileLayer

> Load tiles from a map server and display them accordingly to map zoom, center and size

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
</script>

<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />

  <LTileLayer
    url="https://s3.amazonaws.com/te512.safecast.org/{z}/{x}/{y}.png"
    attribution="<a href='https://blog.safecast.org/about/'>SafeCast</a> (<a href='https://creativecommons.org/licenses/by-sa/3.0/'>CC-BY-SA</a>"
    :min-zoom="5"
    :max-zoom="12"
  />
</LMap>

```vue{2-8,10-16}
<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <!-- Base Layer -->
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />

  <!-- Overlay Layer -->
  <LTileLayer
    url="https://s3.amazonaws.com/te512.safecast.org/{z}/{x}/{y}.png"
    attribution="<a href='https://blog.safecast.org/about/'>SafeCast</a> (<a href='https://creativecommons.org/licenses/by-sa/3.0/'>CC-BY-SA</a>"
    :min-zoom="5"
    :max-zoom="12"
  />
</LMap>
```

## Props

| Prop name      | Description                                          | Type                  | Values | Default    |
| -------------- | ---------------------------------------------------- | --------------------- | ------ | ---------- |
| pane           |                                                      | string                | -      | 'tilePane' |
| attribution    |                                                      | string                | -      | null       |
| name           |                                                      | string                | -      | undefined  |
| layerType      |                                                      | string                | -      | undefined  |
| visible        |                                                      | boolean               | -      | true       |
| opacity        |                                                      | number                | -      | 1.0        |
| zIndex         |                                                      | number                | -      | 1          |
| tileSize       |                                                      | number\|object\|array | -      | 256        |
| noWrap         |                                                      | boolean               | -      | false      |
| tms            |                                                      | boolean               | -      | false      |
| subdomains     |                                                      | string\|array         | -      | 'abc'      |
| detectRetina   |                                                      | boolean               | -      | false      |
| options        | Leaflet options to pass to the component constructor | object                | -      | {}         |
| url            |                                                      | string                | -      | null       |
| tileLayerClass |                                                      | func                  | -      | tileLayer  |

## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |