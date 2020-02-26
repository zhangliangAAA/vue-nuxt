
<template>
  <div class="container">
    <h1>跨域请求</h1>
    <p>{{ res }}</p>
  </div>
</template>

<script>
import axios from '@/utils/request'

export default {
  async asyncData () {
    // We can use async/await ES6 feature
    const  data  = await axios.get(`proxyApi/user`)
    // console.log(data)
    
    return { res: data }
  },
  head () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
