<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { useStore } from "vuex";
interface Product {
  Id: string;
  Title: string;
  Description: string;
  img: string;
  price: number;
}
const store = useStore();
const products = ref<Product[]>([]);
const search = ref("");

onMounted(async () => {
  const res = await axios.get("/products.json");
  products.value = res.data;
});

const filtered = computed(() =>
  products.value.filter((p) =>
    p.Title.toLowerCase().includes(search.value.toLowerCase()),
  ),
);

function addToCart(product: any) {
  store.commit("addToCart", product);
}
</script>

<template>
  <v-container>
    <v-row class="mb-6">
      <v-col cols="12">
        <h1 class="text-h3 mb-6">Products</h1>
        <v-text-field
          v-model="search"
          label="Search products..."
          variant="outlined"
          density="comfortable"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="product in filtered"
        :key="product.Id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card elevation="4" class="transition-swing">
          <v-img :src="product.img" height="200" cover></v-img>
          <v-card-title>{{ product.Title }}</v-card-title>
          <v-card-subtitle>${{ product.price }}</v-card-subtitle>
          <v-card-actions class="d-flex justify-center align-center py-4">
            <v-btn
              variant="flat"
              color="primary"
              @click="addToCart(product)"
              class="mr-4"
            >
              Add to Cart
            </v-btn>
            <v-btn :to="`/product/${product.Id}`" variant="outlined">
              Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
