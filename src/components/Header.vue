<template>
  <header class="flex">
    <div class="logo">
      Itay's Weather App
    </div>
    <nav class="nav">
      <ul>
        <li v-if='page != "Home"'>
          <router-link to="/">
            <span>
              Home
            </span>
          </router-link>
        </li>
        <li v-if='page != "favorites"'>
          <router-link to="/favorites">
            <span>
              Favorites
            </span>
          </router-link>
        </li>

      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    page: null
  }
}
</script>

<style>
</style>