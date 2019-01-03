<template>
  <div id="app">
    <LoginWall v-if="user == ''" v-on:register-user="storeUserInfo"/>
    <WaitingRoom v-if="user != '' && game.cards.black.text == ''"/>
    <div class="game" v-if="user != '' && game.cards.black.text != ''">
      <Tabs :user="user"/>
      <Feed/>
      <Deck :cards="deck"/>
    </div>
  </div>
</template>

<script>

  import axios from 'axios';

  import { mapActions, mapState } from 'vuex'

  import Tabs from "./components/Tabs.vue";
  import Feed from "./components/Feed.vue";
  import Deck from "./components/Deck.vue";
  import LoginWall from "./components/LoginWall.vue";
  import WaitingRoom from "./components/WaitingRoom.vue";
  import Czar from './components/Czar.vue';

  export default {
    name: "app",
    components: {
      Tabs,
      Feed,
      Deck,
      LoginWall,
      WaitingRoom,
      Czar
    },
    computed: {
      ...mapState(['user', 'game', 'deck'])
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
      checkIfUserIsCzar: function() {

      },
      ...mapActions(['SET_BLACK_CARD', 'STORE_USER_DATA', 'RENDER_WHITE_CARD', 'STORE_DECK'])
    },
    sockets: {
      UPDATE_UI: function (data) {
          console.log(data);
          this.SET_BLACK_CARD({
            text: JSON.parse(data).cards.black.text
          });
          this.RENDER_WHITE_CARD(JSON.parse(data).cards.white);
          this.checkIfUserIsCzar();
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


</style>
