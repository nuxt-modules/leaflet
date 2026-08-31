<template>
  <div style="height:100vh; width:100vw">
    <h1>Map without the global CSS injection</h1>
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
    </LMap>
  </div>
</template>

<script setup lang="ts">
// The stylesheet is imported by the component itself, so it is only bundled
// in the chunks that actually need it.
import 'leaflet/dist/leaflet.css'
</script>
