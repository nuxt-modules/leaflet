<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/map/map">Map</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/map/geojson">GeoJson</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/map/markercluster">Marker Cluster</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/map/draw">Draw</NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtPage />
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #020420;
  color: #fff;
  font-family: 'Arial', sans-serif;
}

a {
  color: #00DC82;
}
</style>
