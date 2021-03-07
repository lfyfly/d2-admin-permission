# d2-admin-start-kit-with-permission


## permission 分支

### 功能
- 实现角色验证，根据用户角色动态显示菜单
- 对无权限路由进行拦截

### 下载

```
git clone https://github.com/lfyfly/d2-admin-start-kit-with-permission.git

git checkout permission

npm install

npm run dev
```

### 配置
#### 1. 配置 src/api/modules/sys.user.api.js，mock的登录接口user的`roles`和`isSuperAdmin`字段。

- roles: [ role:String ]，代表可访问该页面的角色
- isSuperAdmin: Boolean，代表是否为超级管理员。超级管理员拥有任何权限，如果isSuperAdmin为`true`,则不会验证roles。

```js
const users = [
  { username: 'admin', password: 'admin', uuid: 'admin-uuid', name: 'Admin', roles: ['admin'], isSuperAdmin: true },
  { username: 'editor', password: 'editor', uuid: 'editor-uuid', name: 'Editor', roles: ['editor'] },
  { username: 'user1', password: 'user1', uuid: 'user1-uuid', name: 'User1', roles: ['user'] }
]
```

#### 2. 配置src/router/frameIn 中的路由的 meta.roles

单个路由，菜单上没有收展

```js
const index = {
  path: '/index', // 必填
  name: 'index',  // 必填
  title: '首页',  // 必填，菜单栏上显示的标题
  icon: 'home',  // 必填
  meta: {
    title: '首页',  // 必填，tab上显示的标题
    auth: true  // 选填，代表是否要登录
  },
  component: _import('system/index')
}
```
一组路由，菜单上有收展


```js
const system = {
  title: '系统管理', // 必填，菜单组的标题，所以没有path属性
  icon: 'folder-o', // 必填
  children: [
    {
      path: '/system/roles',  // 必填
      name: '/system/roles',  // 必填
      title: '角色管理_',  // 必填，应该和meta.title一致，这里加下划线，在网页中可以看出是代表菜单的title显示
      meta: {
        title: '角色管理',  // 必填
        auth: true, 
        roles: ['admin'] // 选填。不填，代表不验证roles，所有登录用户都可访问；填了代表要验证roles。且不管meta.auth填了什么，都要求登录。
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
```
## authkey-permission 分支

### 功能
- 相比permission分支，实现了更加细致的权限控制。像按钮的权限控制

### 下载
```
git clone https://github.com/lfyfly/d2-admin-start-kit-with-permission.git

git checkout permission

npm install

npm run dev
```

### authkey-permission 分支文档