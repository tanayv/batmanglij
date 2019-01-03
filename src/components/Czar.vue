<template>
    <div class="czar-container">
        <Navigation/>
        <div class="feed">
            <CzarCard color="black" :text="game.cards.black.text"/>
            <hr/>
            <CzarCard color="white" v-for="card of game.cards.white" :key="card.text" :text="card.text" :sender="card.sender" v-on:card-selected="declareRoundWinner"/>
        </div>
    </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex';

    import CzarCard from "./CzarCard.vue";
    import Navigation from "./Navigation.vue";
    

    export default {
        name: 'Czar',
        components: {
            CzarCard,
            Navigation
        },
        computed: {
            ...mapState(['game'])
        },
        methods: {
            declareRoundWinner: function(data) {
                console.log("Czar has selected Card '" + data.text + "' from " + data.sender);
                let czarName = this.game.players.find((player) => {
                    return player.czar 
                })
                this.$socket.emit("DECLARE_WINNER", {
                    czar: czarName,
                    winner: data.sender
                });
            }
        }
    }
</script>

<style>
    .czar-container {
        height: 100%;
        width: 100%;
    }
</style>
