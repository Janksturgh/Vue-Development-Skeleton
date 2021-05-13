<template>
  <div id="navbarBasicExample" class="navbar-menu is-flex-grow-0">
    <div class="navbar-start">
      <router-link
              to="/"
              class="navbar-item">
        Home
      </router-link>
    </div>
  </div>
</template>

<script>
	export default {
		name: "Menu"
	}
</script>

<style scoped lang="scss">
  .navbar-item {
    color: #FFFFFF;

    &:hover {
      color: #2f2f2f;

      .navbar-ltnk {
        color: #2f2f2f;

        &::after {
          border-color: #2f2f2f;
        }
      }
    }
  }

  .navbar-link {
    color: #FFFFFF;

    &::after {
      border-color: #FFFFFF;
    }

    &:hover {
      color: #2f2f2f;

      &::after {
        border-color: #2f2f2f;
      }
    }
  }

  .navbar-dropdown {
    .navbar-item {
      color: #000000;
    }
  }
</style>
