<template>
  <div class="content">
    <h1>About Page</h1>
    <p>这里使用自定义的Loading</p>
    <p>It should take 5 seconds for the loader to disappear</p>
    <p>
      It should take 5 seconds for the route to change after you
      <span class="link" @click="goToFinal">
        click here
      </span>
    </p>
    <!-- <NuxtLink to="/">
      Go to /
    </NuxtLink> -->
  </div>
</template>

<script>
export default {
  loading: false,
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  },
  mounted () {
    setTimeout(() => {
      // Extend loader for an additional 5s
      this.$nuxt.$loading.finish()
    }, 5000)
  },
  methods: {
    goToFinal () {
      // Start loader immediately
      this.$nuxt.$loading.start()
      // Actually change route 5s later
      setTimeout(() => {
        this.$router.push('/final')
      }, 5000)
    }
  }
}
</script>

<style scoped>
.link {
  cursor: pointer;
  text-decoration: underline;
}
</style>
