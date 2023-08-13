<template>
  <div style="height:100vh; width:100vw">
    <h1>Hello Map</h1>
    <ul>
      <li>Element 1</li>
      <li>Element 2</li>
      <li>Element 3</li>
      <li>Element 4</li>
    </ul>
    <p>This is a paragraph</p>
    <LMap
      ref="map"
      :zoom="zoom"
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

<script setup>
import { ref } from 'vue'
const zoom = ref(6)
</script>