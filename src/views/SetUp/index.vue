<template>
  <div id="home">
    {{percent}}
    <input type="file" @change="chooseImg_changeHandler">
    <el-button class="pan-btn blue-btn">上传</el-button>
  </div>
</template>

<script>
import * as qiniu from 'qiniu-js'

export default {
  data() {
    return {
      percent: 0,
      token: ''
    }
  },
  components: {
  },
  methods: {
    chooseImg_changeHandler(ev) {
      const file = ev.target.files[0]
      const token = this.token

      const config = {
        useCdnDomain: true,
        region: qiniu.region.z0
      }
      const putExtra = {
        fname: file.name,
        params: {},
        mimeType: null
      }
      const key = file.name
      console.log(file.name, 'file.name')
      // 添加上传dom面板
      const next = response => {
        const total = response.total
        console.log(total, '======')
        this.percent = total.percent
        // $('.speed').text('进度：' + total.percent + '% ')
      }

      // let subscription
      // 调用sdk上传接口获得相应的observable，控制上传和暂停
      const observable = qiniu.upload(file, key, token, putExtra, config)
      observable.subscribe(next)
    }
  },
  async created() {
    console.log('这是created home')
    const res = await this.$http.getOssToken()
    if (res.code === 200) {
      const { data } = res
      this.token = data.token
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

