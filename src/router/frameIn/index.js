// 首页
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const index = {
  path: '/index',
  name: 'index',
  title: '首页',
  icon: 'home',
  meta: {
    auth: true
  },
  component: _import('system/index')
}

export default index
