import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
    socket: null,
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
    connectSocket: (state, payload) => {
      state.socket = payload.socket;
    },
    setBlackCard: (state, payload) => {
      state.game.cards.black.text = payload.text;
    },
    storeUserData: (state, payload) => {
      state.user = payload.name;
    },
    selectWhiteCard: (state, payload) => {
      state.game.cards.white.push({
        text: payload.text,
        sender: state.user
      });
    }
  },
  actions: {
    CONNECT_SOCKET: (context, payload) => {
      context.commit("connectSocket", payload);
    },
    SET_BLACK_CARD: (context, payload) => {
      context.commit("setBlackCard", payload);
    },
    STORE_USER_DATA: (context, payload) => {
      context.commit("storeUserData", payload);
    },
    SELECT_WHITE_CARD: (context, payload) => {
      context.commit("selectWhiteCard", payload);
      console.log("Selected card", payload);
    }
  }
})
