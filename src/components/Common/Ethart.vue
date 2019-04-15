<template>
  <div>
    <div :id="id"></div>
  </div>
</template>
<script>
import echarts from 'echarts'

export default {
  props: {
    width: {
      type: String,
      default: '600px'
    },
    height: {
      type: String,
      default: '400px'
    },
    options: {
      type: Object,
      default() {
        return {
        }
      }
    }
  },
  data() {
    return {
      id: 'Etahrt-' + (Math.random() * 1000).toFixed(6),
      Echart: {}
    }
  },
  methods: {
    /**
     * @title 初始化图表
     */
    init() {
      const _el = document.getElementById(this.id)
      this.Echart = echarts.init(_el, 'dark', {
        renderer: 'svg',
        width: this.width,
        height: this.height
      })

      // 使用刚指定的配置项和数据显示图表。
      this.Echart.setOption(this.options)
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
    })
  }
}
</script>

