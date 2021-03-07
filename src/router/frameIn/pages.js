// 管理员才可访问

const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const system = {
  title: '页面',
  icon: 'folder-o',
  children: [
    {
      path: '/pages/page1',
      title: '页面1_', // nav
      name: '/pages/page1',
      meta: {
        title: '页面1', // tab
        auth: true,
        authKey: '/pages/page1'
      },
      component: _import('demo/page1')
    },
    {
      path: '/pages/page2',
      name: '/pages/page2',
      title: '页面2_', // nav
      meta: {
        title: '页面2',
        auth: true,
        authKey: '/pages/page2'
      },
      component: _import('demo/page2')
    },
    {
      path: '/pages/page3',
      name: '/pages/page3',
      title: '页面3_', // nav
      meta: {
        title: '页面3',
        auth: true,
        authKey: '/pages/page3'
      },
      component: _import('demo/page3')
    }
  ]
}

export default system
