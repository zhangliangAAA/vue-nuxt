export const state = () => ({
  num: 0
})

export const mutations = {
  add (state) {
    state.num ++
  }
}

export const getters = {
  getNum (state) {
    return state.num
  }
}
