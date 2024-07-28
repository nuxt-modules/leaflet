<template>
  <div id="app">
    <UVerticalNavigation :links="links" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Map',
  icon: 'i-heroicons-map-solid',
  to: '/map/map'
}, {
  label: 'GeoJson',
  icon: 'i-heroicons-map-solid',
  to: '/map/geojson'
}, {
  label: 'MarkerCluster',
  icon: 'i-heroicons-rectangle-group-16-solid',
  to: '/map/markercluster'
}, {
  label: 'Heat',
  icon: 'i-heroicons-fire-20-solid',
  to: '/map/heat'
}, {
  label: 'Draw (Deprecated)',
  icon: 'i-heroicons-pencil-16-solid',
  to: '/map/draw'
}]
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #020420;
  color: #fff;
  font-family: 'Arial', sans-serif;
}

a {
  color: #00DC82;
}

#app {
  display: flex;
  flex-direction: row;
  height: 100svh;
}
</style>
