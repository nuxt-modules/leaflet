<template>
  <div style="height:100vh; width:100vw">
    <!-- Load Leaflet Draw CSS from cdn -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"
    >
    <LMap
      ref="map"
      :zoom="6"
      :max-zoom="18"
      :center="[47.21322, -1.559482]"
      @ready="mapInitialized"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
      />
    </LMap>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const map = ref(null)

// When the map is ready
const mapInitialized = () => {
  // Load the Leaflet Draw script
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js';
  script.async = true;
  // When it is loaded
  script.onload = () => {
    // Init the draw control
    // See https://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html#l-draw-feature
    const drawnItems = new L.FeatureGroup();
    map.value.leafletObject.addLayer(drawnItems);
    const drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems
        }
    });
    map.value.leafletObject.addControl(drawControl);
  };
  // Append the script element to the DOM
  document.head.appendChild(script);
}
</script>
