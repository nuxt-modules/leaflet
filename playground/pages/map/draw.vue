<template>
  <div style="height:100vh; width:100vw">
    <h1>Draw API</h1>
    <LMap
      ref="map"
      :zoom="zoom"
      :max-zoom="18"
      :center="[47.21322, -1.559482]"
      @ready="mapInitialized"
      :drawControl="true"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
      />
      <LFeatureGroup />
      <LControlLayers />
    </LMap>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const zoom = ref(6)

const map = ref(null)

// TODO : https://github.com/Gugustinette/Nuxt-Leaflet/issues/13

// When the map is ready
const mapInitialized = () => {
  // FeatureGroup is to store editable layers
  /*
  const drawnItems = new L.FeatureGroup();
  map.value.leafletObject.addLayer(drawnItems);
  const drawControl = new L.Control.Draw({
      edit: {
          featureGroup: drawnItems
      }
  });
  map.value.leafletObject.addControl(drawControl);
  */
}
</script>