<template>
  <div class="marker-cluster-page">
    <div class="map-toolbar">
      <h1>Marker Cluster</h1>
      <UButton
        color="error"
        icon="i-lucide-trash-2"
        label="Clear cluster"
        :disabled="!markerCluster"
        @click="clearCluster"
      />
    </div>
    <ClientOnly>
      <div class="map-wrapper">
        <LMap
          ref="map"
          style="height: 100%; width: 100%"
          :zoom="6"
          :max-zoom="18"
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
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { MarkerOptions } from 'leaflet';
import { ref } from 'vue';

const map = ref(null) as any;
const markerCluster = ref<Awaited<ReturnType<typeof useLMarkerCluster>>['markerCluster']>();

const clearCluster = () => {
  markerCluster.value?.clearLayers();
};

// Create locations data (20 locations around Nantes)
const locations: Array<{
  name?: string;
  lat: number;
  lng: number;
  options?: MarkerOptions;
  popup?: string;
}> = [
  {
    name: 'Nantes',
    lat: 47.218371,
    lng: -1.553621,
    // Standard Leaflet Marker options
    options: {
      draggable: true,
    } 
  },
  {
    // name is optional (no tooltip will be displayed if not provided)
    /* name: 'Saint-Nazaire', */
    lat: 47.273018, lng: -2.213733
  },
  {
    name: 'La Baule',
    lat: 47.286835,
    lng: -2.393108,
    // A popup can be displayed when clicking on the marker
    // It should be a string formatted as HTML
    popup: 'La Baule'
  },
  { name: 'Pornic', lat: 47.112, lng: -2.102 },
  { name: 'Guérande', lat: 47.328, lng: -2.429 },
  { name: 'Clisson', lat: 47.087, lng: -1.276 },
  { name: 'Ancenis', lat: 47.366, lng: -1.176 },
  { name: 'Châteaubriant', lat: 47.716, lng: -1.376 },
  { name: 'Redon', lat: 47.652, lng: -2.084 },
  { name: 'Pontchâteau', lat: 47.433, lng: -2.117 },
  { name: 'Savenay', lat: 47.327, lng: -1.952 },
  { name: 'Rezé', lat: 47.183, lng: -1.55 },
  { name: 'Vertou', lat: 47.166, lng: -1.466 },
  { name: 'Carquefou', lat: 47.283, lng: -1.5 },
  { name: 'Orvault', lat: 47.283, lng: -1.633 },
  { name: 'Saint-Herblain', lat: 47.216, lng: -1.65 },
  { name: 'Sainte-Luce-sur-Loire', lat: 47.233, lng: -1.483 },
  { name: 'Bouguenais', lat: 47.183, lng: -1.583 },
  { name: 'Saint-Sébastien-sur-Loire', lat: 47.183, lng: -1.483 },
  { name: 'Basse-Goulaine', lat: 47.2, lng: -1.483 }
];

// When the map is ready
const onMapReady = async () => {
  const cluster = await useLMarkerCluster({
    leafletObject: map.value.leafletObject,
    markers: locations,
  });
  markerCluster.value = cluster.markerCluster;
  const { markers } = cluster;
  // Access the markers
  markers[3]?.bindPopup('<h1>Hello Pornic</h1><button type="button" style="background: black; color: white;">Click me</button>');
  const popupDiv = markers[2]?.getPopup()?.getContent() as HTMLElement;
  popupDiv.addEventListener('click', () => {
    console.log("click")
  });
  // Access the markerCluster
  markerCluster.value.on('clusterclick', (event: any) => {
    console.log('Cluster clicked', event);
  });
}
</script>

<style scoped>
.marker-cluster-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
}

.map-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1rem 1rem;
}

.map-toolbar h1 {
  margin: 0;
}

.map-wrapper {
  flex: 1;
  min-height: 0;
}
</style>
