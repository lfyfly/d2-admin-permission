import store from '@/store'

// authKeys: [ pages:['/paga1'],  apis:['/api/1','/api2']]
// authKeys由后端在用户信息中返回

// 路由配置meta.authKey(一般使用页面路由) ，如 '/page1'
// 可以用于控制路由权限或者路由跳转按钮权限
export function checkPagePermission (authKey) {
  if (!authKey) return true

  const { authKeys = {}, isSuperAdmin } = store.state.d2admin.user.info
  if (isSuperAdmin) return true
  const { pages = [] } = authKeys

  return pages.includes(authKey)
}

// 控制按钮权限(通常是代表一个接口的操作)
// 参数authkey是写死在特定按钮上,一般是接口url
// 例子：<button v-if="checkApiPermission('/api/edit')" >编辑</button>
// 没有/api/edit接口全校性
export function checkApiPermission (authKey) {
  if (!authKey) return true

  const { authKeys = {}, isSuperAdmin } = store.state.d2admin.user.info
  if (isSuperAdmin) return true
  const { apis = [] } = authKeys
  return apis.includes(authKey)
}
