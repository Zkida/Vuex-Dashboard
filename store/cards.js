export const state = () => ({
  cards: [],
})

export const mutations = {
  SET_CARDS(state, cards) {
    state.cards = cards
  },
}

export const getters = {
  cards(state) {
    return state.cards
  },
}

export const actions = {
  async getCards({ commit }) {
    let response = await this.$axios.get('api/cards')

    commit('SET_CARDS', response.data.data)
  },
}

//1|52l5ir0OgDxpSEXzGwXys0qsTGAXByjU9lq9eHTE
