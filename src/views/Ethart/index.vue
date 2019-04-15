<template>
  <div>
    <ethart :options="optionsA"></ethart>
    <ethart :options="options"></ethart>
  </div>
</template>
<script>
import Ethart from '@components/Common/Ethart.vue'

export default {
  components: {
    Ethart
  },
  data() {
    return {
      optionsA: {
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: [
            { name: 'score' },
            // 可以简写为 string，表示维度名。
            'amount',
            // 可以在 type 中指定维度类型。
            { name: 'product', type: 'ordinal' }
          ],
          source: [
            ['product', '2012', '2013', '2014', '2015'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
          ]
        },
        xAxis: [
          { type: 'category', gridIndex: 0 },
          { type: 'category', gridIndex: 1 }
        ],
        yAxis: [
          { gridIndex: 0 },
          { gridIndex: 1 }
        ],
        grid: [
          { bottom: '55%' },
          { top: '55%' }
        ],
        series: [
          // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
          { type: 'bar', seriesLayoutBy: 'row' },
          { type: 'bar', seriesLayoutBy: 'row' },
          { type: 'bar', seriesLayoutBy: 'row' },
          // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
        ]
      },
      options: {
        title: {
          link: '//www.baidu.com',
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        toolbox: {
          feature: {
            saveAsImage: {
              type: 'png'
            }
          }
        },
        legend: { // 图表的 菜单项
          data: [{ // 菜单项展示效果
            name: '2015',
            // 强制设置图形为圆。
            icon: 'circle',
            // 设置文本为红色
            textStyle: {
              color: 'red'
            }
          }, '2016', '2017'],
          tooltip: {
            show: true
          },
          selected: {
            // 选中'系列1'
            '2015': true,
            // 不选中'系列2'
            '2016': false
          },
          formatter: (name) => {
            console.log(this, '2222')
            // return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…')
          }
        },
        xAxis: {
          type: 'category'
          // data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        dataset: {
          // 提供一份数据。
          source: [
            { product: 'Matcha Latte', count: 823, score: 95.8 },
            { product: 'Milk Tea', count: 235, score: 81.4 },
            { product: 'Cheese Cocoa', count: 1042, score: 91.2 },
            { product: 'Walnut Brownie', count: 988, score: 76.9 }
          ]
        },
        series: [
          // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
          { type: 'bar', seriesLayoutBy: 'row' },
          { type: 'bar', seriesLayoutBy: 'row' }
          // { type: 'bar', seriesLayoutBy: 'row' }
        ]
        // series: [
        //   // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
        //   { type: 'bar', seriesLayoutBy: 'row' },
        //   { type: 'bar', seriesLayoutBy: 'row' }
        //   // { type: 'bar', seriesLayoutBy: 'row' }
        // ]
        // series: [
        //   {
        //     name: '销量',
        //     type: 'bar',
        //     data: [5, 20, 36, 10, 10, 20]
        //   },
        //   {
        //     name: '品牌',
        //     type: 'bar',
        //     data: [5, 20, 36, 10, 10, 20]
        //   }
        // ]
      }
    }
  },
  created() {

  }
}
</script>

