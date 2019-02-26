/**
 * Created by Cray on 2017/1/5.
 */
const _ENV = process.env._ENV
let API_HOST
let ADMIN_HOST

console.log(process.env._ENV, ' process.env._ENV')
switch (_ENV) {
	case 'production':
		API_HOST = '//api.crofys.cn/api/'
		ADMIN_HOST = 'http://auth.dianjia001.com'
		break
	case 'testing':
		API_HOST = '//api.crofys.cn/api/'
		ADMIN_HOST = 'http://auth.17dianjia.net'
		break
	default :
		API_HOST = '//127.0.0.1:7001/api/'
		ADMIN_HOST = 'http://auth.17dianjia.net'
}
export default {
  API_HOST,
  ADMIN_HOST
}
