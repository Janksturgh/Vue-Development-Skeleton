<template>
  <main class="container pt-6 pb-6 content">
    <router-view :books="$attrs.books">
      <slot-scope></slot-scope>
    </router-view>
  </main>
</template>

<script>
	export default {
		name: "Main",
    data(){
      return {
      books: null,
      }
    }
	}
</script>

<style scoped>

</style>
