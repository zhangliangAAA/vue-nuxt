<template>
  <div>
    <h1>user-one页面，path：/user/one</h1>
    <nuxt-link to="/user/one?title=new">
      改变title
    </nuxt-link> |
    <nuxt-link to="/user/one?title=123">
      改变title
    </nuxt-link> 
    <p>title: {{ title }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params,query }) {
    console.log("params", params,query)
    return { title: query.title }
  },
  watchQuery: true
}
</script>

<style></style>
