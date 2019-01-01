<template>
  <div id="app">
    <div class="game" v-if="user != ''">
      <Tabs :user="user"/>
      <Feed v-if="state.cards" :cards="state.cards"/>
      <Deck :cards="deck"/>
    </div>
    <LoginWall v-if="user == ''" v-on:register-user="storeUserInfo"/>
  </div>
</template>

<script>

  import io from 'socket.io-client';
  import axios from 'axios';

  import Tabs from "./components/Tabs.vue";
  import Feed from "./components/Feed.vue";
  import Deck from "./components/Deck.vue";
  import LoginWall from "./components/LoginWall.vue";

  export default {
    name: "app",
    components: {
      Tabs,
      Feed,
      Deck,
      LoginWall
    },
    data() {
      return {
        user: '',
        flare: '',
        deck: [],
        state: {},
        socket: io()
      }
    },
    methods: {
      storeUserInfo: function(userName) {
        this.user = userName;
        
        /* Send socket message to register user */
        console.log("REGISTER_USER");
        this.socket.emit('REGISTER_USER', {
            user: this.user
        });

        axios.get("/api/draw/white/full")
          .then(
            response => {
              console.log("Cards Drawn", response);
              this.deck = response.data
            }
          ).catch(
            error => {
              console.log("Error", error);
            }
          )
      },
      updateGameState: function(newState) {
        this.state = newState;
      }
    },
    mounted() {
        console.log("Initial State", this.state);

        this.socket.on('UPDATE_UI', function(data) {

            this.state = JSON.parse()
            console.log("Final State", this.state)
        });
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

  .game {
    width: 100%;
    height: 100%;
  }


</style>
