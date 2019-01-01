import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    cards: {
      black: {
        text: ""
      }
    }
  },
  mutations: {
    setBlackCard: (state, payload) => {
      state.cards.black.text = payload.text
    }
  },
  actions: {
    SET_BLACK_CARD: (context, payload) => {
      context.commit("setBlackCard", payload)
    }
  }
})
