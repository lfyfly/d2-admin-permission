// 管理员才可访问

const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const system = {
  title: '系统管理',
  icon: 'folder-o',
  children: [
    {
      path: '/system/roles',
      name: '/system/roles',
      title: '角色管理_',
      meta: {
        title: '角色管理',
        auth: true,
        roles: ['admin']
      },
      component: _import('sys/roles')
    },
    {
      path: '/system/admins',
      name: '/system/admins',
      title: '管理员列表_',
      meta: {
        title: '管理员列表',
        auth: true,
        roles: ['admin']
      },
      component: _import('sys/admins')
    }
  ]
}

export default system
