<template>
  <main class="container pt-6 pb-6 content">
    <router-view name="/Home" :books="$attrs.books">
      <slot-scope></slot-scope>
    </router-view>
  </main>
</template>

<script>
	export default {
		name: "Main"
	}
</script>

<style scoped>

</style>
