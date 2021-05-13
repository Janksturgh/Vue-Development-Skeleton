<template>
  <header class="pt-5 pb-5">
    <nav class="navbar container is-justify-content-space-between" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/">
          <h1 class="is-size-2 has-text-centered has-text-weight-bold">VueJS Development Skeleton</h1>
        </router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <Menu />
    </nav>
  </header>
</template>

<script>
	import Menu from './Menu.vue';
	export default {
		name: "Header",
		components: {
			Menu,
		},
	}
</script>

<style scoped lang="scss">
  header {
    background-color: #2f2f2f;
  }

  nav {
    background-color: unset;

    h1 {
      color: #FFFFFF;
    }

  }
</style>
