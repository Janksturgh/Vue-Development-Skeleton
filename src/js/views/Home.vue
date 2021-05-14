<template>
  <div class="page-intro content">
    <h2 class="pb-2">About this project</h2>
    <p>The basic usage for this project came about with the need to have a quick </p>
    <p>codebase that can run VueJS on a node express server.</p>
    <h3>Tech used</h3>
    <ul>
      <li>Bulma.io - CSS Framework</li>
      <li>Express - Node.js Framework</li>
      <li>VueJS - Javascript Framework</li>
      <li>Webpack</li>
      <li>Axios</li>
    </ul>
    <p>Webpack Dev Middlesware & Webpack Hot Middleware is also used to work <br />with the Express server and allow for hot reloading.</p>
    <p>This project also comes installed with the Vue Router for a quick setup of <br />routing and Vue Axios as a lightweight wrapper around Axios.</p>
    <p>See below for how raw data gets rendered out</p>
    <div v-for="books in $attrs.books">
      {{ books }}
    </div>
  </div>
</template>

<script>
	export default {
    name: "Home"
	}
</script>

<style scoped>

</style>
