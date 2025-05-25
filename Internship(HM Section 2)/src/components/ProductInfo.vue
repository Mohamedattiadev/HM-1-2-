<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
  price: number;
  url: string;
}>();
</script>
<template>
  <div>
    <v-card-title class="text-h4 font-weight-bold text-wrap">
      {{ title }}
    </v-card-title>

    <v-card-subtitle class="text-h6">
      {{ description }}
    </v-card-subtitle>

    <v-card-text>
      {{ description }}
    </v-card-text>

    <v-card-actions class="d-flex justify-space-between align-center px-6 py-4">
      <v-btn
        :href="url"
        target="_blank"
        color="primary"
        size="large"
        variant="flat"
        class="d-flex align-center justify-center px-5 text-capitalize"
      >
        View Source
      </v-btn>

      <div class="text-h5 font-weight-bold text-primary">
        ${{ price.toFixed(2) }}
      </div>
    </v-card-actions>
  </div>
</template>
