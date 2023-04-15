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
    name: 'Perfect',
    title: {
      offsetCenter: ['0%', '-60%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '-35%']
    }
  },
  {
    value: 40,
    name: 'Good',
    title: {
      offsetCenter: ['0%', '-10%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '10%']
    }
  },
  {
    value: 60,
    name: 'Commonly',
    title: {
      offsetCenter: ['0%', '35%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '55%']
    }
  }
];



setInterval(function () {
  option.value.series[0].data[0].value = +(Math.random() * 100).toFixed(2);
  option.value.series[0].data[1].value = +(Math.random() * 100).toFixed(2);
  option.value.series[0].data[2].value = +(Math.random() * 100).toFixed(2);
}, 5000);

const option = ref({
  series: [
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      pointer: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 1,
          borderColor: '#464646'
        }
      },
      axisLine: {
        lineStyle: {
          width: 18
        }
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        distance: 50
      },
      data: gaugeData,
      title: {
        fontSize: 12
      },
      detail: {

        width: 40,
        height: 12,
        fontSize: 12,
        color: 'inherit',
        borderColor: 'inherit',
        borderRadius: 10,
        borderWidth: 1,
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
