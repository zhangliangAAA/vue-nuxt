<template>
  <div>
    <h2>nest-child：</h2>
    <p>$route.params.child：{{ $route.params.child }}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style></style>
