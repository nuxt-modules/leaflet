<template>
  <div style="height:100vh; width:100vw">
    <h1>Heat</h1>
    <LMap
      ref="map"
      :zoom="17"
      :max-zoom="22"
      :center="[47.21322, -1.559482]"
      :use-global-leaflet="true"
      @ready="onMapReady"
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
import L from 'leaflet'
import { ref } from 'vue'

const isDrawing = ref(false)
const map = ref(null) as any

// Create heat data
const heatPoints = [{
  lat: 47.21322,
  lng: -1.559482,
  intensity: 100.0,
}, {
  lat: 47.21322,
  lng: -1.558482,
  intensity: 50.0,
}, {
  lat: 47.21322,
  lng: -1.557482,
  intensity: 25.0,
}, {
  lat: 47.21322,
  lng: -1.556482,
  intensity: 10.0,
}]

// When the map is ready
const onMapReady = async () => {
  const heat = await useLHeat({
    leafletObject: map.value.leafletObject,
    heatPoints: heatPoints,
  })

  // (optional) Make the heat layer drawable
  map.value.leafletObject.on({
    movestart: function () { isDrawing.value = false },
    moveend: function () { isDrawing.value = true },
    mousemove: function (e: any) {
      if (isDrawing.value) {
        heat.addLatLng(e.latlng)
      }
    },
  })
}
</script>
