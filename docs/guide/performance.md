---
outline: deep
---

# Performance

By default, the module adds Leaflet's stylesheet to `nuxt.options.css`:

```ts
nuxt.options.css.push('leaflet/dist/leaflet.css')
```

This is the most convenient behaviour: the map is styled correctly everywhere, without
any extra work. But global CSS ends up in the entry stylesheet, which is render-blocking
on **every** route. In an application where maps only appear on one or two pages, all
the other pages still download and parse Leaflet's CSS before they can paint.

## The `injectCss` option

Set `injectCss` to `false` to opt out of the global injection:

```ts{3-5}
export default defineNuxtConfig({
  modules: ['@nuxtjs/leaflet'],
  leaflet: {
    injectCss: false
  }
})
```

::: warning
When `injectCss` is `false`, the module no longer ships any stylesheet for you. You are
responsible for importing Leaflet's CSS wherever a map is rendered — otherwise the map
tiles, controls and popups will be laid out incorrectly.
:::

Import the stylesheet in the components that actually render a map:

```vue{12}
<template>
  <div style="height:100vh; width:100vw">
    <LMap :zoom="6" :center="[47.21322, -1.559482]">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
      />
    </LMap>
  </div>
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
</script>
```

Vite then bundles the stylesheet into the chunk of the route (or component) that imports
it, so it is only fetched by visitors who actually open a page with a map. Routes without
a map paint without waiting for Leaflet's CSS.

If several components need it, you can also import it once in a shared component or in a
layout that is only used by the map pages.

## Plugin stylesheets

The option also applies to the stylesheets of the [Leaflet.markercluster](/guide/marker-cluster)
plugin. With `injectCss: false` and `markerCluster: true`, import them alongside Leaflet's
own stylesheet:

```ts
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
```

## Options

| Option      | Type      | Default | Description                                                                                     |
| ----------- | --------- | ------- | ----------------------------------------------------------------------------------------------- |
| `injectCss` | `boolean` | `true`  | Add Leaflet's (and the enabled plugins') stylesheets to the global `css` array of your Nuxt app. |
