<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"

</script>

<template>
  <Navbar v-if="!$route.meta.hideNavbar" />
  <RouterView />
  <Footer v-if="!$route.meta.hideFooter" />
</template>

<script>
export default {
  components: {
    RouterLink,
    RouterView,
    Navbar,
    Footer
  }
}
</script>