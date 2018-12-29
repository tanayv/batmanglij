<template>
  <div id="app">
    <Nav/>
    <Feed/>
    <Deck/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Feed from "./components/Feed.vue";
import Deck from "./components/Deck.vue";

export default {
  name: "app",
  components: {
    Nav,
    Feed,
    Deck
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
