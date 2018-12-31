<template>
    <div class="horizontal-shadow-limiter">
        <div class="deck">
            <h1>Deck</h1>
            <hr/>
            <div class="card-holder">
                    <ButtonCard v-for="card of cards" :key="card.text" v-bind:text="card.text"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import ButtonCard from "./ButtonCard.vue"

    export default {
        name: "deck",
        props: ['cards'],
        components: {
            ButtonCard
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
    }

    .deck h1 {
        margin: 0 10px;
        font-size: 1.4rem;
    }

    .deck hr {
        margin: 2px 0;
    }

    .deck .card-holder {
        height: calc(100% - 70px);
        padding: 10px 10px;
        overflow-x: auto;
        min-width: 100%;
        white-space: nowrap;
    }

</style>