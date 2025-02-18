<template>
  <UApp>
    <Navbar />
    <div id="app">
      <NuxtPage />
    </div>
  </UApp>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #020420;
  color: #fff;
  font-family: 'Arial', sans-serif;
}

#app {
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  height: 100svh;
}
</style>
