<template>
  <div id="home">首页
    <!-- <button class="pan-btn blue-btn">点击</button>
    <button class="pan-btn light-blue-btn">你好哈哈哈</button>
    <button class="pan-btn pink-btn">你好哈哈哈</button>
    <button class="pan-btn green-btn">你好哈哈哈</button>
    <button class="pan-btn tiffany-btn">你好哈哈哈</button>
    <button class="pan-btn warn-btn" @click="enter">你好哈哈哈</button>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import md5 from 'md5'
// import { Base64 } from 'js-base64'
import CryptoJS from 'crypto-js'

export default {
  name: 'home',
  components: {
  },
  methods: {
    enter() {
      this.$router.replace({ path: '/set/operate/list' })
    },
    deal(n) {
      var i = ''
      Object.keys(n).sort().forEach(function (e) {
        i += e + '=' + n[e] + '&'
        // l += e + '=' + (data[e] === 'object' ? JSON.stringify(data[e]) : data[e])
      })
      i = i.substr(0, i.length - 1)
      // l += '6e8566e348447383e16fdd1b233dbb49'
      // /* 对l 字符串进行md5加密*/
      // l = md5(l)
      // /* 对加密的结果添加前缀 ljwxapp:*/
      // l = 'ljwxapp:' + l
      return i
    }
  },
  created() {
    // let url = 'https://gateway.lianjia.com/wukong/ershoufang/search?city_id=131000&condition=&query=&order=&offset=0&limit=10'
    // let url = 'https://gateway.lianjia.com/wukong/ershoufang/search?city_id=131000&condition=&query=&order=&offset=0&limit=10'
    // LJ-HMAC-SHA256 accessKeyId=wukong; nonce=0.46900863702486495; timestamp=1551259605; signature=crMF59DQ/pI95I+4dswXO3WBs1bb6cie4Cp+35pxZ90=
    var s = 'https://gateway.lianjia.com/wukong/ershoufang/search?city_id=131000&condition=&query=&order=&offset=0&limit=10'
    // var s = 'https://gateway.lianjia.com/wukong/config/Filter/Ershoufang?city_id=131000'
    var r = 'GET'
    var a = s.split('?')[0].split('://')[1]
    var o = a.split('/')[0]
    var p = a.split(o)[1]
    var timestamp = '1551259605'
    var nonce = '0.46900863702486495'
    const params = {
      city_id: 131000,
      condition: '',
      query: '',
      order: '',
      offset: 30,
      limit: 40
    }
    var l = [
      'accessKeyId=wukong',
      'nonce=' + nonce,
      // 'nonce=' + String(Math.random()),
      'timestamp=' + timestamp,
      'method=' + r,
      'path=' + p,
      'host=' + o.split(':')[0].toUpperCase()
    ]
    l.push('query=' + this.deal(params))
    var m = l.sort().join('&')
    console.log(m, '--------')
    const A = CryptoJS.HmacSHA256(m, 'lMl0XOUNSExcUYtw').toString(CryptoJS.enc.Base64)

    const sig = 'LJ-HMAC-SHA256 ' +
      [
        'accessKeyId=wukong',
        'nonce=' + nonce,
        // 'nonce=' + String(Math.random()),
        'timestamp=' + timestamp,
        'signature=' + A
      ].join('; ')
    console.log(sig)
  }
}
</script>
<style lang="scss" scoped>
</style>

