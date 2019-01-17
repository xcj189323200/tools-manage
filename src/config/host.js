/**
 * Created by Cray on 2017/1/5.
 */
const _ENV = process.env._ENV
let API_HOST
let ADMIN_HOST

switch (_ENV) {
	case 'production':
		API_HOST = '//dpmanagement.dianjia001.com/api/'
		ADMIN_HOST = 'http://auth.dianjia001.com'
		break
	case 'testing':
		API_HOST = '//dpmanagement.17dianjia.net/api/'
		ADMIN_HOST = 'http://auth.17dianjia.net'
		break
	default :
		API_HOST = '//dpmanagement.17dianjia.net/api/'
		ADMIN_HOST = 'http://auth.17dianjia.net'
}
export default {
  API_HOST,
  ADMIN_HOST
}
