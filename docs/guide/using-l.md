# Accessing the L global variable

You might want to access the Leaflet global variable in your Vue component. This can be useful if you want to use a Leaflet plugin that is not available as a Vue component.

You can still import the `L` global variable from the `leaflet` package and use it in your Vue component. Here is an example :

::: warning
This is only possible in a client-side environment. You should either :
- Use a [Client-Only Page](https://nuxt.com/docs/guide/directory-structure/pages#client-only-pages).
- Wrap your component inside the [ClientOnly](https://nuxt.com/docs/api/components/client-only) component.
- Set your [rendering strategy](https://nuxt.com/docs/guide/concepts/rendering#client-side-rendering) to `ssr: false` for the appropriate route.
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
