<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ProductInfo from "../components/ProductInfo.vue";
import axios from "axios";

interface Product {
  Id: string;
  Title: string;
  Description: string;
  img: string;
  Url: string;
  price: number;
}

const product = ref<Product | null>(null);
const route = useRoute();

onMounted(async () => {
  const res = await axios.get("/products.json");
  const products: Product[] = res.data;
  product.value = products.find((p) => p.Id === route.params.id) || null;
});
</script>
<template>
  <v-container v-if="product" class="mt-10">
    <v-card>
      <v-row>
        <v-col cols="12" md="6">
          <v-img :src="product.img" height="400" cover></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <ProductInfo
            :title="product.Title"
            :description="product.Description"
            :price="product.price"
            :url="product.Url"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
  <v-container v-else class="d-flex justify-center align-center">
    <v-progress-circular indeterminate size="50"></v-progress-circular>
  </v-container>
</template>
