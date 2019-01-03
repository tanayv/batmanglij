<template>
    <div class="feed">
        <CzarCard color="black" :text="game.cards.black.text"/>
        <hr/>
        <CzarCard color="white" v-for="card of game.cards.white" :key="card.text" :text="card.text" :sender="card.sender" v-on:card-selected="declareRoundWinner"/>
    </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex';
    import CzarCard from "./CzarCard.vue";

    export default {
        name: 'Czar',
        components: {
            CzarCard
        },
        computed: {
            ...mapState(['game'])
        },
        methods: {
            declareRoundWinner: function(data) {
                console.log("Czar has selected Card '" + data.text + "' from " + data.sender);
            },
            ...mapActions([])
        }
    }
</script>

<style>

</style>
