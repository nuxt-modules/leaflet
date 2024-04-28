# Accessing the L global variable

You might want to access the Leaflet global variable in your Vue component. This can be useful if you want to use a Leaflet plugin that is not available as a Vue component.

The L variable is auto-imported by the module, so you can access it directly in your Vue component as shown below.


```vue{21-23}
<template>
  <div style="height:100vh; width:100vw">
    <LMap
      :zoom="6"
      :max-zoom="18"
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
import { onMounted } from 'vue'

onMounted(() => {
  console.log(L)
})
</script>
```
