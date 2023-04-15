<template>

  <v-chart class="chart" :option="option"/>


</template>

<script lang="ts" setup>
import VChart, {THEME_KEY} from 'vue-echarts';
import {defineComponent, provide, ref} from 'vue';
import * as echarts from 'echarts/core';
import { GaugeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';


echarts.use([GaugeChart, CanvasRenderer]);

provide(THEME_KEY, "light");
const gaugeData = [
  {
    value: 20,
    name: 'Good',
    title: {
      offsetCenter: ['-100%', '80%']
    },
    detail: {
      offsetCenter: ['-100%', '100%']
    }
  },
  {
    value: 40,
    name: 'Better',
    title: {
      offsetCenter: ['0%', '80%']
    },
    detail: {
      offsetCenter: ['0%', '100%']
    }
  },
  {
    value: 60,
    name: 'Perfect',
    title: {
      offsetCenter: ['100%', '80%']
    },
    detail: {
      offsetCenter: ['100%', '100%']
    }
  }
];



setInterval(function () {
  option.value.series[0].data[0].value = +(Math.random() * 100).toFixed(2);
  option.value.series[0].data[1].value = +(Math.random() * 100).toFixed(2);
  option.value.series[0].data[2].value = +(Math.random() * 100).toFixed(2);
}, 4000);

const option = ref({
  series: [
    {
      type: 'gauge',
      anchor: {
        show: true,
        showAbove: true,
        size: 10,
        itemStyle: {
          color: '#FAC858'
        }
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 8,
        length: '50%',
        offsetCenter: [0, '8%']
      },

      progress: {
        show: true,
        overlap: true,
        roundCap: true
      },
      axisLine: {
        roundCap: true
      },
      data: gaugeData,
      title: {
        fontSize: 14
      },
      detail: {
        width: 40,
        height: 8,
        fontSize: 14,
        color: '#fff',
        backgroundColor: 'inherit',
        borderRadius: 3,
        formatter: '{value}%'
      }
    }
  ]
});
// export default defineComponent({
//   name: 'GaugeIncome',
//   setup () {
//     return {
//       option
//     }
//   }
// });
</script>

<style scoped>
.chart {
  height: 240px;
  width: 100%;
}
</style>
