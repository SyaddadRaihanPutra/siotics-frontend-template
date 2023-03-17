<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"
</script>

<template>
  <Navbar v-if="!$route.meta.hideNavbar" />
  <RouterView />
</template>

<script>
export default {
  components: {
    RouterLink,
    RouterView,
    Navbar
  }
}
</script>