<template>
    <div class="horizontal-shadow-limiter">
        <div class="deck" v-bind:class="{'collapsed': collapsed}">
            <div class="header">
                <h1>Deck</h1>
                <div class="collapser" v-on:click="toggleDeck()">△</div>
            </div>
            <hr/>
            <div class="card-holder">
                    <ButtonCard v-for="card of cards" :key="card.text" v-bind:text="card.text" v-on:card-selected="selectWhiteCard"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex';
    import ButtonCard from "./ButtonCard.vue";

    export default {
        name: "deck",
        props: ['cards'],
        components: {
            ButtonCard
        },
        computed: {
            ...mapState(['user'])
        },
        data() {
            return {
                collapsed: false
            }
        },
        methods: {
            toggleDeck: function() {
                this.collapsed = !this.collapsed
            },
            selectWhiteCard: function(data) {
                let payload = {
                    text: data,
                    sender: this.user
                };
                this.$socket.emit("SELECT_CARD", JSON.stringify(payload));
            }
        },
        sockets: {
            connect: function () {
                console.log('socket connected')
            }
        }
    }

</script>

<style>

    .horizontal-shadow-limiter {
        width: 100%;
        overflow-x: hidden;
        padding: 5px 0 0 0; 
        z-index: 4;
    }

    .deck {
        position: absolute;
        bottom: 0;
        height: 300px;
        background-color: #fff;
        width: 100%;
        box-shadow: 0px -1px 5px 0px #1a1a1a3d;
        padding: 10px 20px;
        transition: all 0.1s ease;
    }

    .deck.collapsed {
        bottom: -250px;
    }

    .deck.collapsed .card-holder {
        display: none;
    }

    .deck .header {
        height: 40px;
    }

    .deck h1 {
        margin: 0 10px;
        font-size: 1.4rem;
    }

    .deck .collapser {
        position: absolute;
        right: 20px;
        top: 10px;
        cursor: pointer;
        transform: scaleY(-1);
    }

    .deck.collapsed .collapser {
        transform: scaleY(1);
    }

    .deck hr {
        margin: 2px 0;
    }

    .deck .card-holder {
        height: calc(100% - 50px);
        padding: 10px 10px;
        overflow-x: auto;
        min-width: 100%;
        white-space: nowrap;
    }

</style>