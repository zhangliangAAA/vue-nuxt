<template>
  <div>
    <h1>This is jwtAuth</h1>
    <h2>{{ $store.state.auth }}</h2>
    <NuxtLink to="/">
      Back home
    </NuxtLink>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>
