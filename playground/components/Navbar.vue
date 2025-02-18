<script setup lang="ts">
const items = ref([
  {
    label: 'Examples',
    icon: 'i-lucide-book-open',
    to: '/',
    children: [{
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
      label: 'Context Menu',
      icon: 'i-heroicons-map-solid',
      to: '/map/contextmenu'
    }]
  },
  {
    label: 'Deprecated Examples',
    icon: 'i-lucide-book-open',
    children: [
      {
        label: 'Draw (Deprecated)',
        icon: 'i-heroicons-pencil-16-solid',
        to: '/map/draw'
      }
    ]
  },
])
</script>

<template>
  <UNavigationMenu :items="items" class="w-full justify-center fixed top-0 left-0 z-1000" />
</template>
