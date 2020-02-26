
<template>
  <div class="container">
    <h1>异步数据</h1>
    <pre>{{ post }}</pre>
    <p>
      <NuxtLink to="/posts">
        Back to the list
      </NuxtLink>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    // We can use async/await ES6 feature
    const  data  = await axios.get(`http://localhost:3000/`)
    // console.log(data)
    
    return { post: data }
  },
  head () {
    return {
      title: '异步数据'
    }
  }
}
</script>

<style scoped>

</style>
