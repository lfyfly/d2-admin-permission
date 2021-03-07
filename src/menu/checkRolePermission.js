import store from '@/store'

// 确保store.state.d2admin.user.info已经初始化完成
export default function checkRolePermission (targetRoles) {
  // 路由没有配置roles时，就代表无需进行权限验证
  if (!targetRoles) return true

  const { roles, isSuperAdmin } = store.state.d2admin.user.info
  if (isSuperAdmin) return true

  if (!Array.isArray(targetRoles)) return false

  return roles.some(item => targetRoles.includes(item))
}
