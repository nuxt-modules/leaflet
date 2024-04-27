---
outline: deep
---

# Installation

## Basic (Recommended)

```bash
npx nuxi@latest module add nuxt3-leaflet
```

## Manual

- Add `nuxt3-leaflet` dependency to your project

```bash
npm install nuxt3-leaflet
```

- Add `nuxt3-leaflet` to the `modules` section of `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt3-leaflet'
  ]
})
```
