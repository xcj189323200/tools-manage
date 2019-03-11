<template>
  <div id="category">
    这是test
    <input type="text" v-model="ssl">
    <button @click="submit()">提交</button>
    <ul>
      <li v-for="item in list" :key="item.id">
        <span style="color:red">{{item.name}}</span>
        <span style="margin:0 20px">{{sl(item.sefl_flag)}}</span>
        <span>{{formatTime(item.create_time)}}</span>
        <span @click="sub(item)" style="margin:0 20px">{{item.sefl_flag ? '下架':'上架'}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      ssl: ''
    }
  },
  created() {
    console.log(this)
    console.log(this.aaa = 3)
    this.sl1()

    // when where who
  },
  methods: {
    formatTime(time, cFormat) {
      if (arguments.length === 0) return null
      if ((time + '').length === 10) {
        time = +time * 1000
      }
      const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
      let date
      if (typeof time === 'object') {
        date = time
      } else {
        date = new Date(time)
      }

      const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
      }
      const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        var value = formatObj[key]
        if (key === 'a') { return ['一', '二', '三', '四', '五', '六', '日'][value - 1] }
        if (result.length > 0 && value < 10) {
          value = '0' + value
        }
        return value || 0
      })
      return timeStr
    },

    sl(i) {
      if (i === 1) {
        return '上架'
      } else {
        return '下架'
      }
    },
    sl1() {
      this.$http.getCategoryList().then(res => {
        this.list = res.data
      })
    },
    submit() {
      this.$http.createCategory({ name: this.ssl }).then(res => {
        if (res.code === 200) {
          this.sl1()
        } else {
          alert(res.msg)
        }
      })
    },
    sub(item) {
         item.sefl_flag = item.sefl_flag ? 0 : 1
    }

  }

}
</script>

<style lang='scss' scoped>
#category {
  //  color: aqua;
}
</style>
