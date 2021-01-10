export const state = () => ({
  activeSidebar: true,
})

export const mutations = {
  SET_ACTIVE_SIDEBAR(state, value) {
    state.activeSidebar = value
  },
}

export const getters = {
  activeSidebar(state) {
    return state.activeSidebar
  },
}

export const actions = {
  setActiveSideBar({ commit }, value) {
    commit('SET_ACTIVE_SIDEBAR', value)
  },
}
