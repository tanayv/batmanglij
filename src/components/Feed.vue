<template>
    <div class="feed">
        <Card color="black" :text="game.cards.black.text"/>
        <hr/>
        <Card color="white" v-for="card of game.cards.white" :key="card.text" v-bind:text="card.text"/>
    </div>
</template>


<script>
    import { mapState } from 'vuex'
    import Card from "./Card.vue"

    export default {
        name: "feed",
        components: {
            Card
        },
        computed: {
            ...mapState(['game'])
        }
        
    }
</script>

<style>
    .feed {
        height: calc(100% - 60px);
        width: 100%;
        background-color: #ececec;
        padding: 10px;
    }

    hr {
        opacity: 0.3;
    }
</style>
