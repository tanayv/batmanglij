<template>
    <div class="feed">
        <Card color="black" v-bind:text="cards.black.text"/>
        <hr/>
        <Card color="white"/>
    </div>
</template>


<script>

    import Card from "./Card.vue"

    export default {
        name: "feed",
        props: ['cards'],
        components: {
            Card
        }
    }

    /**
     * {"players":["Tanay"],"cards":{"black":{"deck":"bw","icon":"","text":"What is bishk eating for dinner today?"},"white":[{}]}}

     */
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
