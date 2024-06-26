---
outline: deep
---

# Usage

Nuxt Leaflet is a module that provides a set of components (from [Vue Leaflet](https://github.com/vue-leaflet/vue-leaflet)) to work with Leaflet in Nuxt 3.

Here is a basic example of how to use the `LMap` and `LTileLayer` components to display a map :

```vue
<template>
  <LMap
    style="height: 350px"
    :zoom="6"
    :center="[47.21322, -1.559482]"
    :use-global-leaflet="false"
  >
    <LTileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      layer-type="base"
      name="OpenStreetMap"
    />
  </LMap>
</template>
```

And here is how it should look :

<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { onMounted } from 'vue';

onMounted(() => {
  import('leaflet')
})
</script>

<LMap style="height: 350px" :zoom="6" :center="[47.21322, -1.559482]">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
</LMap>

::: tip
Note that you can set the `use-global-leaflet` prop to `true` (or remove it) if you're allready importing Leaflet in your app with `import L from 'leaflet'`.
:::
