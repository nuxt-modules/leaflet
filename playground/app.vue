<template>
  <div style="height:100vh; width:100vw">
    <div>
      <h1>Hello Nuxt</h1>
      <ul>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
      </ul>
      <p>
        Theses components should be rendered on the server, so they're received on the client as HTML.
        Only the map below should be rendered on the client.
      </p>
    </div>
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

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
</style>
