<script lang="ts" setup>
import NavbarComponent from "./components/NavbarComponent.vue";
</script>
<template>
  <v-app>
    <!-- Top App Bar -->

    <NavbarComponent />
    <v-main class="bg-grey-lighten-5">
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
