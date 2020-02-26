<template>
  <div class="container">
    <p>
      <button @click="show">
        Notif me!
      </button>
    </p>
    <p>
      <NuxtLink to="/">
        Home
      </NuxtLink>
    </p>
  </div>
</template>

<script>
let miniToastr
if (process.client) {
  miniToastr = require('mini-toastr').default
}

export default {
  mounted () {
    miniToastr.init()
  },
  methods:{
      show(){
       this.$notify({
        title: 'Welcome!',
        message: 'Hello from nuxt.js',
        type: 'info'
      })
    }
  }
}
</script>

<style>

</style>
