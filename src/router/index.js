import Vue from 'vue'
import Router from 'vue-router'
import SetUp from './modules/set'
import House from './modules/house'
import Layout from '../views/Layout/index'

Vue.use(Router)

export default new Router({
  // mode: 'hash',
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      hidden: true,
      children: [
        {
          name: 'home',
          path: 'home',
          meta: { title: '首页', keepAlive: true },
          component: () =>
            import(/* webpackChunkName: "home" */ '../views/Home/index.vue')
        },
        {
          name: 'ethart',
          path: 'ethart',
          meta: { title: '图表', keepAlive: true },
          component: () =>
            import(/* webpackChunkName: "ethart" */ '../views/Ethart/index.vue')
        },
        {
          name: 'crawler',
          path: 'crawler',
          meta: { title: '爬虫', keepAlive: true },
          component: () =>
            import(/* webpackChunkName: "Crawler" */ '../views/Crawler/index.vue')
        }
      ]
    },
    {
      path: '/category',
      name: 'CategoryList',
      component: () =>
        import(/* webpackChunkName: "CategoryList" */ '../views/Category/list.vue')
    },
    ...SetUp,
    ...House,
    {
      path: '*', // 其他页面，强制跳转到登录页面
      name: '*',
      redirect: 'home'
    }
  ]
})
