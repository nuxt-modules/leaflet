---
outline: deep
---

# LGeoJson

> Represents a GeoJSON object or an array of GeoJSON objects.

## Demo

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LGeoJson } from '@vue-leaflet/vue-leaflet';
import { ref, onMounted } from 'vue'

const geojson = ref(undefined)
const geoStyler = (feature) => ({
  opacity: feature.properties.code / 100000,
})

onMounted(async () => {
  const response = await fetch(
    "https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson"
  );
  geojson.value = await response.json();
});
</script>

<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LGeoJson
    :geojson="geojson"
    :options-style="geoStyler"
  />
</LMap>

```vue{8-11,14-28}
<LMap style="height: 350px" :zoom="8" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LGeoJson
    :geojson="geojson"
    :options-style="geoStyler"
  />
</LMap>

<script setup>
import { ref, onMounted } from 'vue'

const geojson = ref(undefined)
const geoStyler = (feature) => ({
  opacity: feature.properties.code / 100000,
})

onMounted(async () => {
  const response = await fetch(
    "https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson"
  );
  geojson.value = await response.json();
});
</script>
```


## Props

| Prop name    | Description                                                                                                                                                      | Type                           | Required        | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | --------------- | ------- |
| geojson      | Should be an object in GeoJSON format (or an array of GeoJSON objects) that will be displayed on the map                                                         | Object\|Array as GeoJsonObject | GeoJsonObject[] | -       | () => ({})
| optionsStyle | A Function defining the styling for GeoJSON lines and polygons. See more in [original Leaflet documentation](https://leafletjs.com/reference.html#geojson-style) | Function as L.StyleFunction    | -               | *       |

### Inherited props

<!--@include: ./props/layer-group-props.md-->

## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |
