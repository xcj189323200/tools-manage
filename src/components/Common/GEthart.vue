<template>
  <div :id="id" style="height:100%;width:100%"></div>
</template>
<script>
import echarts from 'echarts'

export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    options: {
      type: Object,
      default() {
        return {
        }
      }
    }
  },
  watch: {
    options: {
      handler(val) {
        this.$nextTick(() => {
          this.init(val)
        })
      },
      deep: true
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
    init(opt) {
      const _el = document.getElementById(this.id)
      echarts.dispose(_el)
      this.Echart = echarts.init(_el, '', {
        // renderer: 'svg',
        // width: this.width,
        // height: this.height
      })

      // 使用刚指定的配置项和数据显示图表。
      this.Echart.setOption(opt)
      this.$emit('init', this.Echart)
    }
  },
  created() {

  }
}
</script>

