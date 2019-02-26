export default [
  {
    groupName: '房屋',
    path: 'house',
    children: [
      {
        urlLink: 'house-list',
        permissionName: '房屋列表'
      }
    ]
  },
  {
    groupName: '设置',
    path: 'set',
    children: [
      {
        urlLink: 'set-upload',
        permissionName: '图片上传'
      },
      {
        urlLink: 'set-test',
        permissionName: '测试'
      }
    ]
  }
]
