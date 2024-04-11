# Nuxt Leaflet

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt 3 module to use Leaflet.
It was made using [Vue Leaflet](https://github.com/vue-leaflet/vue-leaflet) which is a Vue 3 wrapper for Leaflet, that exposes [the original Leaflet API](https://github.com/Leaflet) as Vue components.

This module is really just about making it work with Nuxt 3 without the need to configure anything.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt3-leaflet?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- ⚡ &nbsp;No configuration needed
- 🦺 &nbsp;Typescript support
- 🚠 &nbsp;Auto import

## Quick Setup

Run `npx` command to add `nuxt3-leaflet` into your `package.json` and `nuxt.config.ts`

```bash
npx nuxi@latest module add nuxt3-leaflet
```

That's it! You can now use Leaflet 🍃 in your Nuxt app ✨

## Usage

For a complete list of the components available, check out the original [Vue Leaflet](https://github.com/vue-leaflet/vue-leaflet) library.

Please note that components are exported in PascalCase, so for example, write `<LMap>` instead of `<l-map>`.

### Basic

```vue
<template>
  <div style="height:100svh; width:100svw">
    <LMap
      ref="map"
      :zoom="zoom"
      :center="center"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
      />
      <!-- Example with a marker in the center of the map -->
      <LMarker
          v-if="hasMarker"
          :lat-lng="position.latLng"
        >
          <!-- Example with a custom icon set in public folder  -->
          <LIcon
            :icon-size="[32, 37]"
            :icon-anchor="[16, 37]"
            icon-url="/marker.png"
          />
        </LMarker>
    </LMap>
  </div>
</template>

<script setup lang="ts">
// Use leaflet library types
import type { PointExpression, LatLngExpression } from "leaflet"

const zoom = ref(6)

// You could re-use your map component passing props!
defineProps<{
  hasMarker: boolean
}>()

onMounted(() = {
  // and ... you could create animation on load
  zoom.value = 12
})

const position = () => {
  const position = [47.21322, -1.559482]

  // Example matching position to LMap's center and LMarker's lat-lng types
  return {
    latLng: position as LatLngExpression,
    center: position as PointExpression,
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt3-leaflet/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt3-leaflet

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt3-leaflet.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt3-leaflet

[license-src]: https://img.shields.io/npm/l/nuxt3-leaflet.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt3-leaflet

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
