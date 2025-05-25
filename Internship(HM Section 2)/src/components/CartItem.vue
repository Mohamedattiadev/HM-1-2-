<script lang="ts" setup>
defineProps<{
  item: {
    Id: string;
    Title: string;
    Description?: string;
    img: string;
    price: number;
  };
}>();
</script>
<template>
  <v-list-item>
    <template v-slot:prepend>
      <v-avatar size="60" rounded>
        <v-img :src="item.img" cover></v-img>
      </v-avatar>
    </template>

    <v-list-item-title>{{ item.Title }}</v-list-item-title>

    <v-list-item-subtitle class="mb-2">
      {{ item.Description?.slice(0, 80) }}...
    </v-list-item-subtitle>
    <v-list-item-subtitle class="text-primary">
      ${{ item.price.toFixed(2) }}
    </v-list-item-subtitle>
  </v-list-item>
</template>
