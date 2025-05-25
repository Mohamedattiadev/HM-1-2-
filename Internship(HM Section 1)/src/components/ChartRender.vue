<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { init } from "echarts";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import YBarChart from "../charts/YbarChart";

export default defineComponent({
  props: {
    chartType: {
      type: String as () => "bar" | "pie" | "ybar",
      required: true,
    },
  },
  setup(props) {
    const myChart = ref<HTMLDivElement | null>(null);
    const chart = ref<any>(null);

    const renderChart = () => {
      if (!chart.value) return;

      chart.value.clear();

      let chartInstance;
      if (props.chartType === "bar") {
        chartInstance = new BarChart();
      } else if (props.chartType === "pie") {
        chartInstance = new PieChart();
      } else if (props.chartType === "ybar") {
        chartInstance = new YBarChart();
      }

      if (chartInstance) {
        chart.value.setOption({
          xAxis:
            props.chartType !== "pie" ? chartInstance.getxAxis() : undefined,
          yAxis:
            props.chartType !== "pie" ? chartInstance.getyAxis() : undefined,
          series: chartInstance.getSeries(),
          grid: chartInstance.getGrid ? chartInstance.getGrid() : {},
          title: chartInstance.getTitle ? chartInstance.getTitle() : {},
          tooltip: chartInstance.getTooltip ? chartInstance.getTooltip() : {},
          legend: chartInstance.getLegend ? chartInstance.getLegend() : {},
        });
      }
    };

    onMounted(() => {
      requestAnimationFrame(() => {
        if (myChart.value) {
          chart.value = init(myChart.value, {}, { renderer: "canvas" });
          renderChart();
        }
      });
    });

    watch(
      () => props.chartType,
      () => {
        renderChart();
      },
    );

    return {
      myChart,
    };
  },
});
</script>

<template>
  <v-fade-transition>
    <div style="height: 500px; width: 500px" ref="myChart"></div>
  </v-fade-transition>
</template>
