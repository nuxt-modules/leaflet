<template>
    <LMap :zoom="14" :center="[50.512, 6.997]">
        <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
        />
        <LHeatLayer
            :lat-lngs="normalizedCoords as any"
            :minOpacity="minOpacity"
            :maxZoom="maxZoom"
            :radius="radius"
            :blur="blur"
            :max="max"
            :gradient="gradient"
        />
    </LMap>
    <aside>
        <label>
            <span>Min Opacity - </span>
            0 <input v-model.number="minOpacity" type="range" min="0" max="1" step="0.01" /> 1
        </label>
        <br />
        <label>
            <span>Max Zoom - </span>
            3 <input v-model.number="maxZoom" type="range" min="3" max="20" /> 20
        </label>
        <label>
            <span>Radius -</span>
            1 <input v-model.number="radius" type="range" min="1" max="25" /> 25
        </label>
        <br />
        <label>
            <span>Blur - </span>
            1 <input v-model.number="blur" type="range" min="1" max="40" step="1" /> 40
        </label>
        <br />
        <label>
            <span>Max - </span>
            0 <input v-model.number="max" type="range" min="0.05" max="4" step=".05" /> 4
        </label>
        <br />
        <label>
            <span>Gradient color 1</span>
            <input v-model="colors.color1" type="color" />
        </label>
        <label>
            <span>Gradient color 2</span>
            <input v-model="colors.color2" type="color" />
        </label>
        <label>
            <span>Gradient color 3</span>
            <input v-model="colors.color3" type="color" />
        </label>
    </aside>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { LMap, LTileLayer } from '@maxel01/vue-leaflet'
import { LHeatLayer } from '@maxel01/vue-leaflet-plugins'
import { coords, altitudes } from '#imports'

const minOpacity = ref(0.05)
const maxZoom = ref(16)
const radius = ref(10)
const blur = ref(15)
const max = ref(1)

const colors = reactive({
    color1: '#008800',
    color2: '#ffff00',
    color3: '#ff0000'
})
const gradient = computed(() => ({
    0.0: colors.color1,
    0.5: colors.color2,
    1.0: colors.color3
}))
const normalizedCoords: ComputedRef<number[][]> = computed(() =>
    coords.map((value) => [
        value[0],
        value[1],
        value[2]! / Math.max(...altitudes)
    ])
)
</script>

<style>
aside {
    max-width: 600px;
    text-align: center;
    margin: auto;
}

label {
    display: inline-block;
    padding: 0.5em;
}

input {
    vertical-align: text-bottom;
}

input[type='color'] {
    margin-left: 0.5em;
}
</style>
