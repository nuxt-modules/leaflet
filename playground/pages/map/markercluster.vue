<template>
    <LMap :zoom="4" :center="[47.41322, -1.219482]" @ready="populate">
        <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
        />
        <LMarkerClusterGroup>
            <LMarker
                v-for="(point, index) in markers"
                :key="index"
                :lat-lng="[point.lat, point.lng]"
            />
        </LMarkerClusterGroup>
    </LMap>
</template>

<script setup lang="ts">
import { LatLng, Map } from 'leaflet'
import { ref } from 'vue'

const markers = ref<LatLng[]>([])

function getRandomLatLng(map: Map) {
    const bounds = map.getBounds()
    const latSpan = bounds.getNorth() - bounds.getSouth()
    const lngSpan = bounds.getEast() - bounds.getWest()
    return new LatLng(
        bounds.getSouth() + latSpan * Math.random(),
        bounds.getWest() + lngSpan * Math.random()
    )
}

function populate(map: Map) {
    markers.value = Array.from({ length: 100 }, () => getRandomLatLng(map))
}
</script>
