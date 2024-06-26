---
outline: deep
---

# Installation

## Basic (Recommended)

```bash
npx nuxi@latest module add @nuxtjs/leaflet
```

## Manual

- Add `@nuxtjs/leaflet` dependency to your project

```bash
npm install @nuxtjs/leaflet
```

- Add `@nuxtjs/leaflet` to the `modules` section of `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/leaflet'
  ]
})
```
