<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import CartItem from "../components/CartItem.vue";

const store = useStore();
const cartItems = computed(() => store.getters.cartItems);
const totalPrice = computed(() => store.getters.totalPrice);
</script>

<template>
  <v-container>
    <v-card class="mx-auto pa-4" max-width="800" elevation="2">
      <v-card-title class="text-h4 mb-4"> Your Cart </v-card-title>

      <template v-if="cartItems.length > 0">
        <v-list>
          <CartItem v-for="item in cartItems" :key="item.Id" :item="item" />
        </v-list>

        <v-divider class="my-2"></v-divider>

        <v-card-text class="py-4 px-6">
          <v-row align="center" justify="space-between">
            <v-col cols="auto">
              <span class="text-h6 font-weight-medium">Total:</span>
              <span class="text-h5 font-weight-bold text-primary ml-2">
                ${{ totalPrice.toFixed(2) }}
              </span>
            </v-col>

            <v-col cols="auto">
              <v-btn color="primary" size="large"> Proceed to Checkout </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </template>

      <v-card-text v-else class="text-center py-8">
        <v-icon icon="mdi-cart-off" size="64" class="mb-4"></v-icon>
        <div class="text-h6">Your cart is empty</div>
        <v-btn color="primary" class="mt-4" to="/"> Continue Shopping </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>
