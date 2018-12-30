<template>
  <div id="app">
    <div class="game" v-if="user != ''">
      <Nav/>
      <Feed/>
      <Deck/>
    </div>
    <LoginWall v-if="user == ''" v-on:register-user="storeUserInfo"/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Feed from "./components/Feed.vue";
import Deck from "./components/Deck.vue";
import LoginWall from "./components/LoginWall.vue";

export default {
  name: "app",
  components: {
    Nav,
    Feed,
    Deck,
    LoginWall
  },
  data() {
    return {
      user: '',
      flare: '',
      deck: []
    }
  },
  methods: {
    storeUserInfo: function(userName) {
      this.user = userName;
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


</style>
