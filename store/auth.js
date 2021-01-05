export const state = () => ({
  authenticated: false,
  user: null,
})

export const mutations = {
  SET_AUTHENTICATED(state, value) {
    state.authenticated = value
  },
  SET_USER(state, data) {
    state.user = data
  },
}

export const getters = {
  authenticated(state) {
    return state.authenticated
  },
  user(state) {
    return state.user
  },
}

export const actions = {
  async login({ dispatch }, credentials) {
    await this.$axios.get('/sanctum/csrf-cookie')
    await this.$axios.post('/api/login', credentials)

    return dispatch('me')
  },

  me({ commit }) {
    return this.$axios
      .get('api/user')
      .then((response) => {
        // auth
        commit('SET_AUTHENTICATED', true)
        commit('SET_USER', response.data)
      })
      .catch(() => {
        // not auth
        commit('SET_AUTHENTICATED', false)
        commit('SET_USER', null)
      })
  },

  async logout({ dispatch }) {
    await this.$axios.post('/api/logout')

    return dispatch('me')
  },
}

//1|52l5ir0OgDxpSEXzGwXys0qsTGAXByjU9lq9eHTE
