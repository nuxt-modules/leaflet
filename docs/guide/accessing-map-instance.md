# Accessing a map instance

The guide explains how to access a Leaflet map instance from a Vue component, as featured in the [original vue-leaflet library](https://github.com/vue-leaflet/vue-leaflet/blob/master/docs/faq/index.md#how-can-i-access-the-leaflet-map-object).

- First add a ref to the `LMap` component.

```vue{4,23}
<template>
  <div style="height:100vh; width:100vw">
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

<script setup>
import { ref } from 'vue'

const map = ref(null)
</script>
```

- Create a `mapInitialized` method that will be called when the map is ready.

You can now access the Leaflet map instance using `map.value.leafletObject`.

```vue{8,26-29}
<template>
  <div style="height:100vh; width:100vw">
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

<script setup>
import { ref } from 'vue'

const map = ref(null)

// When the map is ready
const mapInitialized = () => {
    // Access the Leaflet map instance
    console.log(map.value.leafletObject)
}
</script>
```

::: tip
This method should work on any Leaflet component, not just `LMap`. You can access the leaflet instance of any component by adding a ref to it and calling `ref.value.leafletObject`.
:::