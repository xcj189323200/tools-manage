/*
 * @Author: 徐长剑
 * @Description: 【modules】用户相关
 * @Date: 2019-01-09 13:49:09
 */
import Api from '@api'

const tagsView = {
  state: {

  },
  mutations: {},
  actions: {
    /*
    * @Description: 退出登录
    */
    loginOut: () => {
      // console.log(`${Api.ADMIN_HOST}/passport/login.do?redirectURL=${Api.HOST}`,'`${Api.ADMIN_HOST}?redirectURL=${Api.HOST}`');
      document.cookie =
        '_DJ_TOKEN=; expires=Mon, 11 Nov 1990 00:00:00 GMT; domain=.17dianjia.net;path=/'
      window.location.href = `${Api.ADMIN_HOST}/passport/login.do?redirectURL=${
        window.location.href
      }`
      // window.location.href = `${Api.ADMIN_HOST}/passport/login.do?redirectURL=${Api.HOST}`;
    }
  }
}

export default tagsView
