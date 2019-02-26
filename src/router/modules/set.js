import Layout from '../../views/Layout/index'

export default [
  {
    path: '/set',
    name: 'set',
    component: Layout,
    meta: { title: '设置' },
    hidden: true,
    children: [
      {
        name: 'set-upload',
        path: 'upload',
        meta: { title: '图片上传', keepAlive: true },
        component: () => import(/* webpackChunkName: "set-upload" */ '../../views/SetUp/Upload/list.vue')
      },
      {
        name: 'set-test',
        path: 'test',
        meta: { title: '测试图片上传', keepAlive: true },
        component: () => import(/* webpackChunkName: "set-test" */ '../../views/SetUp/index.vue')
      }
    ]
  }
]
