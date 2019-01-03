<template>
  <div id="app">
    <LoginWall v-if="user == ''" v-on:register-user="storeUserInfo"/>
    <WaitingRoom v-if="user != '' && game.cards.black.text == ''"/>

    <div class="game" v-if="user != '' && game.cards.black.text != ''">
      <Navigation/>
      <div class="tab-switcher" v-if="activeTabIndex == 0">
        <div class="czar-switcher" v-if="czar">
            <Czar/>
        </div>
        <div class="czar-switcher" v-if="!czar">
          <Feed/>
          <Deck :cards="deck"/>
        </div>
      </div>
      <div class="tab-switcher" v-if="activeTabIndex == 1">
        <Scoreboard/>
      </div>
    </div>
  </div>
</template>

<script>

  import axios from 'axios';

  import { mapActions, mapState } from 'vuex'

  import Navigation from "./components/Navigation.vue";
  import Feed from "./components/Feed.vue";
  import Deck from "./components/Deck.vue";
  import LoginWall from "./components/LoginWall.vue";
  import WaitingRoom from "./components/WaitingRoom.vue";
  import Czar from './components/Czar.vue';
  import Scoreboard from './components/Scoreboard.vue';

  export default {
    name: "app",
    components: {
      Navigation,
      Feed,
      Deck,
      LoginWall,
      WaitingRoom,
      Czar,
      Scoreboard
    },
    computed: {
      ...mapState(['user', 'game', 'deck', 'czar', 'activeTabIndex'])
    },
    methods: {
      storeUserInfo: function(userName) {

        /* Send socket message to register user */
        this.$socket.emit('REGISTER_USER', {
            user: userName
        });
        this.STORE_USER_DATA(userName);

        axios.get("/api/draw/white/full")
          .then(
            response => {
              console.log("Cards Drawn", response);
              this.STORE_DECK(response.data);
            }
          ).catch(
            error => {
              console.log("Error drawing cards", error);
            }
          )
      },
      storePlayerList: function(playerList) {
        this.STORE_PLAYER_LIST(playerList);
        this.checkIfUserIsCzar(playerList);
      },
      checkIfUserIsCzar: function(playerList) {

        /* Find user in list of players */
        var userSprite = playerList.find((player) => {
          return player.name === this.user
        });

        console.log("Active User Data from player list", userSprite);

        if (userSprite.czar == true)
          this.UPDATE_USER_CZAR_STATUS(true);
        else
          this.UPDATE_USER_CZAR_STATUS(false);
      },
      replenishDeck: function() {
        axios.get("/api/draw/white/single")
          .then(
            response => {
              console.log("Cards Drawn", response);
              this.REPLENISH_DECK(response.data);
            }
          ).catch(
            error => {
              console.log("Error drawing cards", error);
            }
          )
      },
      ...mapActions(['SET_BLACK_CARD', 'STORE_USER_DATA', 'RENDER_WHITE_CARD', 'STORE_DECK', 'STORE_PLAYER_LIST',
      'UPDATE_USER_CZAR_STATUS', 'DEFROST_DECK', 'REPLENISH_DECK'])
    },
    sockets: {
      UPDATE_UI: function (data) {
          console.log(data);
          this.SET_BLACK_CARD({
            text: JSON.parse(data).cards.black.text
          });
          this.RENDER_WHITE_CARD(JSON.parse(data).cards.white);
          this.storePlayerList(JSON.parse(data).players);
      },
      NEW_ROUND: function (data) {
        this.DEFROST_DECK();
      },
      DECLARE_WINNER: function(data) {
        console.log("WINNER DECLARED in App.vue", data);
      }
    }
  };
</script>

<style>

  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 0;
    width: 60%;
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    #app {
      width: 100%;
    }
  }

  .game {
    width: 100%;
    height: 100%;
  }

  .tab-switcher {
    width: 100%;
    height: 100%;
  }

  .czar-switcher {
    width: 100%;
    height: 100%;
  }


</style>
