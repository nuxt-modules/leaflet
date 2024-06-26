# Accessing the L global variable

You might want to access the Leaflet global variable in your Vue component. This can be useful if you want to use a Leaflet plugin that is not available as a Vue component.

You can still import the `L` global variable from the `leaflet` package and use it in your Vue component. Here is an example of how you can access the `L` global variable in a Vue component.

::: warning
This is only possible in a client-side environment. You should use the `client-only` component to ensure that the code is only executed on the client side or set your map route to `ssr: false`.
:::

```vue{6,18,21-23}
<template>
  <LMap
    style="height: 350px"
    :zoom="6"
    :center="[47.21322, -1.559482]"
    :use-global-leaflet="true"
  >
    <LTileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      layer-type="base"
      name="OpenStreetMap"
    />
  </LMap>
</template>

<script setup lang="ts">
import L from 'leaflet'
import { onMounted } from 'vue'

onMounted(() => {
  console.log(L)
})
</script>
```
