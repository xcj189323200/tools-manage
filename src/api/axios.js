/**
 * Created by VULCAN on 2018/8/8.
 */
import axios from 'axios'
// import { API_HOST } from "../config";
import _ from 'lodash'
// import Qs from 'qs'

const _axios = axios.create({
  // headers:{'Content-Type': 'application/json'},
  // transformRequest: [
  //   data => {
  //     // console.log(Qs.stringify(data), "====data")
  //     return Qs.stringify(data)
  //   }
  // ]
})
_axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  res => {
    let _data = null
    if (res.status === 200) {
      _data = res.data
      if (_.isPlainObject(_data) && _data.code) {
        switch (_data.code) {
          case 1001:
            // window._Vue.$store.dispatch('loginOut')
            break
          case 1002: {
            window._Vue.$message.error(_data.message)
            _data = null
            break
          }
        }
      }
    }
    return _data
  },
  err => {
    switch (err.response.status) {
      case 400:
        break
      case 401: {
        break
      }
      case 404:
      case 405:
      case 500:
      default:
        if (err.response.data && err.response.data.message) {
          window._Vue.$message.error(err.response.data.message)
        } else {
          window._Vue.$message.error('服务器错误')
        }
        break
    }
    return err.response
  }
)

export default _axios
