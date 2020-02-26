<template>
  <div>
    <h1>登录权限验证页</h1>
    <h2>userInfo: {{ $store.state.authUser }}</h2>
    <p>If you try to access this URL not connected, you will see the error page telling your that you are not connected.</p>
    <NuxtLink to="/">
      Back to the home page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
