<template>
  <div>
    <h1>Vuex 示例</h1>
    <p>{{ num }}</p>
    <button @click="increment">
      +
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // fetch(context) is called by the server-side
  // and before instantiating the component
  // fetch ({ store }) {
  //   store.commit('add')
  // },
  computed: {
    ...mapGetters({
      num: 'count/getNum'
    })
  },
  methods: {
    increment () {
      this.$store.commit('count/add')
    }
  }
}
</script>
