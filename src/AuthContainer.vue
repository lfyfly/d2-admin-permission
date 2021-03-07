<template>
  <span v-if="show" :style="{display}">
    <slot />
  </span>
</template>

<script>
import {
  checkPagePermission,
  checkApiPermission
} from './menu/checkAuthKeyPermission'

const methodMap = {
  api: checkApiPermission,
  page: checkPagePermission
}

export default {
  name: 'AuthContainer',
  props: {
    display: {
      type: String,
      default: 'inline-block' // 值和style.display一样
    },
    authKey: {
      type: String,
      required: true
    },
    type: { type: String, default: 'api' } // api | page
  },
  data: function () {
    return {
      show: false
    }
  },
  created () {
    this.show = methodMap[this.type](this.authKey)
  }
}
</script>
