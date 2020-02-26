export default function ({ store, route, redirect }) {
  console.log('middleware-visits')
  store.commit('ADD_VISIT', route.path)
}
