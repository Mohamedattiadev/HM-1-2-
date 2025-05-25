<script lang="ts">
import { defineComponent } from "vue";
import ChartRender from "./ChartRender.vue";

export default defineComponent({
  components: {
    ChartRender,
  },
  data: () => ({
    tab: "bar",
  }),
  computed: {
    chartType() {
      if (this.tab === "bar") return "bar";
      if (this.tab === "pie") return "pie";
      if (this.tab === "ybar") return "ybar";
      return "bar";
    },
  },
});
</script>

<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="primary" align-tabs="center">
      <v-tab value="bar">Bar</v-tab>
      <v-tab value="pie">Pie</v-tab>
      <v-tab value="ybar">Ychart</v-tab>
    </v-tabs>

    <v-card-text>
      <ChartRender :chartType="chartType" />
    </v-card-text>
  </v-card>
</template>
