// 管理员才可访问

const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const system = {
  title: '新闻管理',
  icon: 'folder-o',
  children: [
    {
      path: '/news/list',
      title: '新闻列表_', // nav
      name: '/news/list',
      meta: {
        title: '新闻列表', // tab
        auth: true,
        authKey: '/news/list'
      },
      component: _import('news/news')
    },
    {
      path: '/news/edit',
      name: '/news/edit',
      title: '模板_',
      meta: {
        title: '模板',
        auth: true,
        authKey: '/news/edit'
      },
      component: _import('news/edit')
    },
    {
      path: '/news/templates',
      name: '/news/templates',
      title: '模板_',
      meta: {
        title: '模板',
        auth: true,
        authKey: '/news/templates'
      },
      component: _import('news/templates')
    }
  ]
}

export default system
