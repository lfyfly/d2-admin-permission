import { uniqueId } from 'lodash'
import store from '@/store'
import { configForMenu } from '@/router/routes'
import { checkPagePermission } from './checkAuthKeyPermission'

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */

// 根据权限nav过滤
function filterRoute (navConfig) {
  const { isSuperAdmin } = store.state.d2admin.user.info

  if (isSuperAdmin) return navConfig

  return navConfig.filter(item => {
    if (!item.children && item.path) {
      return checkPagePermission(item.meta.authKey)
    } else {
      const filterChildren = filterRoute(item.children)
      if (filterChildren.length > 1) {
        item.children = filterRoute(item.children)
        return item
      } else {
        return false
      }
    }
  })
}

function supplementPath (menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...e.children ? {
      children: supplementPath(e.children)
    } : {}
  }))
}

export function getMenuConfig () {
  return supplementPath(filterRoute(configForMenu))
}

// 前提是用户信息已经写入vuex
export default function initMenu () {
  const navConfig = getMenuConfig()

  // 设置顶栏菜单
  store.commit('d2admin/menu/headerSet', navConfig)
  // 设置侧边栏菜单
  store.commit('d2admin/menu/asideSet', navConfig)
  // 初始化菜单搜索功能
  store.commit('d2admin/search/init', navConfig)
}
