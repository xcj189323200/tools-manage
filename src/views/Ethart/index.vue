<template>
  <div class="work">
    <div class="work_search">
      <el-select v-model="params.workType" placeholder="请选择">
        <el-option v-for="item in optionsList.workList" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <span class="work_search_total">共计 {{totals}} 条</span>
    </div>
    <div class="work_area">
      <g-ethart :options="options"></g-ethart>
    </div>
  </div>
</template>
<script>
import GEthart from '@components/Common/GEthart.vue'

export default {
  components: {
    GEthart
  },
  data() {
    return {
      totals: 0,
      params: {
        workType: 'WEB'
      },
      optionsList: {
        workList: [
          {
            label: 'web 前端',
            value: 'WEB'
          },
          {
            label: 'UI',
            value: 'UI'
          }
          // {
          //   label: '其他',
          //   value: 'OTHER',
          //   url: ''
          // }
        ]
      },
      options: {

      }
    }
  },
  watch: {
    'params.workType': {
      handler(val) {
        console.log('111')
        this.init()
      },
      immediate: true
    }
  },
  methods: {
    async init() {
      const { workType } = this.params
      const res = await this.$http.getWorkList({ limit: 400, conditions: { work_type: workType } })
      if (res.code === 200) {
        const { data } = res
        const _data = []
        const _obj = {}
        this.totals = data.length
        data.map(k => {
          const _area = k.area || '其他'
          _obj[_area] = _obj[_area] || []
          _obj[_area].push(k)
        })
        const legend = Object.keys(_obj)
        legend.map(k => {
          _data.push({
            name: k,
            value: _obj[k].length
          })
        })
        this.init_chart(_data, legend)
      }
      console.log(res, '====res')
    },
    init_chart(data, legend) {
      const { label } = this.optionsList.workList.filter(k => k.value === this.params.workType)[0] || {}
      this.options = {
        title: {
          text: label
        },
        tooltip: {},
        legend: {
          orient: 'vertical',
          x: 'right',
          data: legend
        },
        series: [
          // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
          {
            name: '工作区域',
            type: 'pie',
            radius: '55%',
            // center: ['50%', '50%'],
            label: {
              normal: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                  a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                  },

                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              }
            },
            data
          }
        ]
      }
    }
  },
  async created() {

  }
}
</script>
<style lang="scss" scoped>
.work {
  padding: 20px;
  .work_search {
    margin-bottom: 20px;
    .work_search_total {
      margin-left: 30px;
    }
  }
  .work_area {
    width: 100%;
    height: 500px;
    margin: 0 auto;
  }
}
</style>

