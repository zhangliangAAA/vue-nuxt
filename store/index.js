import axios from '@/utils/request'
const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  visits: [],
  authUser: null,
  auth: null //jwt
})

export const mutations = {
  ADD_VISIT (state, path) {
    state.visits.push({
      path,
      date: new Date().toJSON()
    })
  },
  SET_USER (state, user) {
    state.authUser = user
  },
  setAuth (state, auth) {
    state.auth = auth
  }
}
export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    console.log('nuxtServerInit------------nuxtServerInit')
    
    if (req && req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
    let auth = null
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = parsed.auth //JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
  },
  async login ({ commit }, { username, password }) {
    try {
      
      const data  = await axios.post('/api/login', { username, password }) 
      commit('SET_USER', data)
      return data
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }

}
