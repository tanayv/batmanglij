import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
    deck: [],
    game: {
      players: [],
      cards: {
        black: {
          text: ""
        },
        white: []
      }
    }
  },
  mutations: {
    setBlackCard: (state, payload) => {
      console.log("Prev game black crd", state.game.cards.black.text);
      state.game.cards.black.text = payload.text;
      console.log("Final game black crd", state.game.cards.black.text);
    },
    storeUserData: (state, payload) => {
      state.user = payload;
    },
    storeDeck: (state, payload) => {
      state.deck = payload;
      console.log("Deck stored: ", state.deck);
    },
    renderWhiteCard: (state, payload) => {
      state.game.cards.white = payload;
    }
  },
  actions: {
    SET_BLACK_CARD: (context, payload) => {
      console.log("ACTION CALL: SET_BLACK_CARD", payload);
      context.commit("setBlackCard", payload);
    },
    STORE_USER_DATA: (context, payload) => {
      console.log("ACTION CALL: STORE_USER_DATA", payload);
      context.commit("storeUserData", payload);
    },
    STORE_DECK: (context, payload) => {
      context.commit("storeDeck", payload);
    },
    RENDER_WHITE_CARD: (context, payload) => {
      context.commit("renderWhiteCard", payload);
      console.log("ACTION CALL: RENDER WHITE CARD", payload);
    }
  }
})
