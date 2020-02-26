<template>
  <div>
    <div class="layout-title">
      layout-default
    </div>
    <div v-if="$nuxt.isOffline">
      You are offline
    </div>
    <div v-if="$nuxt.isOnline">
      You are online
    </div>
    <div>
      <h1>Layout根组件-middleware用于每个router：</h1>
      <Visits />
    </div>
    <nuxt name="top" />
    <nuxt />
  </div>
</template>
<script>
import Visits from '~/components/Visits'

export default {
  components: { Visits }
}
</script>
<style>
/* html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
</style>
