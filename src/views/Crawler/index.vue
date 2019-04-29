<template>
  <div class="crawler">
    <div class="crawler_container">
      <div>
        <h3>爬取boss</h3>
        <br>
        <el-row>
          <el-col :span="3">
            <el-select v-model="params.work_type" placeholder="请选择">
              <el-option v-for="item in optionsList.workList" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-col>
          <el-col :span="7" class="g_ml_20">
            <el-input v-model="params.url" placeholder="请输入爬取的boss地址"></el-input>
          </el-col>
          <el-col :span="2" class="g_ml_20">
            <el-input v-model="params.total_pages" placeholder="请输入爬取的boss地址"></el-input>
          </el-col>
          <el-col :span="3" class="g_ml_20">
            <el-button type="primary" @click="clawer_clickHandler('BOOS_WORK')">爬取</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      params: {
        url: '',
        work_type: 'WEB',
        total_pages: 1
      },
      optionsList: {
        workList: [
          {
            label: 'web 前端',
            value: 'WEB',
            url: 'https://www.zhipin.com/c101030100/?query=web'
            // url: 'https://www.zhipin.com/c101030100-p100901/'
          },
          {
            label: 'UI',
            value: 'UI',
            url: 'https://www.zhipin.com/c101030100/?query=ui'
          },
          {
            label: '其他',
            value: 'OTHER',
            url: ''
          }
        ]
      }
    }
  },
  watch: {
    'params.work_type': {
      handler(val) {
        const { url } = this.optionsList.workList.filter(k => k.value === val)[0] || {}
        this.params.url = url
      },
      immediate: true
    }
  },
  methods: {
    async clawer_clickHandler(type) {
      if (type === 'BOOS_WORK') {
        const res = await this.$http.crawlerWork(this.params)
        if (res.code === 200) {
          const { data } = res
          this.$message.success(`爬取成功${data.totals}条数据`)
        }
        console.log(res, '++++res')
      }
    }
  },
  async created() {
  }
}
</script>
<style lang="scss" scoped>
.crawler {
  .crawler_container {
    padding: 20px;
    margin: 0 auto;
  }
}
.g_ml_20 {
  margin-left: 20px;
}
</style>

