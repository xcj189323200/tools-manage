import Layout from '../../views/Layout/index'

export default [
  {
    path: '/house',
    name: 'house',
    component: Layout,
    meta: { title: '房屋' },
    hidden: true,
    children: [
      {
        name: 'house-list',
        path: 'list',
        meta: { title: '房屋列表', keepAlive: true },
        component: () => import(/* webpackChunkName: "house-list" */ '../../views/House/list.vue')
      }
    ]
  }
]
