<template>
  <d2-container>
    <template slot="header">Page 1 header</template>
    <h3>
      user用户只能看到 create，get，update三个按钮， 而超级管理员还可以看到 delete
      按钮
    </h3>
    <div>
      <AuthContainer authKey="/api/create">
        <button>create</button>
      </AuthContainer>
      <AuthContainer authKey="/api/get">
        <button>get</button>
      </AuthContainer>
      <AuthContainer authKey="/api/update">
        <button>update</button>
      </AuthContainer>
      <AuthContainer authKey="/api/delete">
        <button>delete</button>
      </AuthContainer>
    </div>

    <h3>
      user用户只能看到 link /pages/page2 ， 而超级管理员还可以看到 link /system/roles
    </h3>

    <AuthContainer type="page" authKey="/pages/page2">
      <router-link to="/pages/page2"> <button>link /pages/page2</button></router-link>
    </AuthContainer>
    <AuthContainer type="page" authKey="/system/roles">
      <router-link to="/system/roles"> <button>link /system/roles</button></router-link>
    </AuthContainer>
  </d2-container>
</template>

<script>
import AuthContainer from '@/AuthContainer'

export default {
  name: 'page1',
  components: {
    AuthContainer
  }
}
</script>
