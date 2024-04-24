# GeoJSON example

This is how you can add a GeoJSON layer to your map.

````vue{14-17,25-30,33-38}
<template>
  <div style="height:100vh; width:100vw">
    <LMap
      :zoom="6"
      :max-zoom="18"
      :center="[47.21322, -1.559482]"
    >
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Initialize the geojson ref
const geojson = ref(undefined)
// Define the style for the GeoJSON layer
const geoStyler = (feature) => ({
    opacity: feature.properties.code / 100000,
})

onMounted(async () => {
    // Fetch the GeoJSON data
    const response = await fetch(
        "https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson"
    );
    // Set the geojson ref with the fetched data
    geojson.value = await response.json();
});
</script>
````
