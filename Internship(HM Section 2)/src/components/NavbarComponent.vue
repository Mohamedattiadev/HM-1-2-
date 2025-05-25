<template>
  <v-app-bar color="primary" density="comfortable" flat app>
    <v-container class="d-flex align-center">
      <router-link to="/" class="text-decoration-none">
        <v-toolbar-title class="text-white mr-6"> My Store</v-toolbar-title>
      </router-link>

      <v-btn to="/" variant="text" class="text-white mr-6"> Home </v-btn>

      <v-btn to="/cart" variant="text" class="text-white mr-6"> Cart </v-btn>
    </v-container>
  </v-app-bar>
</template>
