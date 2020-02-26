<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        vue-nuxt
      </h1>
      <h2 class="subtitle">
        My great Nuxt.js project
      </h2>
      <el-button type="primary" @click="goto">
        命名视图
      </el-button>
      <div>
        <nuxt-link to="/about">
          About
        </nuxt-link> |
        <nuxt-link to="/selfLayout">
          SelfLayout
        </nuxt-link> |
        <nuxt-link to="/middle">
          middelwareInPage
        </nuxt-link> |
        <nuxt-link to="/plugins">
          Plugins
        </nuxt-link> |
        <nuxt-link to="/nest">
          嵌套路由
        </nuxt-link> |
        <nuxt-link to="/transition">
          过度动效
        </nuxt-link> |
        <nuxt-link to="/asyncData">
          asyncData
        </nuxt-link> |
        <nuxt-link to="/proxy">
          跨域请求
        </nuxt-link> |
        <nuxt-link to="/login">
          登录权限
        </nuxt-link> |
        <nuxt-link to="/jwtLogin">
          jwtLogin登录权限
        </nuxt-link> |
        <nuxt-link to="/user">
          user
        </nuxt-link> |
        <nuxt-link to="/user/one?title=110">
          user-one
        </nuxt-link> |
        <nuxt-link to="/students/1004">
          students-id
        </nuxt-link> |
      </div>
      <!-- <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue"

export default {
  components: {
    Logo
  },
  methods: {
    goto() {
      this.$router.push({ path: "/todos" })
    }
  }
}
</script>

<style>
.container {
  /* margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
