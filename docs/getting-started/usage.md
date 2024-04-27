---
outline: deep
---

# Usage

Nuxt Leaflet is a module that provides a set of components (from [Vue Leaflet](https://github.com/vue-leaflet/vue-leaflet)) to work with Leaflet in Nuxt 3.

Here is a basic example of how to use the `LMap` and `LTileLayer` components to display a map :

```vue
<template>
  <div style="height:100vh; width:100vw">
    <LMap
      ref="map"
      :zoom="6"
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
```
