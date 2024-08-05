<template>
  <div style="height:100vh; width:100vw">
    <h1>Basic Map Exemple</h1>
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
  console.log('Map is ready')
  console.log(map.value.maxZoom)
}
</script>
