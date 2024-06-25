<template>
  <div style="height:100vh; width:100vw">
    <h1>GeoJson Example</h1>
    <LMap
      :zoom="6"
      :max-zoom="18"
      :center="[47.21322, -1.559482]"
      :use-global-leaflet="false"
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