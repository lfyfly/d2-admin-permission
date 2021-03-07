import { find, assign } from 'lodash'

const users = [
  {
    username: 'admin',
    password: 'admin',
    uuid: 'admin-uuid',
    name: 'Admin',
    authKeys: {},
    isSuperAdmin: true
  },
  {
    username: 'editor',
    password: 'editor',
    uuid: 'editor-uuid',
    name: 'Editor',
    authKeys: {
      pages: ['/news/list', '/news/edit']
    }
  },
  {
    username: 'user1',
    password: 'user1',
    uuid: 'user1-uuid',
    name: 'User1',
    authKeys: {
      pages: ['/pages/page1', '/pages/page2', '/pages/page3'],
      apis: ['/api/create', '/api/get', '/api/update'] // 没有'/api/delete'
    }
  }
]

export default ({
  service,
  request,
  serviceForMock,
  requestForMock,
  mock,
  faker,
  tools
}) => ({
  /**
   * @description 登录
   * @param {Object} data 登录携带的信息
   */
  SYS_USER_LOGIN (data = {}) {
    // 模拟数据
    mock.onAny('/login').reply(config => {
      const user = find(users, tools.parse(config.data))
      return user
        ? tools.responseSuccess(
          assign({}, user, { token: faker.random.uuid() })
        )
        : tools.responseError({}, '账号或密码不正确')
    })
    // 接口请求
    return requestForMock({
      url: '/login',
      method: 'post',
      data
    })
  }
})
