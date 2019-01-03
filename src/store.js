import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeTabIndex: 0,
    user: "",
    czar: false,
    deck: [],
    frozenDeck: false,
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
    setActiveTabIndex: (state, payload) => {
      state.activeTabIndex = payload;
    },
    setBlackCard: (state, payload) => {
      state.game.cards.black.text = payload.text;
    },
    storeUserData: (state, payload) => {
      state.user = payload;
    },
    storeDeck: (state, payload) => {
      state.deck = payload;
      console.log("Deck stored: ", state.deck);
    },
    storePlayerList: (state, payload) => {
      state.game.players = payload;
    },
    renderWhiteCard: (state, payload) => {
      state.game.cards.white = payload;
    },
    updateUserCzarStatus: (state, payload) => {
      state.czar = payload;
    },
    freezeDeck: (state, payload) => {
      /** Remove given card from deck and prevent user from playing additional cards */
      state.deck = state.deck.filter((card) => {
        return card.text != payload
      });
      
      state.frozenDeck = true;
    },
    defrostDeck: (state, payload) => {
      state.frozenDeck = false;
    }
  },
  actions: {
    SET_ACTIVE_TAB_INDEX: (context, payload) => {
      context.commit("setActiveTabIndex", payload);
    },
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
    STORE_PLAYER_LIST: (context, payload) => {
      context.commit("storePlayerList", payload);
    },
    RENDER_WHITE_CARD: (context, payload) => {
      context.commit("renderWhiteCard", payload);
      console.log("ACTION CALL: RENDER WHITE CARD", payload);
    },
    UPDATE_USER_CZAR_STATUS: (context, payload) => {
      context.commit("updateUserCzarStatus", payload);
    },
    FREEZE_DECK: (context, payload) => {
      context.commit("freezeDeck", payload);
    },
    DEFROST_DECK: (context, payload) => {
      context.commit("defrostDeck", payload);
    }
  }
})
